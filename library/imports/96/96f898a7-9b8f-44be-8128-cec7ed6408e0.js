"use strict";
cc._RF.push(module, '96f89inm49EvoEozsftZAjg', 'F_RegLogin');
// Script/core/server/F_RegLogin.js

"use strict";

//#pragma once

//<协议>////////////////////////////////////////////////////////////////////////////////////////////////////////-
//enum
//{
module.exports = {
	CS_NORMAL_REG_P: 0, //普通注册
	SC_NORMAL_REG_P: 1,
	CS_LOGIN_P: 2, //开始登陆
	SC_LOGIN_P: 3,
	CS_LOGIN_OUT_P: 4, //登出
	SC_ONLINE_P: 5, //发送上线信息

	CS_CHECK_REGINFO_P: 6, //校验注册信息
	SC_CHECK_REGINFO_P: 7, //["code"]:emNoramalReg
	CS_GET_RANDOM_NICKNAME_P: 8, //客户端请求一个随机昵称
	SC_GET_RANDOM_NICKNAME_P: 9,
	SC_OHTER_LOGIN_P: 10, //你的账号在别处登录,你已经被挤下线
	SC_LOGIN_OTHER_P: 11, //你的账号在别处登录,你把它挤下线

	SC_SERVER_STOP_P: 12, //服务器处于停机维护状态

	SC_UPDATE_SAVE_RANDOM_P: 13, //更新保存密码随机数
	SC_FULLCONNECT_ATTACK_P: 14, //因为全连接攻击,你被断开连接
	SC_WEB_KILL_P: 15, //你被踢下线

	//GameServer
	CS_GAMESERVER_LOGIN_P: 16,
	SC_GAMESERVER_LOGIN_P: 17,

	SC_GAMESERVER_ONLIEN_P: 18,

	CS_HEART_CHECK_P: 19,
	SC_HALL_SERVER_VERSION_P: 20, //大厅版本号
	SC_GAME_SERVER_VERSION_P: 21, //游戏服务版本号	

	CS_YY_LOGIN_P: 22, //使用YY登陆
	SC_YY_LOGIN_P: 23,

	CS_KG_LOGIN_PC_P: 24, //酷狗PC登陆
	CS_KG_LOGIN_PHONE_P: 25, //酷狗Phone登陆
	SD_KG_LOGIN_P: 26, //发到DB玩家上线
	SC_KG_LOGIN_P: 27,
	CS_WINDOW_MIN_WAIT_P: 28, //进入最小化等待

	CS_REQUEST_REG_PHONECODE_P: 29, //手机注册请求手机验证码
	SC_REQUEST_REG_PHONECODE_P: 30,

	CS_PHONECODE_REG_P: 31, //手机注册
	SC_PHONECODE_REG_P: 32,

	CS_HUAYANG_LOGIN_P: 33, //使用华阳登陆
	SC_HUAYANG_LOGIN_P: 34,

	CS_WEIXIN_LOGIN_P: 35, //微信登录
	SC_WEIXIN_LOGIN_P: 36,

	CS_CHECK_SAFE_CLOSE_SERVER_P: 37, //验证后关服
	//Robot
	CS_ROBOT_LOGIN_P: 38, //机器人登录大厅
	SC_HEART_CHECK_P: 39, //心跳返回

	//Gate
	SC_GATE_UPDATE_P: 40, //更新网关IP&Port

	CS_REALIP_P: 41, //设置玩家真实IP

	CS_GS_HEART_CHECK_P: 42, //GS心跳
	SC_GS_HEART_CHECK_P: 43,

	SC_LOGIN_QUEUE_P: 44, //登录排队

	emHDType_Begin: 0,
	emHDType_PC: 1,
	emHDType_Android: 2,
	emHDType_Apple: 3,
	emHDType_End: 4,

	emAccountType_Begin: 0,
	emAccountType_Normal: 1, //普通账号
	emAccountType_Robot: 2, //机器人账号
	emAccountType_Fast: 3, //快速登陆账号
	emAccountType_91: 4, //91账号
	emAccountType_WXFast: 5, //微信快速登录
	emAccountType_End: 6

};

cc._RF.pop();