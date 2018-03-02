"use strict";
cc._RF.push(module, '280c3rsZJJKnZ9RqbALVwtK', 'Login');
// Script/Login.js

'use strict';

cc.dd = cc.dd || {};
require('./Event/GameEventManager');
var messageid = require('F_RegLogin');
var functionid = require('FunctionID');
cc.Class({
    extends: cc.Component,

    properties: {
        //微信登录按钮
        loginBtn: {
            default: null,
            type: cc.Button
        },
        //用户协议按钮
        txtBtn: {
            default: null,
            type: cc.Button
        },
        //点选按钮
        clickBtn: {
            default: null,
            type: cc.Toggle
        },
        //music
        hallmusic: {
            default: null,
            url: cc.AudioClip
        },
        //helpui
        helpUI: cc.WebView,
        closeHelpBtn: cc.Button
    },

    // use this for initialization
    onLoad: function onLoad() {
        cc.xx.audioMgr.playBGM('lobbyBg.mp3');
        cc.xx.ptEvent.addObserver(this);
        cc.xx.Tips.init();
        this.loginBtn.node.on('touchend', this.clicklogin, this);
        // var state = 0, 
        // iframe = document.createElement('iframe'),
        // loadfn = function() {
        //     if (state === 1) {
        //         var data = iframe.contentWindow.name;    // 读取数据
        //         alert(data);    //弹出'I was there!'
        //     } else if (state === 0) {
        //         state = 1;
        //         iframe.contentWindow.location = window.location.href;    // 设置的代理文件
        //     }  
        // };
        // iframe.src = 'http://192.168.1.108:8080/testserver.html';
        // if (iframe.attachEvent) {
        //     iframe.attachEvent('onload', loadfn);
        // } else {
        //     iframe.onload  = loadfn;
        // }
        // document.body.appendChild(iframe);

        if (!cc.xx.ptNet.gameSocket || !cc.xx.ptNet.gameSocket.readyState === WebSocket.OPEN) {
            setTimeout(function () {
                cc.xx.Tips.show('正在链接服务器...', 2000);
                cc.xx.ptNet.connectNet(function () {
                    // var lab = this.node.getChildByName("isconnected");
                    // var tipstr = lab.getComponent(cc.Label);
                    // tipstr.string = "链接成功啦啦啦面"
                    cc.xx.Tips.show('服务器链接成功', 1000);
                });
            }, 200);
        }
        // this._connectedString = this.node.getChildByName('isconnected').getComponent(cc.Label);
        var scheme = "TestKey"; // 这里是与内部页面约定的关键字
        function jsCallback(url) {
            // 这里的返回值是内部页面的 url 数值，
            // 需要自行解析自己需要的数据
            var str = url.replace(scheme + '://', '');
            var data = JSON.stringify(str); // {a: 0, b: 1}
        }

        this.helpUI.setJavascriptInterfaceScheme(scheme);
        this.helpUI.setOnJSCallback(jsCallback);
    },
    onDestroy: function onDestroy() {
        cc.xx.ptEvent.removeObserver(this);
    },
    clicklogin: function clicklogin() {
        // cc.xx.ptNet.startEvent(1,'');
        var str = '123';
        cc.xx.loginCore.CS_LOGIN(str);
        cc.director.loadScene("hall_scene");
    },
    clickHelp: function clickHelp() {
        this.helpUI.node.active = true;
        this.closeHelpBtn.node.active = true;
        this.closeHelpBtn.node.setLocalZOrder(10);
        // this.helpUI.url = 'http://192.168.1.108:8080/testserver.html'; 
        // window.location.href=this.helpUI.url;
        // this.helpUI.url = 'https://xxyjqp.54.com/huodong/xxpl/mobile/index.html';
    },
    onMessageEvent: function onMessageEvent(funid, msgid, data) {
        console.log('login scene' + funid + '_' + msgid);
        switch (funid, msgid) {
            case (functionid.emFunction_RegLogin, messageid.SC_WEIXIN_LOGIN_P):
            // cc.director.loadScene("hall_scene");
        }
    },
    closeHelp: function closeHelp() {
        this.helpUI.node.active = false;
        this.closeHelpBtn.node.active = false;
        cc.log('window.name' + window.name);
    }
});

cc._RF.pop();