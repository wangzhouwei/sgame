"use strict";
cc._RF.push(module, 'c8dfaGSVhFAqaTJcp0/adxk', 'gameInfo');
// Script/Data/gameInfo.js

"use strict";

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
        mGameTypeList: null
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},
    setGameTypeList: function setGameTypeList(s) {
        this.mGameTypeList = s;
    },
    getGameTypeList: function getGameTypeList(s) {
        return this.mGameTypeList;
    }
}
// update (dt) {},
);

cc._RF.pop();