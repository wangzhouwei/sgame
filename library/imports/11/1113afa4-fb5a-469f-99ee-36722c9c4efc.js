"use strict";
cc._RF.push(module, '1113a+k+1pGn5nuNnIsnE78', 'joingame');
// Script/hall/joingame.js

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
        currIndex: 0,
        m_CodeLabelTb: [],
        labLayout: cc.Node,
        showbg: cc.Node,
        layNode: {
            type: cc.Node,
            default: null
        }
    },
    ctor: function ctor() {
        this.currIndex = 0;
        this.m_CodeLabelTb = [];
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        cc.log("onload func");
        for (var i = 0; i < 6; i++) {
            var str = 'label' + (i + 1);
            // let node = cc.find("joinRoomUI/showbg/scaleBg/dec/xxqp_jrdz_fj_szbj/labLayout", this.node);
            if (this.layNode == null) {

                this.layNode = this.node.getChildByName("showbg").getChildByName("scaleBg").getChildByName("dec").getChildByName("xxqp_jrdz_fj_szbj").getChildByName("labLayout");
                //    cc.find("joinRoomUI/showbg/scaleBg/dec/xxqp_jrdz_fj_szbj/labLayout")
            }
            cc.log("str = " + str + ", this.layNode.name = " + this.layNode.name);
            var stringlab = this.layNode.getChildByName(str);
            this.m_CodeLabelTb.push(stringlab.getComponent(cc.Label));
            // //let testNode = this.node.getChildByName("showbg").getChildByName("scaleBg").getChildByName("dec").getChildByName()
            // try {

            // } catch(err) {
            //     cc.log(`err = ${err}`)
            // }
        }
    },
    touchKeyBord: function touchKeyBord(event, custom) {
        console.log('touch event=' + custom);
        if (this.currIndex >= this.m_CodeLabelTb.length) return;
        if (this.currIndex < 0) this.currIndex = 0;
        this.m_CodeLabelTb[this.currIndex].string = custom;
        this.currIndex++;
    },

    //粘贴
    PasteCb: function PasteCb() {},

    //退格
    BackWord: function BackWord() {
        this.currIndex--;
        if (this.currIndex >= this.m_CodeLabelTb.length) this.currIndex = this.m_CodeLabelTb.length - 1;
        if (this.currIndex < 0) return;
        this.m_CodeLabelTb[this.currIndex].string = '';
    },
    close: function close() {
        var _this = this;

        // this.node.destroy();
        // var showbg = cc.find('showbg',this.node);
        var scriptcom = this.node.getChildByName("showbg").getComponent('popAction');
        if (scriptcom) {
            scriptcom.close(function () {
                _this.node.destroy();
            });
        } else {
            this.node.destroy();
        }
    }
    // update (dt) {},

});

cc._RF.pop();