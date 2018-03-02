(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Event/GameEventManager.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '73df834UiZOYaqecHBYMEwC', 'GameEventManager', __filename);
// Script/Event/GameEventManager.js

"use strict";

var EventManager = require('./EventManager.js');
var GameEventManager = cc.Class({
    extends: EventManager,
    gameSocket: null,
    hostStr: null, // 连接的地址
    reconnectMaxNum: null, // 重连的最大次
    reconnectCount: null, // 重连的计数
    reconnectTime: null, // 重连的间断时间
    reconnectTimer: null, // 重连的调度器

    isDisConnect: null, // 是否是主动断开连接
    _heartCheckTime: null, // 心跳检测的时间
    _heartCurTime: null, // 当前的时间
    _heartIsOk: null, // 心跳检测是否正常
    _heartTimer: null, // 心跳检测的调度器

    _ownSet: null, // 回调监听的对象
    _isReconnect: null, // 是否是重连的
    /**
     *  构造函数
     */
    ctor: function ctor() {
        this.gameSocket = null;
        this.reconnectMaxNum = 10;
        this.reconnectCount = 0;
        this.reconnectTime = 1000;
        this.reconnectTimer = null;
        this.isDisConnect = false;
        this.hostStr = null;
        this._heartCheckTime = 1000;
        this._heartCurTime = 0;
        this._heartIsOk = true;
        this._heartTimer = null;
        this._isReconnect = false;
    },

    /**
     *  设置回调监听的对象
     */
    setCallBack: function setCallBack(target) {
        this._ownSet = target;
    },

    /**
     *  连接服务器，已经监听服务器一系列事件
     */
    connect: function connect(hostStr, callBack) {
        var _this = this;

        cc.log("\u8FDB\u884C\u7F51\u7EDC\u8FDE\u63A5, hostStr = " + hostStr);
        this.hostStr = hostStr;
        var self = this;
        this.gameSocket = new WebSocket(hostStr);
        this.gameSocket.onopen = function () {
            cc.log("websocket has connect");
            _this.cleanReconnectTimer();
            _this._heartIsOk = true;
            cc.xx.Tips.hide();
            _this.heartCheck();
            if (_this._isReconnect) {
                if (_this._ownSet) {
                    _this._ownSet.reconnected();
                }
                _this._isReconnect = false;
            }
            if (callBack && callBack instanceof Function) {
                callBack();
            }
        };
        this.gameSocket.onerror = function (errormsg) {
            cc.log("websocket connect error", errormsg);
        };
        this.gameSocket.onclose = function () {
            cc.log("websocket has close");
            if (!_this.isDisConnect) {
                _this.reconnect();
            }
        };
        this.gameSocket.onmessage = function (data) {
            if (data.data == "pong") {
                // cc.log(`heart: ${data.data}`);
                _this._heartIsOk = true;
            } else {
                data = JSON.parse(data.data);
                var msgId = data.mid;
                var funId = data.fid;
                var msgData = data.data;
                self.onMsg(funId, msgId, msgData);
            }
            return;
            //  todo 以下是用protobuf传输数据写法
            if (cc.sys.isNative) {
                self.handleData(data.data);
            } else {
                var fileReader = new FileReader(); //  在浏览器中读取文件
                fileReader.onload = function (progressEvent) {
                    //  读取文件完成后触发（成功读取）
                    var utfs = this.result; //  result就是读取的结果
                    self.handleData(utfs);
                };
                fileReader.readAsArrayBuffer(data.data);
            }
        };
        this.gameSocket.sendMessage = function (msgData, state) {
            if (_this.gameSocket.readyState === WebSocket.OPEN) {
                cc.log("\u53D1\u9001\u7684\u6D88\u606F\u4E3A\uFF1A" + JSON.stringify(msgData));
                if (state) {
                    _this.gameSocket.send(msgData);
                } else {
                    _this.gameSocket.send(JSON.stringify(msgData));
                }
            } else {
                cc.error("websocket connect error: " + _this.gameSocket.readyState);
            }
        };
    },

    /**
     * 心跳检测
     */
    heartCheck: function heartCheck() {
        var _this2 = this;

        var timeFun = function timeFun() {
            if (_this2._heartIsOk) {
                if (_this2.gameSocket) {
                    var str = "ping";
                    if (_this2.gameSocket.readyState === WebSocket.OPEN) {
                        _this2._heartIsOk = false;
                        // this.gameSocket.send(str);
                        _this2.sendMessage(str, true);
                    }
                }
                _this2._heartCurTime = 0;
            } else {
                _this2._heartCurTime++;
            }
            if (_this2._heartCurTime >= 5) {
                cc.log("\u5FC3\u8DF3\u68C0\u6D4B\u6709\u95EE\u9898");
                clearTimeout(_this2._heartTimer);
                // this.close(false);
            } else {
                _this2.heartCheck();
            }
        };
        this._heartTimer = setTimeout(timeFun, this._heartCheckTime);
    },


    /**
     *  重连
     */
    reconnect: function reconnect() {
        var _this3 = this;

        if (this.reconnectCount > this.reconnectMaxNum) {
            cc.log("重连次数已达最大");
            this.hostStr = this.changeConnectHost();
            if (!this.hostStr) {
                return;
            };
            this.reconnectCount = 0;
        }
        this.reconnectTimer = setTimeout(function () {
            cc.log("\u6B63\u5728\u8FDB\u884C\u7B2C" + _this3.reconnectCount + "\u6B21\u91CD\u8FDE");
            cc.xx.Tips.show("网络连接中断，正在重新连接....");
            _this3.connect(_this3.hostStr);
            _this3._isReconnect = true;
            _this3.reconnectCount++;
        }, this.reconnectTime);
    },


    /**
     *  连接成功，清空重连的调度器
     */
    cleanReconnectTimer: function cleanReconnectTimer() {
        this.reconnectCount = 0;
        if (this.reconnectTimer) {
            clearTimeout(this.reconnectTimer);
            this.reconnectTimer = null;
        }
    },


    /**
     *  发送消息给服务端
     * @param msgId 消息的id
     * @param msgData 消息的数据
     */
    sendMessage: function sendMessage(msgData, state) {
        console.log('sendMessage ', msgData, state);
        if (msgData === null || msgData === undefined) {
            msgData = null;
            cc.log("\u6D88\u606F\u4E3A\u7A7A");
            return;
        }
        this.gameSocket.sendMessage(msgData, state);
    },

    /**
     *  关闭与服务器的连接(主动断开)
     */
    close: function close(isDis) {
        this.gameSocket.close();
        this.gameSocket = null;
        this.isDisConnect = isDis;
    },

    /**
     *  处理数据（反序列化以及转化）
     * @param data 数据
     */
    handleData: function handleData(data) {
        var bytes = new Uint8Array(data); // 转化数据
        var msgId = bytes[0]; //  协议id放在uint8Array的第一位
        var body = new Uint8Array(data, 1, data.byteLength - 1);
        this.onMsg(msgId, body);
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=GameEventManager.js.map
        