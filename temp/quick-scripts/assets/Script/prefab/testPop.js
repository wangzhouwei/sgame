(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/prefab/testPop.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '86571urZ8hAKrWVxv+dHgA/', 'testPop', __filename);
// Script/prefab/testPop.js

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
        animSpeed2: 0.3
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        cc.log('popAction onload ');
        var cbFadeIn = cc.callFunc(this.onFadeInFinish, this);
        this.actionFadeIn = cc.sequence(cc.spawn(cc.fadeTo(this.animSpeed2, 255), cc.scaleTo(this.animSpeed2, 1.0).easing(cc.easeBackOut())), cbFadeIn);
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
        this.actionFadeOut = cc.sequence(cc.spawn(cc.fadeTo(this.animSpeed2, 0), cc.scaleTo(this.animSpeed2, 0).easing(cc.easeBackIn())), cbFadeOut);
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
        //# sourceMappingURL=testPop.js.map
        