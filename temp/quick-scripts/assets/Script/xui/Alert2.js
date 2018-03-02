(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/xui/Alert2.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9137fFW5oVGkoyP+fhA+U+4', 'Alert2', __filename);
// Script/xui/Alert2.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        _alert: null,
        _btnOK: null,
        _btnCancel: null,
        _title: null,
        _content: null,
        _onok: null,
        _closeButton: null
    },
    ctor: function ctor() {
        console.log('alert cotr');
    },
    onButtonClicked: function onButtonClicked(event) {
        var _this = this;

        if (event.target.name == "surebtn") {
            if (this._onok) {
                this._onok();
            }
        }
        cc.xx.utils.scaleIn(this._alert, function () {
            _this._alert.destroy();
        });
    },
    show: function show(content, onok, needcancel) {
        var self = this;
        // 加载 prefab 创建
        cc.loader.loadRes("prefab/Alert", cc.Prefab, function (error, prefab) {
            if (error) {
                cc.error(error);
                return;
            }
            // 实例 
            var alert = cc.instantiate(prefab);
            // Alert 持有
            self._alert = alert;
            // 获取子节点
            self._content = cc.find("background/detailLabel", alert).getComponent(cc.Label);
            self._btnCancel = cc.find("background/centerbtn", alert);
            self._btnOK = cc.find("background/surebtn", alert);
            self._closeButton = cc.find("background/closebtn", alert);
            // 添加点击事件
            self._btnOK.on('click', self.onButtonClicked, self);
            self._btnCancel.on('click', self.onButtonClicked, self);
            self._closeButton.on('click', self.onButtonClicked, self);

            // 父视图
            self._alert.parent = cc.find("Canvas");

            cc.xx.utils.scaleOut(self._alert);
            // 回调
            self._onok = onok;

            // 内容
            self._content.string = content;
            // 是否需要取消按钮
            if (needcancel || needcancel == undefined) {
                // 显示
                self._btnCancel.active = true;
            } else {
                // 隐藏
                self._btnCancel.active = false;
                self._btnOK.x = 0;
            }

            // // 参数
            // self.configAlert(content, onok, needCancel);
        });
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
        //# sourceMappingURL=Alert2.js.map
        