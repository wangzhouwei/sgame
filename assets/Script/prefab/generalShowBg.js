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
        _animSpeed:0.3,
        title:{
            default:null,
            type:cc.Sprite,
        },
        closeBtn: {
            default: null,
            type: cc.Button,
        },
        scaleBg:{
            default:null,
            type:cc.Sprite,
        },
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var self = this;
        this.closeBtn.node.on(cc.Node.EventType.TOUCH_END,self.close,self);
        // 动画 
        var cbFadeOut = cc.callFunc(self.onFadeOutFinish, self);
        var cbFadeIn = cc.callFunc(self.onFadeInFinish, self);
        self.actionFadeIn = cc.sequence(cc.spawn(cc.fadeTo(self._animSpeed, 255),cc.scaleTo(self._animSpeed, 1.0).easing(cc.easeBackOut())), cbFadeIn);
        self.actionFadeOut = cc.sequence(cc.spawn(cc.fadeTo(self._animSpeed, 0), cc.scaleTo(self._animSpeed, 0).easing(cc.easeBackIn())), cbFadeOut);
        
        self.scaleBg.runAction(self.actionFadeOut);

    },
    binit(pram){
        
    },
    close(){
        self.scaleBg.runAction(self.actionFadeIn);
    },
    // 执行弹出动画
    startFadeOut () {
        cc.eventManager.pauseTarget(Alert._alert, true);
        Alert._alert.runAction(self.actionFadeOut);
    },

    // 弹进动画完成回调
    onFadeInFinish () {
        cc.eventManager.resumeTarget(Alert._alert, true);
    },
    // 弹进动画完成回调
    onFadeInFinish () {
        cc.eventManager.resumeTarget(Alert._alert, true);
    },

    // 弹出动画完成回调
    onFadeOutFinish () {
        self.onDestory();
    },
});
