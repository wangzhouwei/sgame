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
        gameName:cc.RichText,
        roomCode:cc.RichText,
        isClub:cc.Sprite,
        gameTime:cc.Label,
        playerLayout:cc.Layout,
    },
    init(info,father){
        this.father = father;
        this.isClub.node.active = typeof(info.clubid) === 'number' ;
        this.gameTime.string = info.time;
        this.gameName.string = `<color=#ff9c00>游戏:</c><color=#ffffff>${info.game}</color>`;
        this.roomCode.string = `<color=#ff9c00>房号:</c><color=#ffffff>${info.code}</color>`;
        // info.playerlist.forEach(element => {
        //     var node =new cc.Node("node");
        //     var label=node.addComponent(cc.RichText);
        //     label.string=`<color=#ffffff>玩家名字:</c><color=#0fffff>${element.changeCoin}</color>`;
        //     label.fontSize = 26;
        //     this.playerLayout.node.addChild(node);
        // });
        var startx = 100;
        var starty = 50;
        var offx = 300;
        var offy = -50;
        for (let index = 0; index < info.playerlist.length; index++) {
            const element = info.playerlist[index];
            var node =new cc.Node("node");
            var label=node.addComponent(cc.RichText);
            label.string=`<color=#ffffff>玩家名字:</c><color=#0fffff>${element.changeCoin}</color>`;
            label.fontSize = 26;
            cc.log('pos'+index,startx + offx*(index%4),starty + offy*parseInt(index/4));
            node.setPosition(startx + offx*(index%4),starty + offy*parseInt(index/4));
            this.playerLayout.node.addChild(node);
        }
    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start (info) {
        
    },
    onClick(){
        var juscroll = cc.find('showbg/scaleBg/juzhanjiScroll',this.father.node);
        var lunscroll = cc.find('showbg/scaleBg/lunzhanjiScroll',this.father.node);
        lunscroll.active = false;
        juscroll.active = true;
    },
    // update (dt) {},
});
