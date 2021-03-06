// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html
// var playerInfo = require("../playerData/palyerInfo")
cc.Class({
    extends: cc.Component,

    properties: {
        userName: {
            default: null,  // The default value will be used only when the component attaching
            type: cc.Label, // optional, default is typeof default
        },
        userId: {
            default: null,  // The default value will be used only when the component attaching
            type: cc.Label, // optional, default is typeof default
        },
        userMoney: {
            default: null,  // The default value will be used only when the component attaching
            type: cc.Label, // optional, default is typeof default
        },
        userFace:{
            default:null,
            type:cc.Sprite
        },
        //head按钮
        headBtn: {
            default: null,
            type: cc.Button,
        },
        //getFangkaBtn
        getFangkaBtn: {
            default: null,
            type: cc.Button,
        },
        //headfab
        headfab:{
            default:null,
            type: cc.Prefab,
        },
        //generalfab
        generalfab:{
            default:null,
            type: cc.Prefab,
        },
        joinRoomFab:{
            default:null,
            type: cc.Prefab,
        },
        gaongGao:{
            default:null,
            type: cc.Prefab,
        },
        gameListNode:{
            default:null,
            type: cc.Node,
        },
        guangGao:{
            default:null,
            type: cc.PageView,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.xx.Tips.init();
        // this.userName.string = playerInfo.get()._name
        //touchhead
        this.headBtn.node.on(cc.Node.EventType.TOUCH_END,function(){
            var palyercenterpop = cc.instantiate(this.headfab);
            cc.director.getScene().addChild(palyercenterpop);
        },this)
        //touchpay
        this.getFangkaBtn.node.on(cc.Node.EventType.TOUCH_END,this.chongzhitips,this)

        var gonggao = cc.instantiate(this.gaongGao);
        gonggao.parent = this.node.getChildByName('topNode');
        gonggao.setPosition(-37,13);
        //showgame
        let game = this.gameListNode.getComponent('gameListUI');
        game.showGameList();
        //show adv
        let guanggao = this.guangGao.getComponent('guanggao');
        guanggao.init();
    },
    //chongzhitips
    chongzhitips(){
        var totalpop = cc.instantiate(this.generalfab);
        totalpop.binit({size:{width:800,height:200}});
        cc.director.getScene().addChild(totalpop.node);
    },
    //点击战绩
    touchzhanji(){
        cc.loader.loadRes("prefab/zhanJiUI",function(err,pertab){
          var totalpop = cc.instantiate(pertab);
            // totalpop.binit({size:{width:800,height:200}});
            cc.director.getScene().addChild(totalpop);  
        });
    },
    //点击消息
    touchmail(){
        cc.loader.loadRes("prefab/messageUI",function(err,pertab){
          var totalpop = cc.instantiate(pertab);
            // totalpop.binit({size:{width:800,height:200}});
            cc.director.getScene().addChild(totalpop);
        });
    },
    //点击排行榜
    touchrank(){
        cc.loader.loadRes("prefab/goldRank",function(err,pertab){
            var totalpop = cc.instantiate(pertab);
              // totalpop.binit({size:{width:800,height:200}});
              cc.director.getScene().addChild(totalpop);  
          });
    },
    //点击设置
    touchset(){
        cc.loader.loadRes("prefab/setUI",function(err,pertab){
            var totalpop = cc.instantiate(pertab);
            cc.director.getScene().addChild(totalpop);
          });
    },
    //点击分享
    touchshare(asd){
        // Alert.show('没有分享');

        cc.xx.Alert.show('没有分享',()=>{
            console.log('没有分享')
        });
        // cc.xx.Alert.show('没有分享1',()=>{
        //     console.log('没有分享1')
        // },false);
    },
    //点击加入房间
    touchjoinroom(){
        // cc.loader.loadRes("prefab/joinRoomUI",function(err,pertab){
        //     var totalpop = cc.instantiate(pertab);
        //     cc.log(`onloaded`)
        //       // totalpop.binit({size:{width:800,height:200}});
        //       cc.director.getScene().addChild(totalpop);
        //   });
        var joinRoomUI = cc.instantiate(this.joinRoomFab);
        cc.director.getScene().addChild(joinRoomUI);
    },
    // update (dt) {},
});
