(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/core/server/FunctionID.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '2875cLlWK5J6LLi7dW/4xtv', 'FunctionID', __filename);
// Script/core/server/FunctionID.js

"use strict";

//#pragma once

//<emFunction>////////////////////////////////////////////////////////////////////////////////////////-
//enum emFunction
//{
module.exports = {
	emFunction_RegLogin: 0, //注册登录
	emFunction_FindPsw: 1, //找回密码
	emFunction_Pay: 2, //支付相关
	emFunction_IDRecord: 3, //查询ID记录系统
	emFunction_Game: 4, //游戏逻辑
	emFunction_XC: 5, //子游戏服务器和客户端交互的协议
	emFunction_BaseInfo: 6, //基本信息
	emFunction_Money: 7, //金钱钱包相关
	emFunction_LevelExp: 8, //等级经验相关
	emFunction_EMail: 9, //邮箱
	emFunction_Phone: 10, //手机号
	emFunction_Cryptoguard: 11, //密保相关
	emFunction_GameTime: 12, //游戏时间
	emFunction_MoneyRecord: 13, //金钱钱包记录
	emFunction_MailManager: 14, //邮件系统
	emFunction_NoticeManager: 15, //公告系统
	emFunction_CompetitionManager: 16, //大奖赛
	emFunction_TopPlayerManager: 17, //大奖赛置顶玩家
	emFunction_Relief: 18, //救济金
	emFunction_LoginRecord: 19, //登陆记录
	emFunction_OnlineReward: 20, //在线奖励
	emFunction_DayLogin: 21, //每日签到
	emFunction_Lock: 22, //锁机
	emFunction_CheckSystem: 23, //验证系统
	emFunction_ChengJiuManager: 24, //成就
	emFunction_TaskManager: 25, //任务
	emFunction_Present: 26, //礼品
	emFunction_PresentManager: 27, //礼品管理
	emFunction_GameRecord: 28, //游戏记录
	emFunction_PresentNotice: 29, //礼品领取公告
	emFunction_Vip: 30, //vip
	emFunction_PlayerTimer: 31, //玩家定时器
	emFunction_Card: 32, //实物卡
	emFunction_AccountInfo: 33, //账号信息

	emFunction_DBServer: 34, //HallServer,GameServer,FCServer和DBServer通信
	emFunction_ChatServer: 35, //聊天服务器
	emFunction_Club: 36, //俱乐部
	//}; 

	//<emFunctionState>////////////////////////////////////////////////////////////////////////////////////
	//enum emFunctionState
	//{
	emFunctionState_NULL: 0,
	emFunctionState_LobbyState: 1, //大厅状态
	emFunctionState_GameState: 2, //游戏状态
	//};	

	//<宏>//////////////////////////////////////////////////////////////////////////////////////////////////////////-

	//enum emServerType
	//{				
	emServerType_GameServer: 1, //供子游戏服务器连接
	emServerType_NotifyServer: 2, //通知程序
	emServerType_SubServer: 3, //子游戏服务器
	emServerType_Robot: 4, //机器人服务器
	emServerType_FriendHall: 5, //朋友圈	
	emServerType_CompChat: 6, //比赛聊天服务器

	//};


	//FUNCTIONID:unsigned                               int
	Def_Second: 1000 //1秒::1000ms
};
var aaa = {
	aa1: 1,
	aa2: 2
};
cc.xx = cc.xx || {};
cc.xx.test = aaa;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=FunctionID.js.map
        