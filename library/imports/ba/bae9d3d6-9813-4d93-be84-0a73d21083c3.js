"use strict";
cc._RF.push(module, 'bae9dPWmBNNk76ECnPSEIPD', 'messageDetail');
// Script/prefab/messageDetail.js

'use strict';

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
        sender: cc.Label,
        sendTime: cc.Label,
        sendDetail: cc.Label
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},
    init: function init(info) {
        this.sender.string = info.from;
        this.sendTime.string = info.time;
        this.sendDetail.string = info.text;
    },
    close: function close() {
        var _this = this;

        var showbg = cc.find('showbg', this.node);
        var scriptcom = showbg.getComponent('popAction');
        scriptcom.close(function () {
            _this.node.destroy();
        });
    }
}
// update (dt) {},
);

cc._RF.pop();