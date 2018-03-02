"use strict";
cc._RF.push(module, '7dcf8pbBhdCcLxVnnt1xcxE', 'goldRank');
// Script/hall/goldRank.js

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
var playersRank = [{
    rank: 1,
    name: '小黑',
    id: '111111111'

}];
cc.Class({
    extends: cc.Component,

    properties: {
        rankIteam: cc.Prefab,
        scrollView: cc.ScrollView
    },
    onLoad: function onLoad() {
        cc.log('goldRank onload ');
        this.testData = [];
        var dd = function dd() {};
        for (var index = 0; index < 10; index++) {
            var dq = new dd();
            dq.rank = index + 1;
            dq.name = '嘿嘿嘿' + index;
            dq.id = '11111' + index;
            dq.money = '11' + index;
            this.testData.push(dq);
        }
        this.showList();
    },
    showList: function showList() {
        var _this = this;

        this.testData.forEach(function (element) {
            var item = cc.instantiate(_this.rankIteam);
            item.getComponent('rankList').init(element);
            _this.scrollView.content.addChild(item);
        });
        cc.log('goldRank showList ');
    },
    close: function close() {
        var _this2 = this;

        var showbg = cc.find('showbg', this.node);
        var scriptcom = showbg.getComponent('popAction');
        scriptcom.close(function () {
            _this2.node.destroy();
        });
    },
    touchExchange: function touchExchange(event, custom) {
        console.log('touchExchange ' + custom);
    }
});

cc._RF.pop();