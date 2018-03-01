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
        animSpeed2:0.3,
     },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.log('popAction onload ');
        var cbFadeIn = cc.callFunc(this.onFadeInFinish,this);
        this.actionFadeIn = cc.sequence(cc.spawn(cc.fadeTo(this.animSpeed2, 255),cc.scaleTo(this.animSpeed2, 1.0).easing(cc.easeBackOut())), cbFadeIn);
        this.startFadeIn();
    },
    onFadeInFinish(){
        cc.eventManager.resumeTarget(this.node,true);
        console.log('onFadeInFinish');
    },
    // 执行弹进动画
    startFadeIn () {
        cc.eventManager.pauseTarget(this.node, true);
        this.node.position = cc.p(0, 0);
        this.node.setScale(0.5);
        this.node.opacity = 0;
        this.node.runAction(this.actionFadeIn);
    },
    close(callback){
        var cbFadeOut = cc.callFunc(()=>{this.onFadeOutFinish(callback)}, this);
        this.actionFadeOut = cc.sequence(cc.spawn(cc.fadeTo(this.animSpeed2, 0), cc.scaleTo(this.animSpeed2, 0).easing(cc.easeBackIn())), cbFadeOut);
        // 展现 this
        this.startFadeOut();
    },
    // 执行弹出动画
    startFadeOut() {
        cc.eventManager.pauseTarget(this.node,true);
        this.node.runAction(this.actionFadeOut);
    },
    onFadeOutFinish (callback) {
        console.log('onFadeOutFinish');
        callback();
        // self.onDestory();
    },
    // update (dt) {},
});
