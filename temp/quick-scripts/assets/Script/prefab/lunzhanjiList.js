(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/prefab/lunzhanjiList.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '652ee/cfKhJS7QRSR/jZmi0', 'lunzhanjiList', __filename);
// Script/prefab/lunzhanjiList.js

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
        gameName: cc.RichText,
        roomCode: cc.RichText,
        isClub: cc.Sprite,
        gameTime: cc.Label,
        playerLayout: cc.Layout
    },
    init: function init(info, father) {
        this.father = father;
        this.isClub.node.active = typeof info.clubid === 'number';
        this.gameTime.string = info.time;
        this.gameName.string = '<color=#ff9c00>\u6E38\u620F:</c><color=#ffffff>' + info.game + '</color>';
        this.roomCode.string = '<color=#ff9c00>\u623F\u53F7:</c><color=#ffffff>' + info.code + '</color>';
        // info.playerlist.forEach(element => {
        //     var node =new cc.Node("node");
        //     var label=node.addComponent(cc.RichText);
        //     label.string=`<color=#ffffff>玩家名字:</c><color=#0fffff>${element.changeCoin}</color>`;
        //     label.fontSize = 26;
        //     this.playerLayout.node.addChild(node);
        // });
        var startx = 100;
        var starty = 50;
        var offx = 300;
        var offy = -50;
        for (var index = 0; index < info.playerlist.length; index++) {
            var element = info.playerlist[index];
            var node = new cc.Node("node");
            var label = node.addComponent(cc.RichText);
            label.string = '<color=#ffffff>\u73A9\u5BB6\u540D\u5B57:</c><color=#0fffff>' + element.changeCoin + '</color>';
            label.fontSize = 26;
            cc.log('pos' + index, startx + offx * (index % 4), starty + offy * parseInt(index / 4));
            node.setPosition(startx + offx * (index % 4), starty + offy * parseInt(index / 4));
            this.playerLayout.node.addChild(node);
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start(info) {},
    onClick: function onClick() {
        var juscroll = cc.find('showbg/scaleBg/juzhanjiScroll', this.father.node);
        var lunscroll = cc.find('showbg/scaleBg/lunzhanjiScroll', this.father.node);
        lunscroll.active = false;
        juscroll.active = true;
    }
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
        //# sourceMappingURL=lunzhanjiList.js.map
        