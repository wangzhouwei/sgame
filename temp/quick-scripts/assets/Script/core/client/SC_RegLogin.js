(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/core/client/SC_RegLogin.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'e1371gyDlNONJt43DXjzdaL', 'SC_RegLogin', __filename);
// Script/core/client/SC_RegLogin.js

"use strict";

function urlParse() {
    var params = {};
    if (window.location == null) {
        return params;
    }
    var name, value;
    var str = window.location.href; //取得整个地址栏
    var num = str.indexOf("?");
    str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]

    var arr = str.split("&"); //各个参数放到数组里
    for (var i = 0; i < arr.length; i++) {
        num = arr[i].indexOf("=");
        if (num > 0) {
            name = arr[i].substring(0, num);
            value = arr[i].substr(num + 1);
            params[name] = value;
        }
    }
    return params;
}
var functionid = require('FunctionID');
var messageid = require('F_RegLogin');
var SC_RegLogin = cc.Class({
    extends: cc.Component,
    statics: {
        getInstance: function getInstance() {
            if (!this.sc_reglogin) {
                this.sc_reglogin = new SC_RegLogin();
            }
            return this.sc_reglogin;
        }
    },
    properties: {
        functionId: functionid.emFunction_RegLogin
    },
    ctor: function ctor() {
        cc.xx.ptNet.RegisterMsg(this);
    },
    onMessageEvent: function onMessageEvent(funId, msgId, msgData) {
        console.log('login onMessageEvent' + funId + '_' + msgId);
        // cc.xx.ptEvent.notifyEvent(funId,msgId,msgData);
        switch (msgId) {
            case messageid.SC_WEIXIN_LOGIN_P:
                if (msgData.code === 0) {
                    this.onLine(msgData);
                    cc.xx.ptEvent.notifyEvent(funId, msgId, msgData);
                } else cc.log('登录失败' + msgData.msg);
        }
    },
    onLine: function onLine(s) {
        cc.log("SC_ONLINE 上线信息", s);

        for (var key in s) {
            if (s.hasOwnProperty(key)) {
                var element = s[key];
                if (key == "state") {} else if (key == "isgame") {} else if (key == "isbindaccount") {} else if (key == "kick") {} else if (key == "gamelist") {} else if (key == "areaid") {} else if (key == "Function") {
                    Object.keys(element).forEach(function (k1, v) {
                        var k = parseInt(k);
                        if (k == functionid.emFunction_BaseInfo) {} else if (k == functionid.emFunction_Game) {}
                    });
                }
            }
        }
        cc.xx.gameInfo.setGameTypeList(s.gametypelist);
    },
    CS_LOGIN: function CS_LOGIN(data) {
        var account = urlParse()["account"];
        if (account == null) {
            account = cc.sys.localStorage.getItem("account");
        }
        if (account == null) {
            account = Date.now();
            cc.sys.localStorage.setItem("account", account);
        }
        var logindata = {
            hductp: 3,
            uniquecode: 'qweqwe',
            areaid: '1',
            wxdata: {
                code: '123456',
                refresh_token: ''
            },
            hdtp: messageid.emHDType_Apple,
            hduc: account,
            accounttype: messageid.emAccountType_Fast,
            version: 0,
            random: '',
            account: ''
        };
        // let loginstr = JSON.stringify(logindata);
        cc.xx.ptNet.startEvent(this.functionId, messageid.CS_WEIXIN_LOGIN_P, logindata);
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
        //# sourceMappingURL=SC_RegLogin.js.map
        