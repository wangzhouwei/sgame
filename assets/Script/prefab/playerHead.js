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
        playerid:cc.Label,
        playername:cc.Label,
        playermoney:cc.Label,
        lixianflag:cc.Sprite,
        readyflag:cc.Sprite,
    },


    onLoad () {

    },
    init(info){
        this.playerid.string = info.playerid;
        this.playername.string = info.nickname;
        this.playermoney.string = info.money;
    },
    start () {

    },
    setLeaveFlag(bool){
        this.lixianflag.active = bool;
    },
    setReadyFlag(bool){
        this.readyflag.active = bool;
    },
    touchCB(){
        
    },
    // update (dt) {},
});
