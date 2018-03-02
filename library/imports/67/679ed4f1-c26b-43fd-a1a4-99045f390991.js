"use strict";
cc._RF.push(module, '679edTxwmtD/aGkmQRfOQmR', 'palyercenterfab');
// Script/prefab/palyercenterfab.js

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
        closeBtn: {
            default: null,
            type: cc.Button
        }
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.closeBtn.node.on(cc.Node.EventType.TOUCH_END, this.close, this);
        cc.xx.utils.scaleOut(this.node);
    },
    start: function start() {},
    close: function close() {
        var _this = this;

        // this.node.destroy();
        cc.xx.utils.scaleIn(this.node, function () {
            _this.node.destroy();
        });
    }
    // update (dt) {},

});

cc._RF.pop();