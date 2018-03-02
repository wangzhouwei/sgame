"use strict";
cc._RF.push(module, 'd620745PFNLVoR0svPwZ7Xd', 'EventManager');
// Script/Event/EventManager.js

"use strict";

/**
 * Created by Administrator on 2017/8/29.
 */
/**
 *  观察者类
 * @type {Function}
 */
var EventManager = cc.Class({
    observerList: null, // 观察者列表
    msgList: null, // 消息列表
    _isCache: null, // 是否协议缓存
    _cacheList: null, // 协议缓存列表
    statics: {
        getInstance: function getInstance() {
            if (!this.eventManager) {
                this.eventManager = new EventManager();
            }
            return this.eventManager;
        }
    },
    ctor: function ctor() {
        this.observerList = [];
        this.msgList = [];
        this._isCache = false;
        this._cacheList = [];
    },


    /**
     *  添加观察者
     * @param target
     */
    addObserver: function addObserver(target) {
        this.observerList.forEach(function (item) {
            if (item == target) {
                return true;
            }
        });
        if (target) {
            this.observerList.push(target);
        } else {
            cc.log("target is null");
        }
        cc.log("observerList.length = ", this.observerList.length);
    },


    /**
     *  移除观察者
     * @param target
     */
    removeObserver: function removeObserver(target) {
        var _this = this;

        if (!target) {
            cc.log("target is null");
        } else {
            this.observerList.forEach(function (item, index) {
                if (item == target) {
                    _this.observerList.splice(index, 1);
                }
            });
        }
        cc.log("observerList.length = ", this.observerList.length);
    },


    /**
     *  时间发生变化,通知观察者
     */
    notifyEvent: function notifyEvent(funId, msgId, msgData) {
        try {
            this.observerList.forEach(function (item) {
                item.onMessageEvent(funId, msgId, msgData);
            });
        } catch (err) {
            cc.error(err);
        }
    },

    /**
     *  添加消息列表
     * @param event 消息id
     * @param data 消息内容
     */
    addMsg: function addMsg(event, data) {
        var msg = {
            event: event,
            data: data
        };
        this.msgList.push(msg);
    },

    /**
     *  下发存储的消息
     */
    notifyMsg: function notifyMsg() {
        this.msgList.forEach(function (item) {
            cc.xx.roomEvent.notifyEvent(item.event, item.data);
        });
    },

    /**
     *  清空存储的消息列表
     */
    cleanMsgList: function cleanMsgList() {
        this.msgList = [];
    },

    /**
     *  将消息加入协议缓存列表
     * @param event id
     * @param data 数据
     */
    addMsgToCacheList: function addMsgToCacheList(event, data) {
        cc.log("\u5C06\u534F\u8BAE\u7F13\u5B58\u4E0B\u6765");
        var body = {
            event: event,
            data: data
        };
        this._cacheList.push(body);
    },

    /**
     *  q清空列表
     */
    cleanCacheList: function cleanCacheList() {
        this._cacheList = [];
    },

    /**
     *  缓存的开关
     * @param state
     */
    setIsCache: function setIsCache(state) {
        this._isCache = state;
    },

    /**
     *  下发缓存中的协议
     */
    notifyCacheList: function notifyCacheList() {
        // this._cacheList.forEach((item, index) => {
        //     if (this._isCache) {
        //         setTimeout((item, ) => {
        //             cc.xx.roomEvent.notifyEvent(item.event, item.data);
        //         }, 1000);
        //     }
        // });
        // if(!this._isCache) {
        //     cc.log("执行缓存的开关");
        //     return;
        // }
        if (this._isCache && this._cacheList.length > 0) {
            var cacheMsg = this._cacheList[0];
            if (cc.xx.room.huing) {
                if (cacheMsg.event === 4018 || cacheMsg.event == "room_game_data") {
                    cc.log("还没到胡牌动画");
                    return;
                }
            }
            this._cacheList.splice(0, 1);
            cc.log("\u4E0B\u4E00\u6761\u534F\u8BAE\uFF1A" + cacheMsg.event);
            cc.xx.roomEvent.notifyEvent(cacheMsg.event, cacheMsg.data);
        }
    }
});

cc._RF.pop();