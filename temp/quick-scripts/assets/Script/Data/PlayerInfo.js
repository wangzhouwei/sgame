(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Data/PlayerInfo.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '2d9b4Nqy/hEFqAOxNXhzzWY', 'PlayerInfo', __filename);
// Script/Data/PlayerInfo.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        m_PlayerInfo: null
    },
    ctor: function ctor() {
        console.log('alert cotr');
    },
    savePlayerInfo: function savePlayerInfo(s) {
        this.m_PlayerInfo = s;
    },
    setPlayerData: function setPlayerData(key, s) {
        cc.log('setPlayerData:key=' + key, s);
        this.m_PlayerInfo[key] = s;
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
        //# sourceMappingURL=PlayerInfo.js.map
        