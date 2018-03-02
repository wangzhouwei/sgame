(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Event/GameCore.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '755e82xEppKDolLMvA6rK1M', 'GameCore', __filename);
// Script/Event/GameCore.js

"use strict";

/**
 * Created by Administrator on 2017/8/31.
 */
var GameEventManager = require("./GameEventManager.js");
var GameEvent = cc.Class({
    extends: GameEventManager,
    statics: {
        getInstance: function getInstance() {
            if (!this.gameEvent) {
                this.gameEvent = new GameEvent();
            }
            return this.gameEvent;
        }
    },
    properties: {},
    connectNet: function connectNet(host, cb) {
        this.connect(host, cb);
    },


    /**
     *  请求协议
     * @param event 协议id
     * @param data 需要的字段
     */
    startEvent: function startEvent(event, data) {
        cc.log("\u53D1\u9001\u7684\u534F\u8BAEid\u4E3A\uFF1A" + event);
        var body = {
            "code": event
        };
        body.data = data;
        this.sendMessage(body);
    },


    /**
     *  收到服务器回复
     * @param msgId 回复的协议id
     * @param msgData 回复的字段
     */
    onMsg: function onMsg(msgId, msgData) {
        cc.log("gameEvent \u6536\u5230\u7684\u534F\u8BAEid\u4E3A\uFF1A" + msgId);
        cc.log(msgData);
    },

    /**
     *  微信回调返回到code后，被调用的方法(被原生回调的)
     * @param wxcode 微信成功授权登录后传过来的code
     */
    recieveWXAuthenticationCode: function recieveWXAuthenticationCode(wxcode) {
        this.startEvent(cc.xx.gameCfg.EVENT.EVENT_LOGIN_REP, wxcode);
    },

    // 往手机本地存用户信息
    writtenUserInfoIntoCellPhone: function writtenUserInfoIntoCellPhone(data) {
        cc.sys.localStorage.setItem(cc.xx.userEvName.USER_INFO_KEY, JSON.stringify(data.user));
        cc.sys.localStorage.setItem(cc.xx.userEvName.USER_CARD_INFO_KEY, JSON.stringify(data.cards));
        // if(data.agent) {
        //     cc.sys.localStorage.setItem(cc.xx.userEvName.USER_ANGENT_INFO, JSON.stringify(data.agent));
        // }
    },

    /**
     *  电量改变监听的回调更新(被原生回调的)
     * @param sta 充电状态
     */
    updateCurrentBatteryStatus: function updateCurrentBatteryStatus(sta) {
        cc.log("oc观察者观察电量发生改变回调" + sta);
        if (sta == "Charging") {
            this.notifyEvent(cc.xx.gameCfg.BATTERTY.BATTERTY_CHARGING, true);
        } else {
            this.notifyEvent(cc.xx.gameCfg.BATTERTY.BATTERTY_CHARGING, false);
        }
    },

    /**
     *  电量改变监听的回调更新(被原生回调的)
     * @param elevel 电量值
     */
    updateCurrentBatteryLevel: function updateCurrentBatteryLevel(elevel) {
        cc.log("oc观察者观察电量发生改变回调" + elevel);
        this.notifyEvent(cc.xx.gameCfg.BATTERTY.BATTERTY_LEVEL_UPDATE, elevel.toPrecision(2));
    },

    /**
     *  成功上传到腾讯服务器后回调(被原生回调的)
     * @param fileID 语音消息id
     */
    didUploadToGvoiceSever: function didUploadToGvoiceSever(fileID) {
        cc.log("oc回调js成功，上传成功" + fileID);
        this.startEvent(cc.xx.gameCfg.EVENT.EVENT_YUYIN_UPLOAD, fileID);
    },

    /**
     *  播放成功后回调(被原生回调的)
     * @param
     */
    didFinishPlayCurrentMessage: function didFinishPlayCurrentMessage() {
        cc.log("oc回调js成功，播放完成");
        this.notifyEvent(cc.xx.gameCfg.GVOICE.GVOICE_MESSAGE_FINISH_PLAYING);
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
        //# sourceMappingURL=GameCore.js.map
        