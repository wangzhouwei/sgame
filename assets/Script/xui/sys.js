// cc.Class({
//     extends: cc.Component,

//     properties: {
//         // foo: {
//         //    default: null,      // The default value will be used only when the component attaching
//         //                           to a node for the first time
//         //    url: cc.Texture2D,  // optional, default is typeof default
//         //    serializable: true, // optional, default is true
//         //    visible: true,      // optional, default is true
//         //    displayName: 'Foo', // optional
//         //    readonly: false,    // optional, default is false
//         // },
//         // ...
//     },
//     ctor:function(){

//     },
//     scaleOut:function(node,callback){
//         var cbFadeIn = cc.callFunc(()=>{
//             cc.log('scaleOut end');
//             if(callback && callback instanceof Function) {
//                 callback();
//             }
//         },this);
//         var action = cc.sequence(cc.spawn(cc.fadeTo(0.3, 255),cc.scaleTo(0.3, 1.0).easing(cc.easeBackOut())), cbFadeIn);
//         node.runAction(action);
//     },
// });
cc.Class({
    extends: cc.Component,

    properties: {
        _alert:null,
        _btnOK:null,
        _btnCancel:null,
        _title:null,
        _content:null,
        _onok:null,
        _closeButton:null,
    },
    ctor:function(){
        console.log('alert cotr');
    },
    onButtonClicked:function(event){
        if(event.target.name == "surebtn"){
            if(this._onok){
                this._onok();
            }
        }
        this._alert.destroy();
    },
    show:function(content,onok,needcancel){
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

            cc.xx.utils.scaleOut(self._alert.node);
            // 回调
            self._onok = onok;

            // 内容
            self._content.string = content;
            // 是否需要取消按钮
            if (needcancel || needcancel == undefined) { // 显示
                self._btnCancel.active = true;
            } else {  // 隐藏
                self._btnCancel.active = false;
                self._btnOK.x = 0;
            }

            // // 参数
            // self.configAlert(content, onok, needCancel);
        });
    },
});
