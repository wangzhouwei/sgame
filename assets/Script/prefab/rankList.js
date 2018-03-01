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
        playerRank:cc.Sprite,
        playerRank1:cc.Sprite,
        playerName:cc.Label,
        playerFace:cc.Sprite,
        playerId:cc.Label,
        playerMoney:cc.Label,
        rankF_T:{
            default:[],
            type:cc.SpriteFrame,
        },
    },

    init(info){
        if(info.rank <= 3){
            this.playerRank1.node.active = false;
            // var sprite = this.playerRank.getComponent(cc.Sprite);
            // sprite.spriteFrame = this.rankF_T[this.rank];
            // cc.loader.loadRes('')
            this.playerRank.spriteFrame = this.rankF_T[info.rank-1];
        }
        else{
            this.playerRank.node.active = false;
            var ranknum = cc.find('num',this.playerRank1.node).getComponent(cc.Label);
            ranknum.string = info.rank;
        };
        this.playerName.string = info.name;
        this.playerId.string = 'ID:'+info.id;
        this.playerMoney.string = info.money;
    },
});
