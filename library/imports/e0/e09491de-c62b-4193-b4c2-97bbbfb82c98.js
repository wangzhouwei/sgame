"use strict";
cc._RF.push(module, 'e0949HexitBk7TCl7u/uCyY', 'Utils');
// Script/xui/Utils.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },
    ctor: function ctor() {},
    scaleOut: function scaleOut(node, callback) {
        node.position = cc.p(0, 0);
        node.setScale(0.5);
        node.opacity = 0;
        var endCb = cc.callFunc(function () {
            cc.log('scaleOut end');
            if (callback && callback instanceof Function) {
                callback();
            }
        }, this);
        var action = cc.sequence(cc.spawn(cc.fadeTo(0.3, 255), cc.scaleTo(0.3, 1.0).easing(cc.easeBackOut())), endCb);
        node.runAction(action);
    },
    scaleIn: function scaleIn(node, callback) {
        // node.position = cc.p(0, 0);
        // node.setScale(0.5);
        // node.opacity = 0;
        var endCb = cc.callFunc(function () {
            cc.log('scaleOut end');
            if (callback && callback instanceof Function) {
                callback();
            }
        }, this);
        var action = cc.sequence(cc.spawn(cc.fadeTo(0.3, 100), cc.scaleTo(0.3, 0.5).easing(cc.easeBackIn())), endCb);
        node.runAction(action);
    }
});

cc._RF.pop();