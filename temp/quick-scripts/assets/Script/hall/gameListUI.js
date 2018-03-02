(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/hall/gameListUI.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9ffb3VfopZPK5trRwucft31', 'gameListUI', __filename);
// Script/hall/gameListUI.js

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

cc.Class({
    extends: cc.Component,

    properties: {
        gamelistinfo: [],
        gnode: cc.Node,
        goldRoomUI: {
            default: null,
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},
    showGameList: function showGameList() {
        this.gamelistinfo = cc.xx.gameInfo.getGameTypeList();
        var n = 1;
        for (var key in this.gamelistinfo) {
            if (this.gamelistinfo.hasOwnProperty(key)) {
                var element = this.gamelistinfo[key];
                cc.log('asdasd asads');
                var gnode = cc.instantiate(this.gnode);
                gnode.active = true;
                gnode.parent = this.node;
                if (++n > 6) {
                    break;
                }
            }
        }
    },
    clickGame: function clickGame() {
        console.log('touch gameid=', this.gamelistinfo.gameid);
        this.creGoldRoomUI();
    },
    creGoldRoomUI: function creGoldRoomUI() {
        this.goldRoomUI.active = true;
        // var node = cc.instantiate(this.goldRoomUI);
        // node.active = true;
        // cc.director.getScene().addChild(node);
    }
});

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
        //# sourceMappingURL=gameListUI.js.map
        