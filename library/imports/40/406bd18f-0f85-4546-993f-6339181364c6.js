"use strict";
cc._RF.push(module, '406bdGPD4VFRpk/YzkYE2TG', 'showAction');
// Script/xui/showAction.js

"use strict";

var ShowAction = {
    _animSpeed: 0.3 // 动画速度
};
ShowAction.popOut = function (node, animSpeed) {
    var self = ShowAction;
    if (self._node) return;
    self._animSpeed = animSpeed ? animSpeed : self._animSpeed;
    self._node = node;
    // 执行弹进动画
    self.startFadeIn = function () {
        cc.eventManager.pauseTarget(self._node, true);
        self._node.position = cc.p(0, 0);
        self._node.setScale(0.1);
        self._node.opacity = 0;
        self._node.runAction(self.actionFadeIn);
    };
    // 弹进动画完成回调
    self.onFadeInFinish = function () {
        cc.eventManager.resumeTarget(self._node, true);
    };
    // 动画 
    var cbFadeIn = cc.callFunc(self.onFadeInFinish, self);
    self.actionFadeIn = cc.sequence(cc.spawn(cc.fadeTo(self._animSpeed, 255), cc.scaleTo(self._animSpeed, 1.0).easing(cc.easeBackOut())), cbFadeIn);
    // 展现 self
    self.startFadeIn();
};
ShowAction.popIn = function (callback) {
    var self = ShowAction;
    // 弹出动画完成回调
    self.onFadeOutFinish = function () {
        callback();
        self.onDestory();
    };
    // 执行弹出动画
    self.startFadeOut = function () {
        cc.eventManager.pauseTarget(self._node, true);
        self._node.runAction(self.actionFadeOut);
    };
    // 动画 
    var cbFadeOut = cc.callFunc(self.onFadeOutFinish, self);
    self.actionFadeOut = cc.sequence(cc.spawn(cc.fadeTo(self._animSpeed, 0), cc.scaleTo(self._animSpeed, 0).easing(cc.easeBackIn())), cbFadeOut);
    // 展现 self
    self.startFadeOut();
};
ShowAction.onDestory = function () {
    ShowAction._node = null;
    ShowAction._animSpeed = 0.3;
};

cc._RF.pop();