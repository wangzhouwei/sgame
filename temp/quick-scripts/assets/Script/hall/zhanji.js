(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/hall/zhanji.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a0a00EX92pM+r7H5yvdFC0J', 'zhanji', __filename);
// Script/hall/zhanji.js

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
        lunzhanjiItem: cc.Prefab,
        lunscrollView: cc.ScrollView,
        juscrollView: cc.ScrollView
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.testData = [];
        for (var index = 0; index < 10; index++) {
            var dq = {};
            dq.game = '炸金花' + index;
            if (index % 2 == 1) {
                dq.clubid = index;
            }
            dq.time = new Date().toDateString();
            dq.code = 'aaaaa' + index;
            dq.playerlist = [];
            for (var i = 0; i < index % 8; i++) {
                var aa = {};
                aa.playerName = '玩家' + i;
                aa.changeCoin = i - 4;
                dq.playerlist.push(aa);
            }
            this.testData.push(dq);
        }
        this.showList();
    },
    showList: function showList() {
        var _this = this;

        this.testData.forEach(function (element) {
            var item = cc.instantiate(_this.lunzhanjiItem);
            item.getComponent('lunzhanjiList').init(element, _this);
            _this.lunscrollView.content.addChild(item);
        });
    },
    start: function start() {},
    close: function close() {
        var _this2 = this;

        if (this.juscrollView.node.active == true) {
            this.juscrollView.node.active = false;
            this.lunscrollView.node.active = true;
            return;
        }
        var scriptcom = this.node.getChildByName("showbg").getComponent('popAction');
        if (scriptcom) {
            scriptcom.close(function () {
                _this2.node.destroy();
            });
        } else {
            this.node.destroy();
        }
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
        //# sourceMappingURL=zhanji.js.map
        