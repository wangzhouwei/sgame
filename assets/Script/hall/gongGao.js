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
        gongGaoTB:[],
        lbNotice:cc.Label,
        isRuning:false,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.xx.ptEvent.addObserver(this);
    },
    onDestroy(){
        cc.xx.ptEvent.removeObserver(this);
    },
    next(){
        var str = this.gongGaoTB.shift();
        if(str){
            this.lbNotice.string = str;
            this.lbNotice.node.x = 300;
            this.isRuning = true;
        }
        else this.stopRun();
    },
    startRun(){
        if(!this.isRuning){
            this.next();
        }
    },
    stopRun(){
        this.isRuning = false;
    },
    update(dt){
        if(this.isRuning){
            var x = this.lbNotice.node.x;
            x -= dt*100;
            if(x + this.lbNotice.node.width < -300)
            {
                this.isRuning = false;
                this.next();
            }
            else 
            {
                this.lbNotice.node.x = x;
            }
        }
    },
    onMessageEvent(funid,msgid,data){
        console.log('gonggao scene' + funid + '_' + msgid);
        switch(funid,msgid)
        {
            case 1,1:
            this.gongGaoTB.push(data.notice + '');
            this.startRun();
        }
    },
});
