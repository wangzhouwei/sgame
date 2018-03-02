require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = "function" == typeof require && require;
        if (!u && a) return a(o, !0);
        if (i) return i(o, !0);
        var f = new Error("Cannot find module '" + o + "'");
        throw f.code = "MODULE_NOT_FOUND", f;
      }
      var l = n[o] = {
        exports: {}
      };
      t[o][0].call(l.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, l, l.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof require && require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  AppStart: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e57040Yi4hGzrCiok9LpeTk", "AppStart");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.initMgr();
        this.initEventCfg();
        var musicvol = cc.xx.playerDefault.getMusicVolume();
        cc.audioEngine.setMusicVolume(musicvol);
        var soundvol = cc.xx.playerDefault.getSoundVolume();
        cc.audioEngine.setEffectsVolume(soundvol);
        cc.director.loadScene("login_scene");
      },
      start: function start() {},
      initMgr: function initMgr() {
        cc.xx = {};
        var playerDefault = require("./Data/PlayerDefault");
        cc.xx.playerDefault = playerDefault;
        var playerInfo = require("./Data/PlayerInfo");
        cc.xx.playerInfo = playerInfo;
        var ptNet = require("./Event/PtCore");
        cc.xx.ptNet = ptNet.getInstance();
        var gameEvent = require("./Event/GameCore");
        cc.xx.gameNet = gameEvent.getInstance();
        var tips = require("./xui/Tips");
        cc.xx.Tips = tips;
        var g_Config = require("hallConfig");
        cc.xx.g_Config = g_Config;
      },
      initEventCfg: function initEventCfg() {
        cc.xx.FunctionID = require("./core/server/FunctionID");
        cc.xx.ptEvent = require("./Event/PtEvent").getInstance();
        cc.xx.ptEventCfg = [];
        var loginprotecol = require("F_RegLogin");
        cc.xx.ptEventCfg.LOGIN = loginprotecol;
        var loginEvent = require("./core/client/SC_RegLogin");
        cc.xx.loginCore = loginEvent.getInstance();
        cc.xx.ptNet.RegisterMsg(cc.xx.loginCore);
      }
    });
    cc._RF.pop();
  }, {
    "./Data/PlayerDefault": "PlayerDefault",
    "./Data/PlayerInfo": "PlayerInfo",
    "./Event/GameCore": "GameCore",
    "./Event/PtCore": "PtCore",
    "./Event/PtEvent": "PtEvent",
    "./core/client/SC_RegLogin": "SC_RegLogin",
    "./core/server/FunctionID": "FunctionID",
    "./xui/Tips": "Tips",
    F_RegLogin: "F_RegLogin",
    hallConfig: "hallConfig"
  } ],
  EventManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d620745PFNLVoR0svPwZ7Xd", "EventManager");
    "use strict";
    var EventManager = cc.Class({
      observerList: null,
      msgList: null,
      _isCache: null,
      _cacheList: null,
      statics: {
        getInstance: function getInstance() {
          this.eventManager || (this.eventManager = new EventManager());
          return this.eventManager;
        }
      },
      ctor: function ctor() {
        this.observerList = [];
        this.msgList = [];
        this._isCache = false;
        this._cacheList = [];
      },
      addObserver: function addObserver(target) {
        this.observerList.forEach(function(item) {
          if (item == target) return true;
        });
        target ? this.observerList.push(target) : cc.log("target is null");
        cc.log("observerList.length = ", this.observerList.length);
      },
      removeObserver: function removeObserver(target) {
        var _this = this;
        target ? this.observerList.forEach(function(item, index) {
          item == target && _this.observerList.splice(index, 1);
        }) : cc.log("target is null");
        cc.log("observerList.length = ", this.observerList.length);
      },
      notifyEvent: function notifyEvent(funId, msgId, msgData) {
        try {
          this.observerList.forEach(function(item) {
            item.onMessageEvent(funId, msgId, msgData);
          });
        } catch (err) {
          cc.error(err);
        }
      },
      addMsg: function addMsg(event, data) {
        var msg = {
          event: event,
          data: data
        };
        this.msgList.push(msg);
      },
      notifyMsg: function notifyMsg() {
        this.msgList.forEach(function(item) {
          cc.xx.roomEvent.notifyEvent(item.event, item.data);
        });
      },
      cleanMsgList: function cleanMsgList() {
        this.msgList = [];
      },
      addMsgToCacheList: function addMsgToCacheList(event, data) {
        cc.log("将协议缓存下来");
        var body = {
          event: event,
          data: data
        };
        this._cacheList.push(body);
      },
      cleanCacheList: function cleanCacheList() {
        this._cacheList = [];
      },
      setIsCache: function setIsCache(state) {
        this._isCache = state;
      },
      notifyCacheList: function notifyCacheList() {
        if (this._isCache && this._cacheList.length > 0) {
          var cacheMsg = this._cacheList[0];
          if (cc.xx.room.huing && (4018 === cacheMsg.event || "room_game_data" == cacheMsg.event)) {
            cc.log("还没到胡牌动画");
            return;
          }
          this._cacheList.splice(0, 1);
          cc.log("下一条协议：" + cacheMsg.event);
          cc.xx.roomEvent.notifyEvent(cacheMsg.event, cacheMsg.data);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  F_RegLogin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "96f89inm49EvoEozsftZAjg", "F_RegLogin");
    "use strict";
    module.exports = {
      CS_NORMAL_REG_P: 0,
      SC_NORMAL_REG_P: 1,
      CS_LOGIN_P: 2,
      SC_LOGIN_P: 3,
      CS_LOGIN_OUT_P: 4,
      SC_ONLINE_P: 5,
      CS_CHECK_REGINFO_P: 6,
      SC_CHECK_REGINFO_P: 7,
      CS_GET_RANDOM_NICKNAME_P: 8,
      SC_GET_RANDOM_NICKNAME_P: 9,
      SC_OHTER_LOGIN_P: 10,
      SC_LOGIN_OTHER_P: 11,
      SC_SERVER_STOP_P: 12,
      SC_UPDATE_SAVE_RANDOM_P: 13,
      SC_FULLCONNECT_ATTACK_P: 14,
      SC_WEB_KILL_P: 15,
      CS_GAMESERVER_LOGIN_P: 16,
      SC_GAMESERVER_LOGIN_P: 17,
      SC_GAMESERVER_ONLIEN_P: 18,
      CS_HEART_CHECK_P: 19,
      SC_HALL_SERVER_VERSION_P: 20,
      SC_GAME_SERVER_VERSION_P: 21,
      CS_YY_LOGIN_P: 22,
      SC_YY_LOGIN_P: 23,
      CS_KG_LOGIN_PC_P: 24,
      CS_KG_LOGIN_PHONE_P: 25,
      SD_KG_LOGIN_P: 26,
      SC_KG_LOGIN_P: 27,
      CS_WINDOW_MIN_WAIT_P: 28,
      CS_REQUEST_REG_PHONECODE_P: 29,
      SC_REQUEST_REG_PHONECODE_P: 30,
      CS_PHONECODE_REG_P: 31,
      SC_PHONECODE_REG_P: 32,
      CS_HUAYANG_LOGIN_P: 33,
      SC_HUAYANG_LOGIN_P: 34,
      CS_WEIXIN_LOGIN_P: 35,
      SC_WEIXIN_LOGIN_P: 36,
      CS_CHECK_SAFE_CLOSE_SERVER_P: 37,
      CS_ROBOT_LOGIN_P: 38,
      SC_HEART_CHECK_P: 39,
      SC_GATE_UPDATE_P: 40,
      CS_REALIP_P: 41,
      CS_GS_HEART_CHECK_P: 42,
      SC_GS_HEART_CHECK_P: 43,
      SC_LOGIN_QUEUE_P: 44,
      emAccountType_Begin: 0,
      emAccountType_Normal: 1,
      emAccountType_Robot: 2,
      emAccountType_Fast: 3,
      emAccountType_91: 4,
      emAccountType_WXFast: 5,
      emAccountType_End: 6
    };
    cc._RF.pop();
  }, {} ],
  FunctionID: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2875cLlWK5J6LLi7dW/4xtv", "FunctionID");
    "use strict";
    module.exports = {
      emFunction_RegLogin: 0,
      emFunction_FindPsw: 1,
      emFunction_Pay: 2,
      emFunction_IDRecord: 3,
      emFunction_Game: 4,
      emFunction_XC: 5,
      emFunction_BaseInfo: 6,
      emFunction_Money: 7,
      emFunction_LevelExp: 8,
      emFunction_EMail: 9,
      emFunction_Phone: 10,
      emFunction_Cryptoguard: 11,
      emFunction_GameTime: 12,
      emFunction_MoneyRecord: 13,
      emFunction_MailManager: 14,
      emFunction_NoticeManager: 15,
      emFunction_CompetitionManager: 16,
      emFunction_TopPlayerManager: 17,
      emFunction_Relief: 18,
      emFunction_LoginRecord: 19,
      emFunction_OnlineReward: 20,
      emFunction_DayLogin: 21,
      emFunction_Lock: 22,
      emFunction_CheckSystem: 23,
      emFunction_ChengJiuManager: 24,
      emFunction_TaskManager: 25,
      emFunction_Present: 26,
      emFunction_PresentManager: 27,
      emFunction_GameRecord: 28,
      emFunction_PresentNotice: 29,
      emFunction_Vip: 30,
      emFunction_PlayerTimer: 31,
      emFunction_Card: 32,
      emFunction_AccountInfo: 33,
      emFunction_DBServer: 34,
      emFunction_ChatServer: 35,
      emFunction_Club: 36,
      emFunctionState_NULL: 0,
      emFunctionState_LobbyState: 1,
      emFunctionState_GameState: 2,
      emServerType_GameServer: 1,
      emServerType_NotifyServer: 2,
      emServerType_SubServer: 3,
      emServerType_Robot: 4,
      emServerType_FriendHall: 5,
      emServerType_CompChat: 6,
      Def_Second: 1e3
    };
    var aaa = {
      aa1: 1,
      aa2: 2
    };
    cc.xx = {};
    cc.xx.test = aaa;
    cc._RF.pop();
  }, {} ],
  GameCore: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "755e82xEppKDolLMvA6rK1M", "GameCore");
    "use strict";
    var GameEventManager = require("./GameEventManager.js");
    var GameEvent = cc.Class({
      extends: GameEventManager,
      statics: {
        getInstance: function getInstance() {
          this.gameEvent || (this.gameEvent = new GameEvent());
          return this.gameEvent;
        }
      },
      properties: {},
      connectNet: function connectNet(host, cb) {
        this.connect(host, cb);
      },
      startEvent: function startEvent(event, data) {
        cc.log("发送的协议id为：" + event);
        var body = {
          code: event
        };
        body.data = data;
        this.sendMessage(body);
      },
      onMsg: function onMsg(msgId, msgData) {
        cc.log("gameEvent 收到的协议id为：" + msgId);
        cc.log(msgData);
      },
      recieveWXAuthenticationCode: function recieveWXAuthenticationCode(wxcode) {
        this.startEvent(cc.xx.gameCfg.EVENT.EVENT_LOGIN_REP, wxcode);
      },
      writtenUserInfoIntoCellPhone: function writtenUserInfoIntoCellPhone(data) {
        cc.sys.localStorage.setItem(cc.xx.userEvName.USER_INFO_KEY, JSON.stringify(data.user));
        cc.sys.localStorage.setItem(cc.xx.userEvName.USER_CARD_INFO_KEY, JSON.stringify(data.cards));
      },
      updateCurrentBatteryStatus: function updateCurrentBatteryStatus(sta) {
        cc.log("oc观察者观察电量发生改变回调" + sta);
        "Charging" == sta ? this.notifyEvent(cc.xx.gameCfg.BATTERTY.BATTERTY_CHARGING, true) : this.notifyEvent(cc.xx.gameCfg.BATTERTY.BATTERTY_CHARGING, false);
      },
      updateCurrentBatteryLevel: function updateCurrentBatteryLevel(elevel) {
        cc.log("oc观察者观察电量发生改变回调" + elevel);
        this.notifyEvent(cc.xx.gameCfg.BATTERTY.BATTERTY_LEVEL_UPDATE, elevel.toPrecision(2));
      },
      didUploadToGvoiceSever: function didUploadToGvoiceSever(fileID) {
        cc.log("oc回调js成功，上传成功" + fileID);
        this.startEvent(cc.xx.gameCfg.EVENT.EVENT_YUYIN_UPLOAD, fileID);
      },
      didFinishPlayCurrentMessage: function didFinishPlayCurrentMessage() {
        cc.log("oc回调js成功，播放完成");
        this.notifyEvent(cc.xx.gameCfg.GVOICE.GVOICE_MESSAGE_FINISH_PLAYING);
      }
    });
    cc._RF.pop();
  }, {
    "./GameEventManager.js": "GameEventManager"
  } ],
  GameEventManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "73df834UiZOYaqecHBYMEwC", "GameEventManager");
    "use strict";
    var EventManager = require("./EventManager.js");
    var GameEventManager = cc.Class({
      extends: EventManager,
      gameSocket: null,
      hostStr: null,
      reconnectMaxNum: null,
      reconnectCount: null,
      reconnectTime: null,
      reconnectTimer: null,
      isDisConnect: null,
      _heartCheckTime: null,
      _heartCurTime: null,
      _heartIsOk: null,
      _heartTimer: null,
      _ownSet: null,
      _isReconnect: null,
      ctor: function ctor() {
        this.gameSocket = null;
        this.reconnectMaxNum = 10;
        this.reconnectCount = 0;
        this.reconnectTime = 1e3;
        this.reconnectTimer = null;
        this.isDisConnect = false;
        this.hostStr = null;
        this._heartCheckTime = 1e3;
        this._heartCurTime = 0;
        this._heartIsOk = true;
        this._heartTimer = null;
        this._isReconnect = false;
      },
      setCallBack: function setCallBack(target) {
        this._ownSet = target;
      },
      connect: function connect(hostStr, callBack) {
        var _this = this;
        cc.log("进行网络连接, hostStr = " + hostStr);
        this.hostStr = hostStr;
        var self = this;
        this.gameSocket = new WebSocket(hostStr);
        this.gameSocket.onopen = function() {
          cc.log("websocket has connect");
          _this.cleanReconnectTimer();
          _this._heartIsOk = true;
          cc.xx.Tips.hide();
          _this.heartCheck();
          if (_this._isReconnect) {
            _this._ownSet && _this._ownSet.reconnected();
            _this._isReconnect = false;
          }
          callBack && callBack instanceof Function && callBack();
        };
        this.gameSocket.onerror = function(errormsg) {
          cc.log("websocket connect error", errormsg);
        };
        this.gameSocket.onclose = function() {
          cc.log("websocket has close");
          _this.isDisConnect || _this.reconnect();
        };
        this.gameSocket.onmessage = function(data) {
          if ("pong" == data.data) _this._heartIsOk = true; else {
            data = JSON.parse(data.data);
            var msgId = data.mid;
            var funId = data.fid;
            var msgData = data;
            self.onMsg(funId, msgId, msgData);
          }
          return;
          var fileReader;
        };
        this.gameSocket.sendMessage = function(msgData, state) {
          _this.gameSocket.readyState === WebSocket.OPEN ? state ? _this.gameSocket.send(msgData) : _this.gameSocket.send(JSON.stringify(msgData)) : cc.error("websocket connect error: " + _this.gameSocket.readyState);
        };
      },
      heartCheck: function heartCheck() {
        var _this2 = this;
        var timeFun = function timeFun() {
          if (_this2._heartIsOk) {
            if (_this2.gameSocket) {
              var str = "ping";
              if (_this2.gameSocket.readyState === WebSocket.OPEN) {
                _this2._heartIsOk = false;
                _this2.sendMessage(str, true);
              }
            }
            _this2._heartCurTime = 0;
          } else _this2._heartCurTime++;
          if (_this2._heartCurTime >= 5) {
            cc.log("心跳检测有问题");
            clearTimeout(_this2._heartTimer);
          } else _this2.heartCheck();
        };
        this._heartTimer = setTimeout(timeFun, this._heartCheckTime);
      },
      reconnect: function reconnect() {
        var _this3 = this;
        if (this.reconnectCount > this.reconnectMaxNum) {
          cc.log("重连次数已达最大");
          this.hostStr = this.changeConnectHost();
          if (!this.hostStr) return;
          this.reconnectCount = 0;
        }
        this.reconnectTimer = setTimeout(function() {
          cc.log("正在进行第" + _this3.reconnectCount + "次重连");
          cc.xx.Tips.show("网络连接中断，正在重新连接....");
          _this3.connect(_this3.hostStr);
          _this3._isReconnect = true;
          _this3.reconnectCount++;
        }, this.reconnectTime);
      },
      cleanReconnectTimer: function cleanReconnectTimer() {
        this.reconnectCount = 0;
        if (this.reconnectTimer) {
          clearTimeout(this.reconnectTimer);
          this.reconnectTimer = null;
        }
      },
      sendMessage: function sendMessage(msgData, state) {
        if (null === msgData || void 0 === msgData) {
          msgData = null;
          cc.log("消息为空");
          return;
        }
        this.gameSocket.sendMessage(msgData, state);
      },
      close: function close(isDis) {
        this.gameSocket.close();
        this.gameSocket = null;
        this.isDisConnect = isDis;
      },
      handleData: function handleData(data) {
        var bytes = new Uint8Array(data);
        var msgId = bytes[0];
        var body = new Uint8Array(data, 1, data.byteLength - 1);
        this.onMsg(msgId, body);
      }
    });
    cc._RF.pop();
  }, {
    "./EventManager.js": "EventManager"
  } ],
  Login: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "280c3rsZJJKnZ9RqbALVwtK", "Login");
    "use strict";
    cc.dd = cc.dd || {};
    require("./Event/GameEventManager");
    cc.Class({
      extends: cc.Component,
      properties: {
        loginBtn: {
          default: null,
          type: cc.Button
        },
        txtBtn: {
          default: null,
          type: cc.Button
        },
        clickBtn: {
          default: null,
          type: cc.Toggle
        },
        hallmusic: {
          default: null,
          url: cc.AudioClip
        }
      },
      onLoad: function onLoad() {
        cc.audioEngine.playMusic(this.hallmusic, true);
        cc.xx.ptEvent.addObserver(this);
        cc.xx.Tips.init();
        this.loginBtn.node.on(cc.Node.EventType.TOUCH_START, this.clicklogin, this);
        cc.xx.ptNet.gameSocket && !cc.xx.ptNet.gameSocket.readyState !== WebSocket.OPEN || setTimeout(function() {
          cc.xx.Tips.show("正在链接服务器...", 2e3);
          cc.xx.ptNet.connectNet(function() {
            cc.xx.Tips.show("服务器链接成功", 1e3);
          });
        }, 200);
      },
      onDestroy: function onDestroy() {
        cc.xx.ptEvent.removeObserver(this);
      },
      clicklogin: function clicklogin() {
        var str = "123";
        cc.xx.loginCore.CS_LOGIN(str);
        cc.director.loadScene("hall_scene");
      },
      onMessageEvent: function onMessageEvent(funid, msgid, data) {
        console.log("login scene" + funid + "_" + msgid);
        switch (funid, msgid) {
         case cc.xx.FunctionID.emFunction_RegLogin, cc.xx.ptEventCfg.LOGIN.SC_LOGIN_P:
          cc.director.loadScene("hall_scene");
        }
      }
    });
    cc._RF.pop();
  }, {
    "./Event/GameEventManager": "GameEventManager"
  } ],
  PlayerDefault: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "89bfbuSgJlNbKYF06O7tiJA", "PlayerDefault");
    "use strict";
    var m_Userinfo = "";
    var m_ConnectServerIP = null;
    var m_ConnectServerPort = null;
    var m_VoiceState = 0;
    var m_EffectState = 0;
    var m_RegType = 0;
    module.exports = {
      getUserInfo: function getUserInfo() {
        return m_Userinfo;
      },
      setUserInfo: function setUserInfo(info) {
        m_Userinfo = info;
      },
      initData: function initData() {},
      setMusicVolume: function setMusicVolume(volume) {
        cc.sys.localStorage.setItem("musicVolume", volume);
      },
      getMusicVolume: function getMusicVolume(volume) {
        return parseFloat(cc.sys.localStorage.getItem("musicVolume")) || 0;
      },
      setSoundVolume: function setSoundVolume(volume) {
        cc.sys.localStorage.setItem("soundVolume", volume);
      },
      getSoundVolume: function getSoundVolume(volume) {
        return parseFloat(cc.sys.localStorage.getItem("soundVolume")) || 0;
      }
    };
    cc._RF.pop();
  }, {} ],
  PlayerInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2d9b4Nqy/hEFqAOxNXhzzWY", "PlayerInfo");
    "use strict";
    var m_Userinfo = "";
    module.exports = {
      getUserInfo: function getUserInfo() {
        return m_Userinfo;
      },
      setUserInfo: function setUserInfo(info) {
        m_Userinfo = info;
      },
      initData: function initData() {}
    };
    cc._RF.pop();
  }, {} ],
  PtCore: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "76cc3q1yEdMk5o88+9fNJxi", "PtCore");
    "use strict";
    var GameEventManager = require("./GameEventManager.js");
    var PTEventManager = cc.Class({
      proList: null,
      _currConnectIndex: 0,
      extends: GameEventManager,
      statics: {
        getInstance: function getInstance() {
          this.ptEvntManager || (this.ptEvntManager = new PTEventManager());
          return this.ptEvntManager;
        }
      },
      ctor: function ctor() {
        this.proList = [];
        this._currConnectIndex = 0;
      },
      connectNet: function connectNet(cb) {
        this.connect(cc.xx.g_Config.hallserverAddress[0], cb);
      },
      changeConnectHost: function changeConnectHost() {
        this._currConnectIndex++;
        var host = cc.xx.g_Config.hallserverAddress[this._currConnectIndex];
        return host;
      },
      startEvent: function startEvent(funid, msgid, data) {
        cc.log("发送的协议id为：" + funid + "_" + msgid);
        var body = {
          mid: msgid,
          fid: funid
        };
        body.data = data;
        this.sendMessage(body);
      },
      RegisterMsg: function RegisterMsg(target) {
        this.proList.forEach(function(item) {
          if (item == target) return true;
        });
        target ? this.proList.push(target) : cc.log("target is null");
        cc.log("proList.length = ", this.proList.length);
      },
      onMsg: function onMsg(funId, msgId, msgData) {
        cc.log("PTEventManager 收到的协议id为：" + funId + "_" + msgId);
        cc.log(msgData);
        this.proList.forEach(function(iteam) {
          iteam.functionId === funId && iteam.onMessageEvent(funId, msgId, msgData);
        });
      },
      recieveWXAuthenticationCode: function recieveWXAuthenticationCode(wxcode) {
        this.startEvent(cc.xx.gameCfg.EVENT.EVENT_LOGIN_REP, wxcode);
      },
      writtenUserInfoIntoCellPhone: function writtenUserInfoIntoCellPhone(data) {
        cc.sys.localStorage.setItem(cc.xx.userEvName.USER_INFO_KEY, JSON.stringify(data.user));
        cc.sys.localStorage.setItem(cc.xx.userEvName.USER_CARD_INFO_KEY, JSON.stringify(data.cards));
      },
      updateCurrentBatteryStatus: function updateCurrentBatteryStatus(sta) {
        cc.log("oc观察者观察电量发生改变回调" + sta);
        "Charging" == sta ? this.notifyEvent(cc.xx.gameCfg.BATTERTY.BATTERTY_CHARGING, true) : this.notifyEvent(cc.xx.gameCfg.BATTERTY.BATTERTY_CHARGING, false);
      },
      updateCurrentBatteryLevel: function updateCurrentBatteryLevel(elevel) {
        cc.log("oc观察者观察电量发生改变回调" + elevel);
        this.notifyEvent(cc.xx.gameCfg.BATTERTY.BATTERTY_LEVEL_UPDATE, elevel.toPrecision(2));
      },
      didUploadToGvoiceSever: function didUploadToGvoiceSever(fileID) {
        cc.log("oc回调js成功，上传成功" + fileID);
        this.startEvent(cc.xx.gameCfg.EVENT.EVENT_YUYIN_UPLOAD, fileID);
      },
      didFinishPlayCurrentMessage: function didFinishPlayCurrentMessage() {
        cc.log("oc回调js成功，播放完成");
        this.notifyEvent(cc.xx.gameCfg.GVOICE.GVOICE_MESSAGE_FINISH_PLAYING);
      }
    });
    cc._RF.pop();
  }, {
    "./GameEventManager.js": "GameEventManager"
  } ],
  PtEvent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5403a/fn05Bm5kC2j92GwCl", "PtEvent");
    "use strict";
    var eventmanager = require("./GameEventManager");
    var ptevent = cc.Class({
      extends: eventmanager
    });
    module.exports = ptevent;
    cc._RF.pop();
  }, {
    "./GameEventManager": "GameEventManager"
  } ],
  SC_RegLogin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e1371gyDlNONJt43DXjzdaL", "SC_RegLogin");
    "use strict";
    var functionid = require("FunctionID");
    var SC_RegLogin = cc.Class({
      extends: cc.Component,
      statics: {
        getInstance: function getInstance() {
          this.sc_reglogin || (this.sc_reglogin = new SC_RegLogin());
          return this.sc_reglogin;
        }
      },
      properties: {
        functionId: functionid.emFunction_RegLogin
      },
      onMessageEvent: function onMessageEvent(funId, msgId, msgData) {
        console.log("login onMessageEvent" + funId + "_" + msgId);
        wx.login({
          success: function (sss) {
            wx.getUserInfo({
              success:function(info){
                var a = info;
              }
            })
          }
        })
        cc.xx.ptEvent.notifyEvent(funId, msgId, msgData);
      },
      CS_LOGIN: function CS_LOGIN(data) {
        cc.xx.ptNet.startEvent(this.functionId, cc.xx.ptEventCfg.LOGIN.CS_LOGIN_OUT_P, data);
      }
    });
    cc._RF.pop();
  }, {
    FunctionID: "FunctionID"
  } ],
  SoundManger: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b23beLwNeNExZ/pYAEuollA", "SoundManger");
    "use strict";
    var SoundManger = cc.Class({
      statics: {
        getInstance: function getInstance() {
          this.soundManger || (this.soundManger = new SoundManger());
          return this.soundManger;
        }
      },
      _musicVolume: null,
      _soundVolume: null,
      _bgm: null,
      _bgmUrl: null,
      ctor: function ctor() {},
      init: function init() {
        cc.loader.loadResDir("Game/Sound", function(err, assets) {
          if (err) {
            cc.error(err);
            return;
          }
        });
        if (null === cc.sys.localStorage.getItem("musicVolume")) {
          this._musicVolume = 1;
          cc.sys.localStorage.setItem("musicVolume", 10 * this._musicVolume);
        } else this._musicVolume = parseInt(cc.sys.localStorage.getItem("musicVolume")) / 10;
        if (null === cc.sys.localStorage.getItem("soundVolume")) {
          this._soundVolume = 1;
          cc.sys.localStorage.setItem("soundVolume", 10 * this._soundVolume);
        } else this._soundVolume = parseInt(cc.sys.localStorage.getItem("soundVolume")) / 10;
      },
      setMusicVolume: function setMusicVolume(v) {
        this._musicVolume = v;
        cc.sys.localStorage.setItem("musicVolume", 10 * this._musicVolume);
        null === this._bgm ? this._bgmUrl && (this._bgm = cc.audioEngine.play(cc.url.raw(this._bgmUrl), true, this._musicVolume)) : cc.audioEngine.setVolume(this._bgm, this._musicVolume);
      },
      setSoundVolume: function setSoundVolume(v) {
        this._soundVolume = v;
        cc.sys.localStorage.setItem("soundVolume", 10 * this._soundVolume);
      },
      getMusicVoluem: function getMusicVoluem() {
        return this._musicVolume;
      },
      getSoundVolume: function getSoundVolume() {
        return this._soundVolume;
      },
      playMusic: function playMusic(url, loop) {
        this._bgmUrl = url;
        if (0 === this._musicVolume) return;
        this._bgm = cc.audioEngine.play(cc.url.raw(url), loop, this._musicVolume);
      },
      playSound: function playSound(url) {
        if (0 === this._soundVolume) return;
        cc.audioEngine.play(cc.url.raw(url), false, this._soundVolume);
      },
      stopAllSound: function stopAllSound() {
        if (0 === this._musicVolume) return;
        if (0 === this._soundVolume) return;
        cc.audioEngine.stopAll();
      },
      pauseAllSounds: function pauseAllSounds() {
        if (0 === this._musicVolume) return;
        if (0 === this._soundVolume) return;
        cc.audioEngine.pauseAll();
      },
      resumeAllSounds: function resumeAllSounds() {
        if (0 === this._musicVolume) return;
        if (0 === this._soundVolume) return;
        cc.audioEngine.resumeAll();
      }
    });
    cc.dd.soundMgr = SoundManger.getInstance();
    cc._RF.pop();
  }, {} ],
  Tips: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "56f53DiQElNbJ4LGbbuUhBd", "Tips");
    "use strict";
    var Tips = {
      _tips: null,
      _detailLabel: null,
      _parent: null
    };
    Tips.init = function() {
      var self = this;
      cc.loader.loadRes("prefab/Tips", cc.Prefab, function(error, prefab) {
        if (error) {
          cc.error(error);
          return;
        }
        var tips = cc.instantiate(prefab);
        Tips._tips = tips;
        Tips._detailLabel = cc.find("bg/lab", tips).getComponent(cc.Label);
        Tips._tips.parent = cc.find("Canvas");
        Tips._tips.active = false;
      });
    };
    Tips.show = function(str, time) {
      if (!Tips._tips) return;
      Tips._detailLabel.string = str;
      time && setTimeout(function() {
        Tips.hide();
      }, time);
      Tips._tips.active = true;
    };
    Tips.hide = function() {
      if (!Tips._tips) return;
      Tips._tips.active = false;
    };
    module.exports = Tips;
    cc._RF.pop();
  }, {} ],
  generalPopBg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "26951TiL7BN87S/ImWDGGml", "generalPopBg");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        title: {
          default: null,
          type: cc.Sprite
        },
        closeBtn: {
          default: null,
          type: cc.Button
        }
      },
      onLoad: function onLoad() {
        this.closeBtn.node.on(cc.Node.EventType.TOUCH_END, this.close, this);
      },
      binit: function binit(obj) {
        if (obj.hasOwnProperty("size")) {
          this.node.width = obj.size.width;
          this.node.height = obj.size.height;
        }
      },
      close: function close() {
        this.node.destroy();
      }
    });
    cc._RF.pop();
  }, {} ],
  generalShowBg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "94cac89tAVMpLaLNmQxXsSU", "generalShowBg");
    "use strict";
    var _cc$Class;
    function _defineProperty(obj, key, value) {
      key in obj ? Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      }) : obj[key] = value;
      return obj;
    }
    cc.Class((_cc$Class = {
      extends: cc.Component,
      properties: {
        _animSpeed: .3,
        title: {
          default: null,
          type: cc.Sprite
        },
        closeBtn: {
          default: null,
          type: cc.Button
        },
        scaleBg: {
          default: null,
          type: cc.Sprite
        }
      },
      onLoad: function onLoad() {
        var self = this;
        this.closeBtn.node.on(cc.Node.EventType.TOUCH_END, self.close, self);
        var cbFadeOut = cc.callFunc(self.onFadeOutFinish, self);
        var cbFadeIn = cc.callFunc(self.onFadeInFinish, self);
        self.actionFadeIn = cc.sequence(cc.spawn(cc.fadeTo(self._animSpeed, 255), cc.scaleTo(self._animSpeed, 1).easing(cc.easeBackOut())), cbFadeIn);
        self.actionFadeOut = cc.sequence(cc.spawn(cc.fadeTo(self._animSpeed, 0), cc.scaleTo(self._animSpeed, 0).easing(cc.easeBackIn())), cbFadeOut);
        self.scaleBg.runAction(self.actionFadeOut);
      },
      binit: function binit(pram) {},
      close: function close() {
        self.scaleBg.runAction(self.actionFadeIn);
      },
      startFadeOut: function startFadeOut() {
        cc.eventManager.pauseTarget(Alert._alert, true);
        Alert._alert.runAction(self.actionFadeOut);
      },
      onFadeInFinish: function onFadeInFinish() {
        cc.eventManager.resumeTarget(Alert._alert, true);
      }
    }, _defineProperty(_cc$Class, "onFadeInFinish", function onFadeInFinish() {
      cc.eventManager.resumeTarget(Alert._alert, true);
    }), _defineProperty(_cc$Class, "onFadeOutFinish", function onFadeOutFinish() {
      self.onDestory();
    }), _cc$Class));
    cc._RF.pop();
  }, {} ],
  goldRank: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7dcf8pbBhdCcLxVnnt1xcxE", "goldRank");
    "use strict";
    var playersRank = [ {
      rank: 1,
      name: "小黑",
      id: "111111111"
    } ];
    cc.Class({
      extends: cc.Component,
      properties: {
        rankIteam: cc.Prefab,
        scrollView: cc.ScrollView
      },
      onLoad: function onLoad() {
        cc.log("goldRank onload ");
        this.testData = [];
        var dd = function dd() {};
        for (var index = 0; index < 10; index++) {
          var dq = new dd();
          dq.rank = index + 1;
          dq.name = "嘿嘿嘿" + index;
          dq.id = "11111" + index;
          dq.money = "11" + index;
          this.testData.push(dq);
        }
        this.showList();
      },
      showList: function showList() {
        var _this = this;
        this.testData.forEach(function(element) {
          var item = cc.instantiate(_this.rankIteam);
          item.getComponent("rankList").init(element);
          _this.scrollView.content.addChild(item);
        });
        cc.log("goldRank showList ");
      },
      close: function close() {
        var _this2 = this;
        var showbg = cc.find("showbg", this.node);
        var scriptcom = showbg.getComponent("popAction");
        scriptcom.close(function() {
          _this2.node.destroy();
        });
      },
      touchExchange: function touchExchange(event, custom) {
        console.log("touchExchange " + custom);
      }
    });
    cc._RF.pop();
  }, {} ],
  hallConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "626bbinY+JEzp+inf+Ii1MD", "hallConfig");
    "use strict";
    var g_Config = {
      appName: "小闲川南棋牌",
      ver_control: "local"
    };
    "local" == g_Config.ver_control && (g_Config.hallserverAddress = [ "ws://192.168.1.108:8182" ]);
    module.exports = g_Config;
    cc._RF.pop();
  }, {} ],
  joingame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1113a+k+1pGn5nuNnIsnE78", "joingame");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        currIndex: 0,
        m_CodeLabelTb: [],
        labLayout: cc.Node,
        showbg: cc.Node,
        layNode: {
          type: cc.Node,
          default: null
        }
      },
      ctor: function ctor() {
        this.currIndex = 0;
        this.m_CodeLabelTb = [];
      },
      onLoad: function onLoad() {
        cc.log("onload func");
        for (var i = 0; i < 6; i++) {
          var str = "label" + (i + 1);
          null == this.layNode && (this.layNode = this.node.getChildByName("showbg").getChildByName("scaleBg").getChildByName("dec").getChildByName("xxqp_jrdz_fj_szbj").getChildByName("labLayout"));
          cc.log("str = " + str + ", this.layNode.name = " + this.layNode.name);
          var stringlab = this.layNode.getChildByName(str);
          this.m_CodeLabelTb.push(stringlab.getComponent(cc.Label));
        }
      },
      touchKeyBord: function touchKeyBord(event, custom) {
        console.log("touch event=" + custom);
        if (this.currIndex >= this.m_CodeLabelTb.length) return;
        this.currIndex < 0 && (this.currIndex = 0);
        this.m_CodeLabelTb[this.currIndex].string = custom;
        this.currIndex++;
      },
      PasteCb: function PasteCb() {},
      BackWord: function BackWord() {
        this.currIndex--;
        this.currIndex >= this.m_CodeLabelTb.length && (this.currIndex = this.m_CodeLabelTb.length - 1);
        if (this.currIndex < 0) return;
        this.m_CodeLabelTb[this.currIndex].string = "";
      },
      close: function close() {
        var _this = this;
        var scriptcom = this.node.getChildByName("showbg").getComponent("popAction");
        scriptcom ? scriptcom.close(function() {
          _this.node.destroy();
        }) : this.node.destroy();
      }
    });
    cc._RF.pop();
  }, {} ],
  lobby: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8a536F6m1xBirIFAWUHw4lU", "lobby");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        userName: {
          default: null,
          type: cc.Label
        },
        userId: {
          default: null,
          type: cc.Label
        },
        userMoney: {
          default: null,
          type: cc.Label
        },
        userFace: {
          default: null,
          type: cc.Sprite
        },
        headBtn: {
          default: null,
          type: cc.Button
        },
        getFangkaBtn: {
          default: null,
          type: cc.Button
        },
        headfab: {
          default: null,
          type: cc.Prefab
        },
        generalfab: {
          default: null,
          type: cc.Prefab
        },
        joinRoomFab: cc.Prefab
      },
      onLoad: function onLoad() {
        cc.xx.Tips.init();
        this.headBtn.node.on(cc.Node.EventType.TOUCH_END, function() {
          var palyercenterpop = cc.instantiate(this.headfab);
          cc.director.getScene().addChild(palyercenterpop);
        }, this);
        this.getFangkaBtn.node.on(cc.Node.EventType.TOUCH_END, this.chongzhitips, this);
      },
      chongzhitips: function chongzhitips() {
        var totalpop = cc.instantiate(this.generalfab).getComponent("generalPopBg");
        totalpop.binit({
          size: {
            width: 800,
            height: 200
          }
        });
        cc.director.getScene().addChild(totalpop.node);
      },
      touchzhanji: function touchzhanji() {
        cc.loader.loadRes("prefab/zhanJiUI", function(err, pertab) {
          var totalpop = cc.instantiate(pertab);
          cc.director.getScene().addChild(totalpop);
        });
      },
      touchmail: function touchmail() {
        cc.loader.loadRes("prefab/messageUI", function(err, pertab) {
          var totalpop = cc.instantiate(pertab);
          cc.director.getScene().addChild(totalpop);
        });
      },
      touchrank: function touchrank() {
        cc.loader.loadRes("prefab/goldRank", function(err, pertab) {
          var totalpop = cc.instantiate(pertab);
          cc.director.getScene().addChild(totalpop);
        });
      },
      touchset: function touchset() {
        cc.loader.loadRes("prefab/setUI", function(err, pertab) {
          var totalpop = cc.instantiate(pertab);
          cc.director.getScene().addChild(totalpop);
        });
      },
      touchshare: function touchshare(asd) {
        Alert.show("没有分享");
      },
      touchjoinroom: function touchjoinroom() {
        var joinRoomUI = cc.instantiate(this.joinRoomFab);
        cc.director.getScene().addChild(joinRoomUI);
      }
    });
    cc._RF.pop();
  }, {} ],
  lunzhanjiList: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "652ee/cfKhJS7QRSR/jZmi0", "lunzhanjiList");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        gameName: cc.RichText,
        roomCode: cc.RichText,
        isClub: cc.Sprite,
        gameTime: cc.Label,
        playerLayout: cc.Layout
      },
      init: function init(info, father) {
        this.father = father;
        this.isClub.node.active = "number" === typeof info.clubid;
        this.gameTime.string = info.time;
        this.gameName.string = "<color=#ff9c00>游戏:</c><color=#ffffff>" + info.game + "</color>";
        this.roomCode.string = "<color=#ff9c00>房号:</c><color=#ffffff>" + info.code + "</color>";
        var startx = 100;
        var starty = 50;
        var offx = 300;
        var offy = -50;
        for (var index = 0; index < info.playerlist.length; index++) {
          var element = info.playerlist[index];
          var node = new cc.Node("node");
          var label = node.addComponent(cc.RichText);
          label.string = "<color=#ffffff>玩家名字:</c><color=#0fffff>" + element.changeCoin + "</color>";
          label.fontSize = 26;
          cc.log("pos" + index, startx + offx * (index % 4), starty + offy * parseInt(index / 4));
          node.setPosition(startx + offx * (index % 4), starty + offy * parseInt(index / 4));
          this.playerLayout.node.addChild(node);
        }
      },
      start: function start(info) {},
      onClick: function onClick() {
        var juscroll = cc.find("showbg/scaleBg/juzhanjiScroll", this.father.node);
        var lunscroll = cc.find("showbg/scaleBg/lunzhanjiScroll", this.father.node);
        lunscroll.active = false;
        juscroll.active = true;
      }
    });
    cc._RF.pop();
  }, {} ],
  mailItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1de85JsqwRO+KZQOX8P9PvI", "mailItem");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        title: cc.Label,
        sender: cc.Label,
        sendTime: cc.Label,
        readIcon: cc.Sprite,
        readFlag: {
          default: [],
          type: cc.SpriteFrame
        },
        choiceBtn: cc.Toggle,
        msgInfo: cc.Object
      },
      start: function start() {},
      init: function init(info) {
        this.title.string = info.title;
        this.sender.string = info.from;
        this.sendTime.string = info.time;
        this.readIcon.spriteFrame = this.readFlag[info.readtype];
        this.msgInfo = info;
      },
      choiceFunc: function choiceFunc() {
        1 === arguments.length && (this.choiceBtn.isChecked = arguments[0]);
      },
      delFunc: function delFunc() {
        true === this.choiceBtn.isChecked && this.node.destroy();
      },
      touchDetail: function touchDetail() {
        cc.loader.loadRes("prefab/messageDetail", function(err, pertab) {
          var totalpop = cc.instantiate(pertab);
          var info = {};
          info.from = " 系统中心 ";
          info.time = new Date().toDateString();
          info.text = "现在是北京时间：" + new Date().toLocaleString();
          totalpop.getComponent("messageDetail").init(info);
          cc.director.getScene().addChild(totalpop);
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  messageDetail: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bae9dPWmBNNk76ECnPSEIPD", "messageDetail");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        sender: cc.Label,
        sendTime: cc.Label,
        sendDetail: cc.Label
      },
      start: function start() {},
      init: function init(info) {
        this.sender.string = info.from;
        this.sendTime.string = info.time;
        this.sendDetail.string = info.text;
      },
      close: function close() {
        var _this = this;
        var showbg = cc.find("showbg", this.node);
        var scriptcom = showbg.getComponent("popAction");
        scriptcom.close(function() {
          _this.node.destroy();
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  messageUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a73652gDJtA9YE4MBPp+ADO", "messageUI");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        mailIteam: cc.Prefab,
        scrollView: cc.ScrollView,
        choiceAllBtn: cc.Toggle,
        delBtn: cc.Button
      },
      start: function start() {
        this.testData = [];
        var dd = function dd() {};
        for (var index = 0; index < 10; index++) {
          var dq = new dd();
          dq.title = "欢迎来到棋牌游戏世界" + index;
          dq.id = index;
          dq.readtype = index > 5 ? 1 : 0, dq.from = "系统中心";
          dq.time = new Date().toDateString();
          dq.mailtype = index % 2, this.testData.push(dq);
        }
        this.showList();
      },
      showList: function showList() {
        var _this = this;
        this.testData.forEach(function(element) {
          var item = cc.instantiate(_this.mailIteam);
          item.getComponent("mailItem").init(element);
          _this.scrollView.content.addChild(item);
        });
      },
      choiceAllFunc: function choiceAllFunc() {
        var _this2 = this;
        var itemTb = this.scrollView.content.getChildren();
        itemTb.forEach(function(element) {
          element.getComponent("mailItem").choiceFunc(_this2.choiceAllBtn.isChecked);
        });
      },
      delFunc: function delFunc() {
        var itemTb = this.scrollView.content.getChildren();
        itemTb.forEach(function(element) {
          element.getComponent("mailItem").delFunc();
        });
      },
      close: function close() {
        var _this3 = this;
        var scriptcom = this.node.getChildByName("showbg").getComponent("popAction");
        scriptcom ? scriptcom.close(function() {
          _this3.node.destroy();
        }) : this.node.destroy();
      }
    });
    cc._RF.pop();
  }, {} ],
  palyercenterfab: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "679edTxwmtD/aGkmQRfOQmR", "palyercenterfab");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        closeBtn: {
          default: null,
          type: cc.Button
        }
      },
      onLoad: function onLoad() {
        this.closeBtn.node.on(cc.Node.EventType.TOUCH_END, this.close, this);
      },
      start: function start() {},
      close: function close() {
        this.node.destroy();
      }
    });
    cc._RF.pop();
  }, {} ],
  popAction: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "31c6eP0AIVL2qhEGTRtOhSR", "popAction");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        animSpeed1: .3
      },
      onLoad: function onLoad() {
        cc.log("popAction onload ");
        var cbFadeIn = cc.callFunc(this.onFadeInFinish, this);
        this.actionFadeIn = cc.sequence(cc.spawn(cc.fadeTo(this.animSpeed1, 255), cc.scaleTo(this.animSpeed1, 1).easing(cc.easeBackOut())), cbFadeIn);
        this.startFadeIn();
      },
      onFadeInFinish: function onFadeInFinish() {
        cc.eventManager.resumeTarget(this.node, true);
        console.log("onFadeInFinish");
      },
      startFadeIn: function startFadeIn() {
        cc.eventManager.pauseTarget(this.node, true);
        this.node.position = cc.p(0, 0);
        this.node.setScale(.5);
        this.node.opacity = 0;
        this.node.runAction(this.actionFadeIn);
      },
      close: function close(callback) {
        var _this = this;
        var cbFadeOut = cc.callFunc(function() {
          _this.onFadeOutFinish(callback);
        }, this);
        this.actionFadeOut = cc.sequence(cc.spawn(cc.fadeTo(this.animSpeed1, 0), cc.scaleTo(this.animSpeed1, 0).easing(cc.easeBackIn())), cbFadeOut);
        this.startFadeOut();
      },
      startFadeOut: function startFadeOut() {
        cc.eventManager.pauseTarget(this.node, true);
        this.node.runAction(this.actionFadeOut);
      },
      onFadeOutFinish: function onFadeOutFinish(callback) {
        console.log("onFadeOutFinish");
        callback();
      }
    });
    cc._RF.pop();
  }, {} ],
  rankList: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7d98a+ElctELIPozyHDO7+y", "rankList");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        playerRank: cc.Sprite,
        playerRank1: cc.Sprite,
        playerName: cc.Label,
        playerFace: cc.Sprite,
        playerId: cc.Label,
        playerMoney: cc.Label,
        rankF_T: {
          default: [],
          type: cc.SpriteFrame
        }
      },
      init: function init(info) {
        if (info.rank <= 3) {
          this.playerRank1.node.active = false;
          this.playerRank.spriteFrame = this.rankF_T[info.rank - 1];
        } else {
          this.playerRank.node.active = false;
          var ranknum = cc.find("num", this.playerRank1.node).getComponent(cc.Label);
          ranknum.string = info.rank;
        }
        this.playerName.string = info.name;
        this.playerId.string = "ID:" + info.id;
        this.playerMoney.string = info.money;
      }
    });
    cc._RF.pop();
  }, {} ],
  shezhi: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fcc14gJMIRA67sGMElheXGG", "shezhi");
    "use strict";
    var ShowAction = require("../xui/showAction");
    cc.Class({
      extends: cc.Component,
      properties: {
        musicProgress: {
          default: null,
          type: cc.ProgressBar
        },
        musicSlider: {
          default: null,
          type: cc.Slider
        },
        soundProgress: {
          default: null,
          type: cc.ProgressBar
        },
        soundSlider: {
          default: null,
          type: cc.Slider
        }
      },
      onLoad: function onLoad() {
        cc.log("shezhi onload ");
        var musicvolume = cc.xx.playerDefault.getMusicVolume();
        this.musicProgress.progress = musicvolume;
        this.musicSlider.progress = musicvolume;
        var soundvolume = cc.xx.playerDefault.getSoundVolume();
        this.soundProgress.progress = soundvolume;
        this.soundSlider.progress = soundvolume;
      },
      start: function start() {},
      onDestroy: function onDestroy() {
        cc.log("this.sounslider.progress" + this.soundSlider.progress);
      },
      slidMusic: function slidMusic(event) {
        console.log("slidMusic" + event.progress);
        this.musicProgress.progress = event.progress;
        cc.audioEngine.setMusicVolume(event.progress);
      },
      slidMusicEnd: function slidMusicEnd() {
        cc.xx.playerDefault.setMusicVolume(this.musicSlider.progress);
      },
      slidSound: function slidSound(event) {
        console.log("slidSound" + event.progress);
        this.soundProgress.progress = event.progress;
        cc.audioEngine.setEffectsVolume(event.progress);
      },
      slidSoundEnd: function slidSoundEnd() {
        cc.xx.playerDefault.setSoundVolume(this.soundSlider.progress);
      },
      close: function close() {
        var _this = this;
        var showbg = cc.find("showbg", this.node);
        var scriptcom = showbg.getComponent("popAction");
        scriptcom.close(function() {
          _this.node.destroy();
        });
      },
      changeAccount: function changeAccount() {
        cc.director.loadScene("login_scene");
      }
    });
    cc._RF.pop();
  }, {
    "../xui/showAction": "showAction"
  } ],
  showAction: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "406bdGPD4VFRpk/YzkYE2TG", "showAction");
    "use strict";
    var ShowAction = {
      _animSpeed: .3
    };
    ShowAction.popOut = function(node, animSpeed) {
      var self = ShowAction;
      if (self._node) return;
      self._animSpeed = animSpeed || self._animSpeed;
      self._node = node;
      self.startFadeIn = function() {
        cc.eventManager.pauseTarget(self._node, true);
        self._node.position = cc.p(0, 0);
        self._node.setScale(.1);
        self._node.opacity = 0;
        self._node.runAction(self.actionFadeIn);
      };
      self.onFadeInFinish = function() {
        cc.eventManager.resumeTarget(self._node, true);
      };
      var cbFadeIn = cc.callFunc(self.onFadeInFinish, self);
      self.actionFadeIn = cc.sequence(cc.spawn(cc.fadeTo(self._animSpeed, 255), cc.scaleTo(self._animSpeed, 1).easing(cc.easeBackOut())), cbFadeIn);
      self.startFadeIn();
    };
    ShowAction.popIn = function(callback) {
      var self = ShowAction;
      self.onFadeOutFinish = function() {
        callback();
        self.onDestory();
      };
      self.startFadeOut = function() {
        cc.eventManager.pauseTarget(self._node, true);
        self._node.runAction(self.actionFadeOut);
      };
      var cbFadeOut = cc.callFunc(self.onFadeOutFinish, self);
      self.actionFadeOut = cc.sequence(cc.spawn(cc.fadeTo(self._animSpeed, 0), cc.scaleTo(self._animSpeed, 0).easing(cc.easeBackIn())), cbFadeOut);
      self.startFadeOut();
    };
    ShowAction.onDestory = function() {
      ShowAction._node = null;
      ShowAction._animSpeed = .3;
    };
    cc._RF.pop();
  }, {} ],
  testPop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "86571urZ8hAKrWVxv+dHgA/", "testPop");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        animSpeed2: .3
      },
      onLoad: function onLoad() {
        cc.log("popAction onload ");
        var cbFadeIn = cc.callFunc(this.onFadeInFinish, this);
        this.actionFadeIn = cc.sequence(cc.spawn(cc.fadeTo(this.animSpeed2, 255), cc.scaleTo(this.animSpeed2, 1).easing(cc.easeBackOut())), cbFadeIn);
        this.startFadeIn();
      },
      onFadeInFinish: function onFadeInFinish() {
        cc.eventManager.resumeTarget(this.node, true);
        console.log("onFadeInFinish");
      },
      startFadeIn: function startFadeIn() {
        cc.eventManager.pauseTarget(this.node, true);
        this.node.position = cc.p(0, 0);
        this.node.setScale(.5);
        this.node.opacity = 0;
        this.node.runAction(this.actionFadeIn);
      },
      close: function close(callback) {
        var _this = this;
        var cbFadeOut = cc.callFunc(function() {
          _this.onFadeOutFinish(callback);
        }, this);
        this.actionFadeOut = cc.sequence(cc.spawn(cc.fadeTo(this.animSpeed2, 0), cc.scaleTo(this.animSpeed2, 0).easing(cc.easeBackIn())), cbFadeOut);
        this.startFadeOut();
      },
      startFadeOut: function startFadeOut() {
        cc.eventManager.pauseTarget(this.node, true);
        this.node.runAction(this.actionFadeOut);
      },
      onFadeOutFinish: function onFadeOutFinish(callback) {
        console.log("onFadeOutFinish");
        callback();
      }
    });
    cc._RF.pop();
  }, {} ],
  xiaoxi: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6df51aV0D5NurtkIqVIcyZH", "xiaoxi");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  zhanji: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a0a00EX92pM+r7H5yvdFC0J", "zhanji");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        lunzhanjiItem: cc.Prefab,
        lunscrollView: cc.ScrollView,
        juscrollView: cc.ScrollView
      },
      onLoad: function onLoad() {
        this.testData = [];
        for (var index = 0; index < 10; index++) {
          var dq = {};
          dq.game = "炸金花" + index;
          index % 2 == 1 && (dq.clubid = index);
          dq.time = new Date().toDateString();
          dq.code = "aaaaa" + index;
          dq.playerlist = [];
          for (var i = 0; i < index % 8; i++) {
            var aa = {};
            aa.playerName = "玩家" + i;
            aa.changeCoin = i - 4;
            dq.playerlist.push(aa);
          }
          this.testData.push(dq);
        }
        this.showList();
      },
      showList: function showList() {
        var _this = this;
        this.testData.forEach(function(element) {
          var item = cc.instantiate(_this.lunzhanjiItem);
          item.getComponent("lunzhanjiList").init(element, _this);
          _this.lunscrollView.content.addChild(item);
        });
      },
      start: function start() {},
      close: function close() {
        var _this2 = this;
        if (true == this.juscrollView.node.active) {
          this.juscrollView.node.active = false;
          this.lunscrollView.node.active = true;
          return;
        }
        var scriptcom = this.node.getChildByName("showbg").getComponent("popAction");
        scriptcom ? scriptcom.close(function() {
          _this2.node.destroy();
        }) : this.node.destroy();
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "AppStart", "PlayerDefault", "PlayerInfo", "EventManager", "GameCore", "GameEventManager", "PtCore", "PtEvent", "Login", "hallConfig", "SC_RegLogin", "F_RegLogin", "FunctionID", "goldRank", "joingame", "lobby", "messageUI", "shezhi", "xiaoxi", "zhanji", "generalPopBg", "generalShowBg", "lunzhanjiList", "mailItem", "messageDetail", "palyercenterfab", "popAction", "rankList", "testPop", "SoundManger", "Tips", "showAction" ]);