"use strict";
cc._RF.push(module, '61f05HkT8FIHr5MYVNceq3U', 'gameResMgr');
// Script/xui/gameResMgr.js

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
var f_game = require('F_Game');
var gtypecfg = {
    res: ''
};
cc.Class({
    extends: cc.Component,
    statics: {
        getGameTypeRes: function getGameTypeRes() {
            return;
        }
    }
});

cc._RF.pop();