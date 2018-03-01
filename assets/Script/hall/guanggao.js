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
        defaultsp:cc.SpriteFrame,
        viewContent:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
    init(info){
        this.testData = [];
        for (let index = 0; index < 3; index++) {
            var dq = {};
            dq.imgurl = 'http://192.168.1.152:8000/Res/GamePic/e1ee21f0e3344a4cb38fab844808e349.png'
            this.testData.push(dq);
        }
        this.testData.forEach(element => {
            var node = new cc.Node('Sprite');
            var sp = node.addComponent(cc.Sprite);
            // cc.loader.load(element.imgurl, function (err, texture) {
            //     sp.spriteFrame = new cc.SpriteFrame(texture);
            // });
            sp.spriteFrame = this.defaultsp;
            this.viewContent.addChild(node);
        });
    },
    touchend(){
        cc.log('touchend'+this.name);
    },
    // update (dt) {},
});
