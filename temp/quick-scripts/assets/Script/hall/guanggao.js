(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/hall/guanggao.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '4960904kMJAKbu7AChaR92v', 'guanggao', __filename);
// Script/hall/guanggao.js

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
        defaultsp: cc.SpriteFrame,
        viewContent: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},
    init: function init(info) {
        var _this = this;

        this.testData = [];
        for (var index = 0; index < 3; index++) {
            var dq = {};
            dq.imgurl = 'http://192.168.1.152:8000/Res/GamePic/e1ee21f0e3344a4cb38fab844808e349.png';
            this.testData.push(dq);
        }
        this.testData.forEach(function (element) {
            var node = new cc.Node('Sprite');
            var sp = node.addComponent(cc.Sprite);
            // cc.loader.load(element.imgurl, function (err, texture) {
            //     sp.spriteFrame = new cc.SpriteFrame(texture);
            // });
            sp.spriteFrame = _this.defaultsp;
            _this.viewContent.addChild(node);
        });
    },
    touchend: function touchend() {
        cc.log('touchend' + this.name);
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
        //# sourceMappingURL=guanggao.js.map
        