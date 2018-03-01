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
        lunzhanjiItem:cc.Prefab,
        lunscrollView:cc.ScrollView,
        juscrollView:cc.ScrollView,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.testData = [];
        for (let index = 0; index < 10; index++) {
            var dq = {};
            dq.game = '炸金花'+index;
            if(index%2 == 1){
                dq.clubid = index;
            }
            dq.time = (new Date()).toDateString();
            dq.code = 'aaaaa'+index;
            dq.playerlist = [];
            for (let i = 0; i < index%8; i++) {
                var aa = {};
                aa.playerName = '玩家'+i;
                aa.changeCoin = i-4;
                dq.playerlist.push(aa)
            }
            this.testData.push(dq);
        }
        this.showList();
    },
    showList(){
        this.testData.forEach(element => {
            var item = cc.instantiate(this.lunzhanjiItem); 
            item.getComponent('lunzhanjiList').init(element,this);
            this.lunscrollView.content.addChild(item);
        });
    },

    start () {

    },
    close(){
        if(this.juscrollView.node.active == true){
            this.juscrollView.node.active = false;
            this.lunscrollView.node.active = true;
            return
        }
        var scriptcom = this.node.getChildByName("showbg").getComponent('popAction');
        if(scriptcom){
            scriptcom.close(()=>{
                this.node.destroy();
            })
        }
        else
        {
            this.node.destroy();
        }
    },
    // update (dt) {},
});
