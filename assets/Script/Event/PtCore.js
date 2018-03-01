/**
 * Created by Administrator on 2017/8/31.
 */
const GameEventManager = require("./GameEventManager.js");
const PTEventManager = cc.Class({
    proList:null,
    _currConnectIndex:0,
    extends: GameEventManager,
    statics: {
        getInstance() {
            if (!this.ptEvntManager) {
                this.ptEvntManager = new PTEventManager();
            }
            return this.ptEvntManager;
        },
    },
    ctor(){
        this.proList = [];
        this._currConnectIndex = 0;
    },
    connectNet(cb) {
        this.connect(cc.xx.g_Config.hallserverAddress[0], cb);
    },
    //切换链接
    changeConnectHost(){
        this._currConnectIndex++;
        var host = cc.xx.g_Config.hallserverAddress[this._currConnectIndex];
        return host
    },
    /**
     *  请求协议
     * @param funid 协议id
     * @param event 协议id
     * @param data 需要的字段
     */
    startEvent(funid,msgid,data) {
        cc.log(`发送的协议id为：${funid}_${msgid}`);
        const body = {
            "mid":msgid,
            'fid':funid
        };
        body.data = data;
        this.sendMessage(body);
    },

    /**
     *  收到服务器回复
     * @param msgId 回复的协议id
     * @param msgData 回复的字段
     */
    RegisterMsg(target){
        this.proList.forEach((item) => {
            if (item == target) {
                return true
            }
       });
       if (target) {
           this.proList.push(target);
       } else {
           cc.log("target is null");
       }
       cc.log("proList.length = ", this.proList.length);
    },
    onMsg(funId,msgId,msgData) {
        cc.log(`PTEventManager 收到的协议id为：${funId}_${msgId}`);
        cc.log(msgData);
        this.proList.forEach((iteam)=>{
                if(iteam.functionId === funId){
                    iteam.onMessageEvent(funId,msgId,msgData);
                }
            });
    },
    /**
     *  微信回调返回到code后，被调用的方法(被原生回调的)
     * @param wxcode 微信成功授权登录后传过来的code
     */
    recieveWXAuthenticationCode(wxcode){
        this.startEvent(cc.xx.gameCfg.EVENT.EVENT_LOGIN_REP,wxcode);
    },
    // 往手机本地存用户信息
    writtenUserInfoIntoCellPhone(data) {
        cc.sys.localStorage.setItem(cc.xx.userEvName.USER_INFO_KEY, JSON.stringify(data.user));
        cc.sys.localStorage.setItem(cc.xx.userEvName.USER_CARD_INFO_KEY, JSON.stringify(data.cards));
        // if(data.agent) {
        //     cc.sys.localStorage.setItem(cc.xx.userEvName.USER_ANGENT_INFO, JSON.stringify(data.agent));
        // }
    },
    /**
     *  电量改变监听的回调更新(被原生回调的)
     * @param sta 充电状态
     */
    updateCurrentBatteryStatus(sta) {
        cc.log("oc观察者观察电量发生改变回调"+sta);
        if(sta == "Charging"){
            this.notifyEvent(cc.xx.gameCfg.BATTERTY.BATTERTY_CHARGING,true);
        }else {
            this.notifyEvent(cc.xx.gameCfg.BATTERTY.BATTERTY_CHARGING,false);
        }
    },
    /**
     *  电量改变监听的回调更新(被原生回调的)
     * @param elevel 电量值
     */
    updateCurrentBatteryLevel(elevel) {
        cc.log("oc观察者观察电量发生改变回调"+elevel);
        this.notifyEvent(cc.xx.gameCfg.BATTERTY.BATTERTY_LEVEL_UPDATE,elevel.toPrecision(2));
    },
    /**
     *  成功上传到腾讯服务器后回调(被原生回调的)
     * @param fileID 语音消息id
     */
    didUploadToGvoiceSever(fileID) {
        cc.log("oc回调js成功，上传成功"+fileID);
        this.startEvent(cc.xx.gameCfg.EVENT.EVENT_YUYIN_UPLOAD,fileID);
    },
    /**
     *  播放成功后回调(被原生回调的)
     * @param
     */
    didFinishPlayCurrentMessage() {
        cc.log("oc回调js成功，播放完成");
        this.notifyEvent(cc.xx.gameCfg.GVOICE.GVOICE_MESSAGE_FINISH_PLAYING);
    },
});