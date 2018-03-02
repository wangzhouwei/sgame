"use strict";
cc._RF.push(module, '31c6eP0AIVL2qhEGTRtOhSR', 'popAction');
// Script/prefab/popAction.js

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
    // 动画 
    properties: {
        animSpeed1: 0.3
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        cc.log('popAction onload ');
        var cbFadeIn = cc.callFunc(this.onFadeInFinish, this);
        this.actionFadeIn = cc.sequence(cc.spawn(cc.fadeTo(this.animSpeed1, 255), cc.scaleTo(this.animSpeed1, 1.0).easing(cc.easeBackOut())), cbFadeIn);
        this.startFadeIn();
    },
    onFadeInFinish: function onFadeInFinish() {
        cc.eventManager.resumeTarget(this.node, true);
        console.log('onFadeInFinish');
    },

    // 执行弹进动画
    startFadeIn: function startFadeIn() {
        cc.eventManager.pauseTarget(this.node, true);
        this.node.position = cc.p(0, 0);
        this.node.setScale(0.5);
        this.node.opacity = 0;
        this.node.runAction(this.actionFadeIn);
    },
    close: function close(callback) {
        var _this = this;

        var cbFadeOut = cc.callFunc(function () {
            _this.onFadeOutFinish(callback);
        }, this);
        this.actionFadeOut = cc.sequence(cc.spawn(cc.fadeTo(this.animSpeed1, 0), cc.scaleTo(this.animSpeed1, 0).easing(cc.easeBackIn())), cbFadeOut);
        // 展现 this
        this.startFadeOut();
    },

    // 执行弹出动画
    startFadeOut: function startFadeOut() {
        cc.eventManager.pauseTarget(this.node, true);
        this.node.runAction(this.actionFadeOut);
    },
    onFadeOutFinish: function onFadeOutFinish(callback) {
        console.log('onFadeOutFinish');
        callback();
        // self.onDestory();
    }
}
// update (dt) {},
);

cc._RF.pop();