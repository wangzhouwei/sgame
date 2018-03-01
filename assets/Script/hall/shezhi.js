// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html
var ShowAction = require('../xui/showAction');
cc.Class({
    extends: cc.Component,
    properties: {
        musicProgress:{
            default: null,
            type: cc.ProgressBar,
        },
        musicSlider:{
            default: null,
            type: cc.Slider,
        },
        soundProgress:{
            default: null,
            type: cc.ProgressBar,
        },
        soundSlider:{
            default: null,
            type: cc.Slider,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.log('shezhi onload ');
        var musicvolume = cc.xx.audioMgr.getBGMVolume();
        this.musicProgress.progress = musicvolume;
        this.musicSlider.progress = musicvolume;

        var soundvolume = cc.xx.audioMgr.getSFXVolume();
        this.soundProgress.progress = soundvolume;
        this.soundSlider.progress = soundvolume;
        // var showbg = cc.find('showbg',this.node);
        // ShowAction.popOut(showbg);
        cc.xx.utils.scaleOut(this.node); 
    },

    start () {
    },
    onDestroy() {
        cc.log(`this.sounslider.progress${this.soundSlider.progress}`);
    },
    //滑动音乐
    slidMusic(event){
        // console.log('slidMusic' + event.progress);
        this.musicProgress.progress = event.progress;
        cc.xx.audioMgr.setBGMVolume(event.progress);
        // sys.setMusicVolume(event.progress);
    },
    //滑动音乐完毕
    slidMusicEnd(){
        cc.xx.audioMgr.saveBGMVolume();
    },
    //滑动音效
    slidSound(event){
        // console.log('slidSound' + event.progress);
        this.soundProgress.progress = event.progress;
        cc.xx.audioMgr.setSFXVolume(event.progress);
    },
    //滑动音效完毕
    slidSoundEnd(){
        cc.xx.audioMgr.saveSFXVolume();
    },
    // 关闭按钮
    close(){
        // ShowAction.popIn(()=>{
            // this.node.destroy();
        // });
        // var showbg = cc.find('showbg',this.node);
        // var scriptcom = showbg.getComponent('popAction');
        // scriptcom.close(()=>{
        //     this.node.destroy();
        // })
        cc.xx.utils.scaleIn(this.node,()=>{
            this.node.destroy();
        });
    },
    //切换账号
    changeAccount(){
        cc.director.loadScene("login_scene");
    },
});
