"use strict";
cc._RF.push(module, '89bfbuSgJlNbKYF06O7tiJA', 'PlayerDefault');
// Script/Data/PlayerDefault.js

'use strict';

// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html
var m_Userinfo = '';
var m_ConnectServerIP = null;
var m_ConnectServerPort = null;
var m_VoiceState = 0;
var m_EffectState = 0;
var m_RegType = 0;
module.exports = {
    getUserInfo: function getUserInfo() {
        return m_Userinfo;
    },
    setUserInfo: function setUserInfo(info) {
        m_Userinfo = info;
    },
    initData: function initData() {},

    //音乐音效
    setMusicVolume: function setMusicVolume(volume) {
        cc.sys.localStorage.setItem('musicVolume', volume);
    },
    getMusicVolume: function getMusicVolume(volume) {
        return parseFloat(cc.sys.localStorage.getItem('musicVolume')) || 0;
    },
    setSoundVolume: function setSoundVolume(volume) {
        cc.sys.localStorage.setItem('soundVolume', volume);
    },
    getSoundVolume: function getSoundVolume(volume) {
        return parseFloat(cc.sys.localStorage.getItem('soundVolume')) || 0;
    }
};

cc._RF.pop();