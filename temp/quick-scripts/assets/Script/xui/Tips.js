(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/xui/Tips.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '56f53DiQElNbJ4LGbbuUhBd', 'Tips', __filename);
// Script/xui/Tips.js

"use strict";

var Tips = {
    _tips: null, // prefab
    _detailLabel: null, // 内容
    _parent: null
};
Tips.init = function () {
    // 引用
    var self = this;
    // 加载 prefab 创建
    cc.loader.loadRes("prefab/Tips", cc.Prefab, function (error, prefab) {
        if (error) {
            cc.error(error);
            return;
        }
        // 实例 
        var tips = cc.instantiate(prefab);

        // Alert 持有
        Tips._tips = tips;
        // 获取子节点
        Tips._detailLabel = cc.find("bg/lab", tips).getComponent(cc.Label);
        // 父视图
        Tips._tips.parent = cc.find("Canvas");
        Tips._tips.active = false;
    });
};
Tips.show = function (str, time) {
    // if(!Tips._tips){
    //     return;
    // };
    Tips._detailLabel.string = str;
    if (Tips.timerId) {
        clearTimeout(Tips.timerId);
    }
    if (time) {
        Tips.timerId = setTimeout(function () {
            Tips.hide();
        }, time);
    };
    Tips._tips.active = true;
};
Tips.hide = function () {
    if (!Tips._tips) {
        return;
    };
    Tips._tips.active = false;
};
module.exports = Tips;

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
        //# sourceMappingURL=Tips.js.map
        