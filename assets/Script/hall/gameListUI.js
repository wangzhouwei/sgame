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
        gamelistinfo:[],
        gnode:cc.Node,
        goldRoomUI:{
            default:null,
            type:cc.Node,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
    showGameList(){
        this.gamelistinfo = cc.xx.gameInfo.getGameTypeList();
        let n = 1;
        for (const key in this.gamelistinfo) {
            if (this.gamelistinfo.hasOwnProperty(key)) {
                const element = this.gamelistinfo[key];
                cc.log('asdasd asads');
                let gnode = cc.instantiate(this.gnode);
                gnode.active = true;
                gnode.parent = this.node;
                if(++n > 6){
                    break;
                }
            }
        }
    },
    clickGame(){
        console.log('touch gameid=',this.gamelistinfo.gameid);
        this.creGoldRoomUI();
    },
    creGoldRoomUI(){
        this.goldRoomUI.active = true;
        // var node = cc.instantiate(this.goldRoomUI);
        // node.active = true;
        // cc.director.getScene().addChild(node);
    },
});
