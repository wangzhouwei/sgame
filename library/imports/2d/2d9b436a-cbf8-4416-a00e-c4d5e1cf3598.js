"use strict";
cc._RF.push(module, '2d9b4Nqy/hEFqAOxNXhzzWY', 'PlayerInfo');
// Script/Data/PlayerInfo.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        m_PlayerInfo: null
    },
    ctor: function ctor() {
        console.log('alert cotr');
    },
    savePlayerInfo: function savePlayerInfo(s) {
        this.m_PlayerInfo = s;
    },
    setPlayerData: function setPlayerData(key, s) {
        cc.log('setPlayerData:key=' + key, s);
        this.m_PlayerInfo[key] = s;
    }
});

cc._RF.pop();