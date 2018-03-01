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
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.initMgr();
        this.initEventCfg();
        cc.director.loadScene('login_scene');
    },

    start () {

    },

    initMgr(){
        cc.xx = {};
        
        //需保存的数据
        var playerDefault = require('./Data/PlayerDefault');
        cc.xx.playerDefault = playerDefault;
        //玩家数据
        var playerInfo = require('PlayerInfo');
        cc.xx.playerInfo = new playerInfo();
        //游戏数据
        var gameInfo = require('gameInfo');
        cc.xx.gameInfo = new gameInfo();
        //事件与消息
        var ptNet = require('./Event/PtCore');
        cc.xx.ptNet = ptNet.getInstance();

        var gameNet = require('./Event/GameCore');
        cc.xx.gameNet = gameNet.getInstance();
        //tips
        var tips = require('Tips');
        cc.xx.Tips = tips;

        var g_Config = require('hallConfig');
        cc.xx.g_Config = g_Config;
        var alert1 = require('Alert2');
        cc.xx.Alert = {
            show:function(...types){
                var a = new alert1();
                a.show(...types);
            },
        };

        var AudioMgr = require("AudioMgr");
        cc.xx.audioMgr = new AudioMgr();
        cc.xx.audioMgr.init();

        var utils = require('Utils');
        cc.xx.utils = new utils();
    },
    initEventCfg(){
        //功能块
        cc.xx.FunctionID = require('./core/server/FunctionID');
        //平台自定义事件
        // cc.xx.ptEvent = require('./Event/PtEvent').getInstance();
        var ptevent = require('GameEventManager');
        cc.xx.ptEvent = new ptevent();

        cc.xx.ptEventCfg = {};

        //登录
        var loginprotecol = require('F_RegLogin');
        cc.xx.ptEventCfg.LOGIN = loginprotecol;
        var loginEvent = require('SC_RegLogin');
        cc.xx.loginCore = new loginEvent();
    },
});
