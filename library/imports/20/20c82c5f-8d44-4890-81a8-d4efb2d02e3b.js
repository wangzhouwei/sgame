"use strict";
cc._RF.push(module, '20c82xfjURIkIGo1O+y0C47', 'AudioMgr');
// Script/xui/AudioMgr.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        bgmVolume: 1.0,
        sfxVolume: 1.0,

        bgmAudioID: -1
    },

    // use this for initialization
    init: function init() {
        var t = cc.sys.localStorage.getItem("bgmVolume");
        if (t != null) {
            this.bgmVolume = parseFloat(t);
        }

        var t = cc.sys.localStorage.getItem("sfxVolume");
        if (t != null) {
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

    getUrl: function getUrl(url) {
        return cc.url.raw("resources/sound/" + url);
    },

    playBGM: function playBGM(url) {
        var audioUrl = this.getUrl(url);
        console.log(audioUrl);
        if (this.bgmAudioID >= 0) {
            cc.audioEngine.stop(this.bgmAudioID);
        }
        this.bgmAudioID = cc.audioEngine.play(audioUrl, true, this.bgmVolume);
    },

    setBGMVolume: function setBGMVolume(v) {
        if (this.bgmVolume != v) {
            this.bgmVolume = v;
            cc.audioEngine.setVolume(this.bgmAudioID, this.bgmVolume);
        }
    },
    saveBGMVolume: function saveBGMVolume() {
        cc.sys.localStorage.setItem("bgmVolume", this.bgmVolume);
    },
    getBGMVolume: function getBGMVolume() {
        return this.bgmVolume;
    },

    playSFX: function playSFX(url) {
        var audioUrl = this.getUrl(url);
        if (this.sfxVolume > 0) {
            var audioId = cc.audioEngine.play(audioUrl, false, this.sfxVolume);
        }
    },

    saveSFXVolume: function saveSFXVolume() {
        cc.sys.localStorage.setItem("sfxVolume", this.sfxVolume);
    },
    setSFXVolume: function setSFXVolume(v) {
        if (this.sfxVolume != v) {
            // cc.sys.localStorage.setItem("sfxVolume",v);
            this.sfxVolume = v;
            // cc.audioEngine.setEffectsVolume(this.sfxVolume);
        }
    },
    getSFXVolume: function getSFXVolume() {
        return this.sfxVolume;
    },
    pauseAll: function pauseAll() {
        cc.audioEngine.pauseAll();
    },

    resumeAll: function resumeAll() {
        cc.audioEngine.resumeAll();
    }
});

cc._RF.pop();