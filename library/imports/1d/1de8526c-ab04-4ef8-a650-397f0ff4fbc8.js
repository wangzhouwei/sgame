"use strict";
cc._RF.push(module, '1de85JsqwRO+KZQOX8P9PvI', 'mailItem');
// Script/prefab/mailItem.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

cc.Class({
    extends: cc.Component,

    properties: {
        title: cc.Label,
        sender: cc.Label,
        sendTime: cc.Label,
        readIcon: cc.Sprite,
        readFlag: {
            default: [],
            type: cc.SpriteFrame
        },
        choiceBtn: cc.Toggle,
        msgInfo: cc.Object
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},
    init: function init(info) {
        this.title.string = info.title;
        this.sender.string = info.from;
        this.sendTime.string = info.time;
        this.readIcon.spriteFrame = this.readFlag[info.readtype];
        this.msgInfo = info;
    },
    choiceFunc: function choiceFunc() {
        if (arguments.length === 1) {
            this.choiceBtn.isChecked = arguments[0];
        }
    },
    delFunc: function delFunc() {
        if (this.choiceBtn.isChecked === true) {
            this.node.destroy();
        };
    },

    //点击详情
    touchDetail: function touchDetail() {
        cc.loader.loadRes("prefab/messageDetail", function (err, pertab) {
            var totalpop = cc.instantiate(pertab);
            var info = {};
            info.from = " 系统中心 ";
            info.time = new Date().toDateString();
            info.text = '现在是北京时间：' + new Date().toLocaleString();
            totalpop.getComponent('messageDetail').init(info);
            cc.director.getScene().addChild(totalpop);
        });
    }
}
// update (dt) {},
);

cc._RF.pop();