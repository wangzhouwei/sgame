cc.Class({
    extends: cc.Component,

    properties: {
        bgmVolume:1.0,
        sfxVolume:1.0,
        
        bgmAudioID:-1,
    },

    // use this for initialization
    init: function () {
        var t = cc.sys.localStorage.getItem("bgmVolume");
        if(t != null){
            this.bgmVolume = parseFloat(t);    
        }
        
        var t = cc.sys.localStorage.getItem("sfxVolume");
        if(t != null){
            this.sfxVolume = parseFloat(t);    
        }
        
        cc.game.on(cc.game.EVENT_HIDE, function () {
            console.log("cc.audioEngine.pauseAll");
            cc.audioEngine.pauseAll();
        });
        cc.game.on(cc.game.EVENT_SHOW, function () {
            console.log("cc.audioEngine.resumeAll");
            cc.audioEngine.resumeAll();
        });
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
    
    getUrl:function(url){
        return cc.url.raw("resources/sound/" + url);
    },
    
    playBGM(url){
        var audioUrl = this.getUrl(url);
        console.log(audioUrl);
        if(this.bgmAudioID >= 0){
            cc.audioEngine.stop(this.bgmAudioID);
        }
        this.bgmAudioID = cc.audioEngine.play(audioUrl,true,this.bgmVolume);
    },
    setBGMVolume:function(v){
        if(this.bgmVolume != v){
            this.bgmVolume = v;
            cc.audioEngine.setVolume(this.bgmAudioID,this.bgmVolume);
        }
    },
    saveBGMVolume:function(){
        cc.sys.localStorage.setItem("bgmVolume",this.bgmVolume);
    },
    getBGMVolume:function(){
        return this.bgmVolume;
    },
    
    playSFX(url){
        var audioUrl = this.getUrl(url);
        if(this.sfxVolume > 0){
            var audioId = cc.audioEngine.play(audioUrl,false,this.sfxVolume);    
        }
    },
    saveSFXVolume:function(){
        cc.sys.localStorage.setItem("sfxVolume",this.sfxVolume);
    },
    setSFXVolume:function(v){
        if(this.sfxVolume != v){
            // cc.sys.localStorage.setItem("sfxVolume",v);
            this.sfxVolume = v;
            // cc.audioEngine.setEffectsVolume(this.sfxVolume);
        }
    },
    getSFXVolume:function(){
        return this.sfxVolume;
    },
    pauseAll:function(){
        cc.audioEngine.pauseAll();
    },
    
    resumeAll:function(){
        cc.audioEngine.resumeAll();
    }
});
