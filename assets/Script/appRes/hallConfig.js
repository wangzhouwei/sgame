// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

var g_Config = {
    appName:'小闲川南棋牌',
    ver_control:'local',
};
if(g_Config.ver_control == 'local'){
    g_Config.hallserverAddress = ['ws://192.168.1.30:112'];
    // g_Config.hallserverAddress = ['ws://localhost:8182'];
    // g_Config.hallserverAddress = ['ws://192.168.1.108:8182'];
};
module.exports = g_Config;