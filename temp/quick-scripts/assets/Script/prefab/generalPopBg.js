(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/prefab/generalPopBg.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '26951TiL7BN87S/ImWDGGml', 'generalPopBg', __filename);
// Script/prefab/generalPopBg.js

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
        title: {
            default: null,
            type: cc.Sprite
        },
        closeBtn: {
            default: null,
            type: cc.Button
        }
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.closeBtn.node.on(cc.Node.EventType.TOUCH_END, this.close, this);
    },

    binit: function binit(obj) {
        if (obj.hasOwnProperty("size")) {
            this.node.width = obj.size.width;
            this.node.height = obj.size.height;
        }
    },
    close: function close() {
        this.node.destroy();
    }
    // update (dt) {},

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
        //# sourceMappingURL=generalPopBg.js.map
        