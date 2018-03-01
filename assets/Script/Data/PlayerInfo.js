cc.Class({
    extends: cc.Component,

    properties: {
        m_PlayerInfo:null,
    },
    ctor:function(){
        console.log('alert cotr');
    },
    savePlayerInfo(s){
        this.m_PlayerInfo = s;
    },
    setPlayerData(key,s){
        cc.log(`setPlayerData:key=${key}`,s);
        this.m_PlayerInfo[key] = s;
    },
});
