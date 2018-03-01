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
        mailIteam:cc.Prefab,
        scrollView:cc.ScrollView,
        choiceAllBtn:cc.Toggle,
        delBtn:cc.Button,
    },
    start () {
        this.testData = [];
        var dd = function(){
        };
        for (let index = 0; index < 10; index++) {
            var dq = new dd();
            dq.title = '欢迎来到棋牌游戏世界'+index;
            dq.id = index;
            dq.readtype = index>5?1:0,
            dq.from = '系统中心';
            dq.time = (new Date()).toDateString();
            dq.mailtype = index%2,
            this.testData.push(dq);
        }
        this.showList();
    },
    showList(){
        this.testData.forEach(element => {
            var item = cc.instantiate(this.mailIteam); 
            item.getComponent('mailItem').init(element);
            this.scrollView.content.addChild(item);
        });
    },
    //全选
    choiceAllFunc(){
        var itemTb = this.scrollView.content.getChildren();
        itemTb.forEach(element=>{
            element.getComponent('mailItem').choiceFunc(this.choiceAllBtn.isChecked);
        })
    },
    //删除
    delFunc(){
        var itemTb = this.scrollView.content.getChildren();
        itemTb.forEach(element=>{
            element.getComponent('mailItem').delFunc();
        })
    },
    //touchclose
    close () {
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
});
