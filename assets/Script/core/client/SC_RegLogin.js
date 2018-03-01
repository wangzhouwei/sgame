function urlParse(){
    var params = {};
    if(window.location == null){
        return params;
    }
    var name,value; 
    var str=window.location.href; //取得整个地址栏
    var num=str.indexOf("?") 
    str=str.substr(num+1); //取得所有参数   stringvar.substr(start [, length ]

    var arr=str.split("&"); //各个参数放到数组里
    for(var i=0;i < arr.length;i++){ 
        num=arr[i].indexOf("="); 
        if(num>0){ 
            name=arr[i].substring(0,num);
            value=arr[i].substr(num+1);
            params[name]=value;
        } 
    }
    return params;
}
var functionid = require('FunctionID');
var messageid = require('F_RegLogin');
const SC_RegLogin = cc.Class({
    extends: cc.Component,
    statics:{
        getInstance() {
            if (!this.sc_reglogin) {
                this.sc_reglogin = new SC_RegLogin();
            }
            return this.sc_reglogin;
        },
    },
    properties: {
        functionId:functionid.emFunction_RegLogin,
    },
    ctor(){
        cc.xx.ptNet.RegisterMsg(this);
    },
    onMessageEvent(funId,msgId,msgData){
        console.log('login onMessageEvent' + funId+'_'+msgId);
        // cc.xx.ptEvent.notifyEvent(funId,msgId,msgData);
        switch(msgId)
        {
            case messageid.SC_WEIXIN_LOGIN_P:
            if(msgData.code === 0){
                this.onLine(msgData);
                cc.xx.ptEvent.notifyEvent(funId,msgId,msgData);
            }
            else 
                cc.log('登录失败'+msgData.msg);
        }
    },
    onLine( s ){
        cc.log("SC_ONLINE 上线信息",s)

        for (const key in s) {
            if (s.hasOwnProperty(key)) {
                const element = s[key];
                if(key == "state"){

                }
                else if(key == "isgame"){
                    
                }
                else if(key == "isbindaccount"){
                    
                }
                else if(key == "kick"){
                    
                }
                else if(key == "gamelist"){
                    
                }
                else if(key == "areaid"){
                    
                }
                else if(key == "Function"){
                    Object.keys(element).forEach((k1,v) => {
                        let k = parseInt(k)
                        if(k == functionid.emFunction_BaseInfo){
                    
                        }
                        else if(k == functionid.emFunction_Game){
                    
                        }
                    });
                }
            }
        }
        cc.xx.gameInfo.setGameTypeList(s.gametypelist);
    },
    CS_LOGIN(data){
        var account = urlParse()["account"];
        if(account == null){
            account = cc.sys.localStorage.getItem("account");
        }
        if(account == null){
            account = Date.now();
            cc.sys.localStorage.setItem("account",account);
        }
        let logindata = {
            hductp:3,
            uniquecode:'qweqwe',
            areaid:'1',
            wxdata:{
                code:'123456',
                refresh_token:'',
            },
            hdtp:messageid.emHDType_Apple,
            hduc:account,
            accounttype:messageid.emAccountType_Fast,
            version:0,
            random:'',
            account:'',
        };
        // let loginstr = JSON.stringify(logindata);
        cc.xx.ptNet.startEvent(this.functionId,messageid.CS_WEIXIN_LOGIN_P,logindata);
    },
});