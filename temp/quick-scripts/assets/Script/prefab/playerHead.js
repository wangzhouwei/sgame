(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/prefab/playerHead.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'dd4a8JKLk9H3alU5Hr+7K7z', 'playerHead', __filename);
// Script/prefab/playerHead.js

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
        playerid: cc.Label,
        playername: cc.Label,
        playermoney: cc.Label,
        lixianflag: cc.Sprite,
        readyflag: cc.Sprite
    },

    onLoad: function onLoad() {},
    init: function init(info) {
        this.playerid.string = info.playerid;
        this.playername.string = info.nickname;
        this.playermoney.string = info.money;
    },
    start: function start() {},
    setLeaveFlag: function setLeaveFlag(bool) {
        this.lixianflag.active = bool;
    },
    setReadyFlag: function setReadyFlag(bool) {
        this.readyflag.active = bool;
    },
    touchCB: function touchCB() {}
}
// update (dt) {},
);

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=playerHead.js.map
        