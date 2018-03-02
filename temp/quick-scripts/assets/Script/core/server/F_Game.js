(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/core/server/F_Game.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '68340xvoSJE4pg2V9c/BiIY', 'F_Game', __filename);
// Script/core/server/F_Game.js

"use strict";

module.exports = {
    SC_ADD_GAMELIST_P: 0,
    SC_DEL_GAMELIST_P: 1,
    SC_ROOM_INFO_P: 2, //房间数据
    CS_ROOM_SET_PLAYER_STATE_P: 3, //玩家设置自己的状态
    SC_ROOM_SET_PLAYER_STATE_P: 4, //设置玩家状态(广播)
    SC_ROOM_SET_STATE_P: 5, //设置房间状态(广播)
    CS_ROOM_CHAT_P: 6, //聊天
    SC_ROOM_CHAT_P: 7, //聊天(广播)
    SC_ROOM_RESET_COIN_P: 8,
    SC_ROOM_ZANLI_SUCCESS_P: 9, //暂离成功
    CS_ROOM_ZANLI_COMBACK_P: 10, //玩家请求暂离回来
    SC_ROOM_ZANLI_COMBACK_SUCCESS_P: 11, //玩家请求暂离回来成功
    SC_ROOM_PLAYER_ENTER_P: 12, //玩家进入房间(广播)
    SC_ROOM_WATCH_ENTER_P: 13, //观看者进入房间(广播)
    SC_ROOM_PLAYER_QUIT_P: 14, //玩家离开房间(广播)
    SC_ROOM_WATCH_QUIT_P: 15, //观看者离开房间(广播)
    SC_ROOM_DEL_P: 16, //同意退出房间
    SC_ROOM_PREPARE_TIMEOUT_P: 17, //准备超时,你被踢出房间
    SC_ROOM_DEL_PLAYER_P: 18, //游戏结束,你条件不满足被踢出房间,如果你在暂离状态,也会被踢出房间
    SC_ROOM_DEL_WATCH_P: 19, //你是观看者,由于房间已经没有人了,你被踢出房间
    XS_REGISTER_P: 20, //子游戏服务器注册
    XS_DEL_WATCH_P: 21, //删除观看者
    XS_ZANLI_P: 22, //玩家暂离
    XS_PLAYER_RESULT_P: 23, //一个玩家结算
    XS_RESULT_P: 24, //游戏结束结算
    XS_RESET_COIN_P: 25,
    SX_CREATE_GAME_P: 26, //开始游戏		
    SX_ADD_WATCH_P: 27, //添加观看者
    SX_DEL_WATCH_P: 28, //删除观看者
    SX_RESET_COIN_P: 29,
    SX_PLAYER_LEAVE_P: 30, //玩家离线托管
    SX_PLAYER_ONLINE_P: 31, //玩家离线托管后上线
    SX_PLAYER_ZANLI_COMBACK_P: 32, //玩家暂离回来
    SX_QUIT_P: 33, //客户端点击X
    CS_GAME_PLAYER_NUM_P: 34, //请求每个游戏玩家人数表
    SC_GAME_PLAYER_NUM_P: 35,
    SC_UPDATE_GAME_LIST_P: 36, //更新游戏列表
    CS_SELECT_GAME_P: 37, //客户端选择一个游戏
    SC_SELECT_GAME_P: 38,
    CS_ROBOT_ADD_MONEY_P: 39, //机器人请求加钱
    CS_QUIT_P: 40,
    CS_WATCH_P: 41, //请求观看
    SC_WATCH_P: 42,
    CS_HUANZHUO_P: 43, //换桌
    SC_HUANZHUO_P: 44,
    CS_MODE1_ENTER_P: 45, //玩家请求进入
    CS_MODE1_ROBOT_ENTER_P: 46, //机器人请求进入
    SC_MODE1_ENTER_P: 47,
    SC_MODE1_ROBOT_FAILD_P: 48, //机器人请求进入后续失败
    CS_MODE2_ENTER_P: 49, //玩家请求进入模式2
    SC_MODE2_DATA_P: 50, //子厅可见数据
    SC_MODE2_ADD_PLAYER_P: 51, //子厅可见数据,增加一个玩家
    SC_MODE2_DEL_PLAYER_P: 52, //子厅可见数据,删除一个玩家
    SC_MODE2_ROOM_STATE_P: 53, //子厅可见数据,房间状态改变
    SC_MODE2_DATA_CREAT_ROOM_P: 54, //子厅可见数据,增加一张桌子
    SC_MODE2_DATA_CLEAR_ROOM_P: 55, //子厅可见数据,清空一张桌子
    CS_MODE2_CREATE_ROOM_P: 56, //创建房间
    SC_MODE2_CREATE_ROOM_P: 57, //结果
    CS_MODE2_ENTER_ROOM_P: 58, //进入房间
    SC_MODE2_ENTER_ROOM_P: 59, //结果
    CS_MODE3_ENTER_P: 60, //玩家请求进入模式3	
    CS_MODE3_COMPDETAIL_EXIT_P: 61, //玩家离开大奖赛详情界面-不离开MOD3模式（请求离开模式3或退出游戏才退出MODE3模式
    CS_MODE3_GAME_ENTER_P: 62, //玩家请求进入模式3某个大奖赛进行游戏CS_MODE3GAME_ENTER_P	
    SC_MODE3_ENTER_P: 63, //玩家进入模式3
    SC_MODE3_GAME_ENTER_P: 64, //玩家进入模式3中一个大奖赛进行游戏SC_MODE3GAME_ENTER_P
    SC_MODE3_RETURNERROR_P: 65, //返回错误信息协议
    CS_MODE3_ENTER_PIPEI_P: 66, //一局完成后,通知其继续匹配
    SC_MODE3_ENTER_PIPEI_P: 67, //通知其进入匹配状态
    SC_MODE3_PIPEI_OVER_P: 68, //匹配成功,通知进入房间
    SC_MODE3_QUIT_PIPEI_SUCCESS_P: 69, //退出匹配成功(模式3退出时发送给客户端，没有这个协议，玩家打完一局退出时，就不会关闭游戏窗口)
    CS_MODE3_CHAT_P: 70, //玩家发送聊天信息
    SC_MODE3_CHAT_P: 71, //玩家发送聊天信息(服务器接收到玩家聊天信息之后，要广播)
    SC_MODE3_PALYERONLINE_P: 72, //玩家上下线协议
    CS_MODE3_GETCOMPPLAYERRANK_P: 73, //获得大奖赛玩家排名
    SC_MODE3_GETCOMPPLAYERRANK_P: 74, //下发大奖赛玩家排名
    SC_MODE3_OTHER_ONLINE_P: 75, //其它在线玩家
    SC_GAME_CLOSE_P: 76, //此游戏被关闭
    SX_KILL_P: 77, //要求子游戏服务器关闭
    SX_ADD_PLAYER_P: 78, //可以中途进入的游戏,增加新玩家
    XS_ADD_PLAYER_P: 79,
    SX_JIESUAN_ALL_PLAYER_P: 80, //优雅关服,要求子游戏结算所有玩家
    SX_WEB_SET_P: 81, //网站设置数据
    SX_WEB_GET_P: 82, //网站获取数据
    XS_WEB_GET_P: 83,
    XS_VIRTUAL_ENDGAME_P: 84, //虚拟结束游戏
    SC_VIRTUAL_ENDGAME_P: 85,
    SC_ROOM_DELETE_P: 86, //房间被主动删除,通知客户端
    XS_PLAYER_HAND_TUO_GUAN_P: 87, //玩家进入手动托管
    XS_ADD_WATCH_FAIL_P: 88, //增加观察者失败
    XS_XIAOBAISHA_24_P: 89, //一个玩家在小白鲨压中24倍
    CS_REQUEST_UNONLINE_CLEW_P: 90, //请求得到离线挽留信息
    SC_REQUEST_UNONLINE_CLEW_P: 91,
    SC_ROBOT_START_PREPARE_P: 92, //通知子服务器让玩家准备
    CS_MODE1_ENTER_PIPEI_P: 93, //一局完成后,通知其继续匹配
    SC_MODE1_ENTER_PIPEI_P: 94, //通知其进入匹配状态
    SC_MODE1_PIPEI_OVER_P: 95, //匹配成功,通知进入房间
    SC_MODE1_QUIT_PIPEI_SUCCESS_P: 96, //退出匹配成功
    XS_WEB_SET_P: 97, // web设置后，返回给web数据协议
    SC_CHANGE_PLAYER_GAME_RESULT_P: 98, //改变玩家游戏结果
    SC_MODE3_PIPEI_STOP_P: 99, //停止比赛匹配
    CS_FORCE_CLOSE_SOCKET_P: 100, //强制与服务器断开
    XS_SAFE_CREATE_ROOM_P: 101, //安全创建房间
    SX_RELOAD_CONFIG_P: 102, //重新加载游戏配置
    XS_VIRTUAL_ENDGAME_OVER_P: 103, //虚拟结算完成通知GameServer对桌面成员进行处理
    XS_RESULT_OVER_P: 104, //结算完成通知GameServer对桌面进行处理	 
    SX_UPDATE_LOGKEY_P: 105, //更新日志 
    SX_UPDATE_PLAYER_INFO_P: 106, //更新玩家信息到子游戏对100人游戏
    SX_DEL_ROOM_P: 107, //删除指定的房间
    SC_PLAYER_LEAVE_MODE_P: 108, //离开模式
    CS_REQUEST_ROOM_P: 109, //重新请求一次游戏房间数据
    SC_REQUEST_ROOM_P: 110,
    CS_REQUEST_BROADCAST_PLAYERNUM_P: 111, //请求指定游戏主播房间人数
    SC_REQUEST_BROADCAST_PLAYERNUM_P: 112,
    SC_ADD_BROADCAST_GAME_P: 113, //增加主播游戏
    SC_DEL_BROADCAST_GAME_P: 114, //减少主播游戏
    SC_RAND_ROOM_CHAT_P: 115, //随机在真人房间内说句话
    SC_ROOM_VIP_DEL_P: 116, //Vip退出删除房间
    SC_ROOM_HOST_DEL_P: 117, //房主付费房间中房主离开房间拆桌
    CS_BROAD_PLAYERNUM_DETAIL_P: 118, //请求指定游戏类别的主播玩家数量统计
    SC_BROAD_PLAYERNUM_DETAIL_P: 119,
    SC_UPDATE_GAME_P: 120, //变更游戏服务器参数(低分、显示名字变更)	
    SC_SET_PLAYER_SEATID_P: 121, //设置玩家的坐位ID,暂只是robot有用
    SC_CLEAR_PLAYER_SEATID_P: 122, //清除于家的坐位ID,暂只用于robot
    XS_PLAYER_ONLINE_FAIL_P: 123, //请求得到子游戏数据失败
    SC_IP_SAME_INFO_P: 124, //IP相同玩家通知
    CSX_SET_PREPARE_P: 125, //小局中间的准备
    XSC_SET_PREPARE_P: 126,
    SX_FORCE_JIESUAN_P: 127, //通知游戏服务器强制结算
    SC_CONTINUE_FAIL_P: 128, //通知客户端无法继续游戏原因（大结算阶段）
    CS_GPS_POSITION_P: 129, //玩家坐标
    SC_GPS_POSITION_P: 130,
    SC_AGENCY_DESK_P: 131, //通知代开的房间状态
    SC_MODE4_ADD_PLAYER_P: 132, //通知mode4进入队列的玩家
    SC_MODE4_DEL_PLAYER_P: 133, //通知mode4退出队列的玩家
    SC_MATCH_ENTER_GAME_P: 134, //通知客户端进入比赛游戏房间
    CS_ROOM_CHAT_VOICE_P: 135, //房间内语音聊天
    SC_ROOM_CHAT_VOICE_P: 136,
    SC_SEND_MODE4_GAME_LOSE_P: 137, //下发比赛单轮结束结果
    SC_SEND_MODE4_GAME_WIN_P: 138, //下发比赛单论晋级结果
    SC_SEND_MODE4_START_INFO_P: 139, //下发比赛开始晋级信息
    CS_MODE4_CHAT_P: 140, //人满开赛等待中聊天
    SC_MODE4_CHAT_P: 141,
    CS_MATCH_GET_PLAYER_LIST_P: 142, //获取等待界面中的玩家列表
    SC_MATCH_GET_PLAYER_LIST_P: 143,
    SC_MATCH_OVER_P: 144, //广播比赛结束
    SX_TRANS_WATCH_PLAYER_P: 145, //将观察者转成玩家
    XSC_TRANS_WATCH_PLAYER_P: 146,
    SC_PLAYER_RESULT_P: 147, //通知道玩家单结算
    CS_ROOM_HOST_BEGIN_DESK_P: 148, //房主点开始游戏
    CS_MODE4_CONTINUE_P: 149, //循环赛继续比赛
    SC_MODE4_CONTINUE_P: 150,
    CS_GOLD_REQUEST_PLAYER_NUM_P: 151, //请求服务器人数
    SC_GOLD_REQUEST_PLAYER_NUM_P: 152,
    CS_GOLD_REQUSET_GAME_RULE_P: 153, //请求游戏规则
    SC_GOLD_REQUSET_GAME_RULE_P: 154,
    emRoomState_Wait: 0, //等待状态
    emRoomState_JSWait: 1, //大结算后的等待状态
    emRoomState_Game: 2, //游戏状态
    emRoomState_Delete: 3, //删除状态
    emRoomState_UnInit: 4, //还未初始化状态
    emRoomState_Creating: 5, //结算等待阶段的创建中（请求DB还未返回）
    emTurnState_Wait: 0, //等待状态				
    emTurnState_Game: 1, //游戏状态
    emTurnState_End: 2, //结束
    emRoomCostType_Host: 0, //房主付费
    emRoomCostType_Win: 1, //大赢家付费
    emRoomCostType_Agency: 2, //代开
    emRoomCostType_Match: 3, //比赛
    emRoomCostType_AA: 4, //AA收费
    emRoomCostType_Club: 5, //俱乐部
    emRoomCostType_End: 6,
    emRoomScene_None: 0, //无房间模式(老版本没有RoomScene的模式)
    emRoomScene_Default: 1, //大厅房间
    emRoomScene_Club: 2, //俱乐部房间
    emRoomChangeType_Update: 0, //更新
    emRoomChangeType_Create: 1, //创建
    emRoomChangeType_Del: 2, //删除
    emDismissType_Normal: 0, //普通解散
    emDismissType_Create: 1, //创建解散（继续游戏新开一轮）
    emDismissType_GameOver: 2, //大轮游戏结束解散
    emDismissType_emDismissOnTime: 3, //超时解散
    emDismissType_PlayerQuit: 4, //玩家退出解散
    emDismissType_HostOff: 5, //房主离线
    emDismissType_ForceByDeskCode: 6, //通过口令强制解散（服务器控制）
    emDismissType_ForceByPlayerID: 7, //通过PlayerID强制解散(服务器控制)
    emDismissType_DBReturn: 8, //DB回复解散成功后
    emDismissType_FailToCreate: 9, //创建房间失败
    emDismissType_NotFound1: 10, //异常解散1
    emDismissType_NotFound2: 11, //异常解散2
    emDismissType_ForceDel: 12, //异常强制解散
    emDismissType_ServerClose: 13, //Kill命令清除所有房间
    emDismissFail_Suc: 0, //成功
    emDismissFail_None: 1, //通用原因
    emDismissFail_Gaming: 2, //游戏中(代开房主解散)
    emAgreeType_None: 1,
    emAgreeType_Refuse: 0, //拒绝
    emAgreeType_Agree: 1, //同意
    emAgreeType_Hand: 2, //发起
    emAgreeType_Force: 3, //管理者发起的直接解散
    emPSFailReason_None: 0, //成功
    emPSFailReason_RoomCard: 1, //房卡不足
    emPSFailReason_HostRoomCard: 2, //房主房卡不足      
    emPSFailReason_HostLeave: 3, //房主离开
    emPSFailReason_Dismiss: 4, //房间被解散
    emPSFailReason_WaitDismiss: 5, //状态下的房主解散（踢人+弹窗）
    emPlayerState_UnPrepare: 0, //未准备					未开始游戏
    emPlayerState_Prepare: 1, //准备						未开始游戏	开始游戏
    emPlayerState_Game: 2, //游戏中								开始游戏
    emPlayerState_Leave: 3, //离线托管状态							开始游戏
    emPlayerState_ZanLi: 4, //暂时离开								开始游戏
    emGameType_Begin: 0, //开始
    emGameType_MaJiang: 1, //成都麻将
    emGameType_YBMaJiang: 2, //宜宾麻将
    emGameType_ComDouDiZhu: 3, //斗地主
    emGameType_NJMaJiang: 4, //内江麻将
    emGameType_YaoDiRen: 5, //幺地人
    emGameType_LuZhouMaJiang: 6, //泸州麻将
    emGameType_ZiGongMaJiang: 7, //自贡麻将
    emGameType_YiBinChangPai: 8, //宜宾长牌
    emGameType_LuZhouDaEr: 9, //泸州大贰
    emGameType_BaZhongMaJiang: 10, //巴中麻将
    emGameType_LiangShanMaJiang: 11, //凉山麻将
    emGameType_PuChengMaJiang: 12, //浦城麻将
    emGameType_MianYangMaJiang: 13, //绵阳麻将
    emGameType_LeShanMaJiang: 14, //乐山麻将
    emGameType_GuangDong100: 15, //广东100张
    emGameType_DeYangChangPai: 16, //中江长牌
    emGameType_GuangDongTuiDao: 17, //广东推倒胡
    emGameType_WZMaJiang: 18, //温州麻将
    emGameType_YWMaJiang: 19, //义乌麻将	
    emGameType_NiuNiu: 20, //牛牛类游戏
    emGameType_ZaoTong: 21, //昭通
    emGameType_ErQiShi: 22, //二七十
    emGameType_PaoDeKuai: 23, //跑得快
    emGameType_CheXuan: 24, //扯旋	
    emGameType_NCMaJiang: 25, //南昌麻将
    emGameType_ZhaJinHua: 26, //诈金花
    emGameType_ShuangKou: 27, //双扣
    emGameType_DeYangMaJiang: 28, //中江麻将
    emGameType_YaAnMaJiang: 29, //雅安麻将
    emGameType_ShiSanZhang: 30, //十三张
    emGameType_YiLiangMaJiang: 31, //彝良麻将
    emGameType_XingWenMaJiang: 32, //兴文麻将
    emGameType_JiangAnMaJiang: 33, //江安麻将
    emGameType_LaoYanCai: 34, //捞腌菜
    emGameType_QuJingMaJiangBB: 35, //曲靖白板麻将
    emGameType_QuJingMaJiangYJ: 36, //曲靖幺鸡麻将
    emGameType_End: 37,
    emGame_Begin: 0, //开始
    emGame_JinHua: 1, //炸金花
    emGame_MaJiang: 2, //麻将	
    emGame_YaoDiRen: 3, //幺地人
    emGame_DouDiZhu: 4, //听用斗地主
    emGame_NiuNiu: 5, //通比牛牛
    emGame_SaiMa: 6, //赛马
    emGame_DeZhouPuKe: 7, //德州扑克
    emGame_MaGu: 8, //麻古
    emGame_HuanSanZhang: 9, //换三张（万洲麻将)
    emGame_BuYu: 10, //捕鱼
    emGame_HuanLeWuZhang: 11, //欢乐五张
    emGame_XiaoBaiSha: 12, //小白鲨
    emGame_ChongQingNiuNiu: 13, //重庆牛牛
    emGame_MaJiangNiuNiu: 14, //拖儿八
    emGame_DaEr: 15, //大贰
    emGame_NeiJiangMaJiang: 16, //内江麻将	
    emGame_GuiZhouZhuoJiMJ: 17, //贵州捉鸡麻将
    emGame_CommDouDiZhu: 18, //标准斗地主
    emGame_BaiRenNiuNiu: 19, //百人牛牛
    emGame_BiaoZhunNiuNiu: 20, //标准牛牛
    emGame_ZhuYangDi: 21, //猪羊弟
    emGame_DaMaoXian: 22, //大冒险(小白鲨+上庄)
    emGame_BuYuDNTG: 23, //捕鱼（大闹天宫）
    emGame_YiBinMaJiang: 24, //宜宾麻将
    emGame_LuZhouMaJiang: 25, //泸州麻将
    emGame_ZiGongMaJiang: 26, //自贡麻将
    emGame_YBYaoDiRen: 27, //宜宾长牌
    emGame_YBYaoDiRen4P: 28, //4人宜宾长牌
    emGame_BaZhongMaJiang: 29, //巴中麻将
    emGame_HeJiangDaEr: 30, //合江大二
    emGame_XuYongDaEr: 31, //叙永大二
    emGame_GuLinDaEr: 32, //古蔺大二
    emGame_LiangShanMaJiang: 33, //凉山麻将
    emGame_NeiJiang3RenMaJiang: 34, //内江3人麻将
    emGame_YBDouDiZhu: 35, //宜宾斗地主
    emGame_PuChengMaJiang: 36, //浦城麻将
    emGame_DeYangYaoDiRen: 37, //中江长牌(拷拷)
    emGame_PuChengMaJiang2P: 38, //浦城2人麻将
    emGame_GuangDongMaJiang100: 39, //广东100 张麻将
    emGame_LeShanMaJiang: 40, //乐山麻将
    emGame_GuangDongMaJiang: 41, //广东推到胡
    emGame_DeYangYaoDiRen3P: 42, //中江长牌（3人无小家）(拷拷)
    emGame_MianYangMaJiang: 43, //绵阳麻将
    emGame_YiBinMaJiang3P: 44, //3人宜宾麻将
    emGame_MaJiang3P: 45, //3人成都麻将
    emGame_WZMaJiang: 46, //温洲麻将
    emGame_BaZhongMaJiang3P: 47, //3人巴中麻将
    emGame_YWMaJiang: 48, //义乌麻将
    emGame_LeShanMaJiang3P: 49, //乐山3人麻将
    emGame_NanChongMaJiang: 50, //南充麻将
    emGame_MianYangMaJiang3P: 51, //绵阳3人麻将
    emGame_ZaoTongMaJiang: 52, //昭通麻将
    emGame_ZaoTongMaJiang3P: 53, //昭通3人麻将
    emGame_NJDouDiZhu: 54, //内江斗地主
    emGame_ErQiShi: 55, //二七十
    emGame_NiuNiuShang: 56, //牛牛上庄
    emGame_NiuNiuQiang: 57, //抢庄牛牛
    emGame_NiuNiuFreeRob: 58, //自由抢庄牛牛
    emGame_ErQiShi4P: 59, //4人二七十
    emGame_LiangShanMaJiang3P: 60, //梁山3人麻将
    emGame_NiuNiuFix: 61, //房主当庄牛
    emGame_CheXuan: 62, //扯旋
    emGame_DaXiaGuMaJiang: 63, //大峡谷麻将
    emGame_DaXiaGuMaJiang3P: 64, //大峡谷3人麻将
    emGame_QianWeiErQiShi: 65, //犍为二七十
    emGame_QianWeiErQiShi4P: 66, //犍为4人二七十
    emGame_ErQiShi4P14Card: 67, //4人14张二七十
    emGame_ShanChengMaJiang: 68, //山城麻将
    emGame_ShanCheng3PMaJiang: 69, //山城3人麻将
    emGame_ShanChengDouDiZhu: 70, //山城斗地主
    emGame_DeYangMaJiang: 71, //中江麻将
    emGame_DeYangMaJiang3P: 72, //中江3人麻将
    emGame_WZMaJiang2P: 73, //温洲麻将2人
    emGame_PaoDeKuai: 74, //4人跑得快
    emGame_NanChangMaJiang: 75, //南昌麻将
    emGame_JinTangYaoDiRen: 76, //金堂硬拷拷(4P)
    emGame_JinTangYaoDiRen3P: 77, //金堂硬拷拷(3P)
    emGame_NanChangMaJiang2P: 78, //南昌2人麻将
    emGame_PaoDeKuaiChuanBei: 79, //川北跑得快
    emGame_ShuangKou: 80, //双扣
    emGame_YaAnMaJiang: 81, //雅安麻将
    emGame_ShiSanZhang: 82, //十三张
    emGame_YiLiangMaJiang: 83, //彝良麻将
    emGame_BaiRenNiuNiu50: 84, //50人的百人牛牛
    emGame_XingWenMaJiang: 85, //兴文麻将
    emGame_JiangAnMaJiang: 86, //江安麻将
    emGame_ShangRaoMaJiang: 87, //上饶麻将
    emGame_PaoDeKuaiYiBin: 88, //宜宾跑得快
    emGame_MeiShanErQiShi: 89, //眉山二七十
    emGame_LaoYanCai: 90, //捞腌菜
    emGame_QuJingBBMaJiang: 91, //曲靖白板麻将
    emGame_QuJingBBMaJiang3P: 92, //曲靖白板3人麻将
    emGame_QuJingXJMaJiang: 93, //曲靖小鸡麻将
    emGame_QuJingXJMaJiang3P: 94, //曲靖小鸡3人麻将
    emGame_ZJMaJiang: 95, //中江麻将
    emGame_ZJMaJiang3P: 96, //中江麻将3P
    emGame_End: 97,
    emDeskType_Fix: 0, //固定人数的配桌游戏
    emDeskType_Dynamic: 1, //动态人数(2-n)人游戏
    emDeskType_Hundred: 2, //百人游戏
    emSelectGame_Success: 0,
    emSelectGame_Invaild: 1, //emgame无效,没有此游戏
    emSelectGame_UnOpen: 2, //游戏未开启
    emSelectGame_Gameing: 3, //此时已经在一个游戏中
    emWatchResult_Success: 0,
    emWatchResult_CantWatch: 1, //房间设置不允许旁观
    emWatchResult_PswError: 2, //密码错误
    emWatchResult_NoPlayer: 3, //此座位没有玩家
    emHuanZhuoResult_Success: 0,
    emHuanZhuoResult_NoRoom: 1,
    emMode1Enter_Success: 0,
    emMode1Enter_ConditionFaild: 1, //不满足条件
    emMode2CreateRoomResult_Success: 0,
    emMode2CreateRoomResult_IDError: 1, //id错误
    emMode2CreateRoomResult_PswError: 2, //密码错误
    emMode2CreateRoomResult_NoMoney: 3, //自己钱不够
    emMode2CreateRoomResult_IndexError: 4, //索引错误
    emMode2CreateRoomResult_IndexFaild: 5, //此索引桌子已经被创建
    emMode2CreateRoomResult_NoEmpty: 6, //没用空桌子用于创建了
    emMode2CreateRoomResult_NameLong: 7, //房间名字过长
    emMode2CreateRoomResult_NameShort: 8, //房间名字过短
    emMode2CreateRoomResult_NameError: 9, //房间名字有非法字符
    emMode2CreateRoomResult_Vip: 10, //vip玩家才能创建房间
    emMode2CreateRoomResult_Init_Param: 11, //玩家的数据未社始化完成需等待
    emMode2CreateRoomResult_ParamError: 12, //房间参数错误
    emMode2CreateRoomResult_DeskCodeError: 13, //验证码错误
    emMode2CreateRoomResult_Max: 14, //超过可创建数量上限
    emMode2EnteRoomResult_Success: 0,
    emMode2EnteRoomResult_SeatError: 1, //座位号错误			点击座位
    emMode2EnteRoomResult_SeatHavePlayer: 2, //座位已经有玩家了		点击座位
    emMode2EnteRoomResult_NoEmptySeat: 3, //没有空余座位了		点击桌子
    emMode2EnteRoomResult_PswError: 4, //密码错误				点击座位,点击桌子
    emMode2EnteRoomResult_MoneyError: 5, //金钱不够				点击座位,点击桌子
    emMode2EnteRoomResult_NotCreate: 6, //房间还未被创建		点击座位,点击桌子
    emMode2EnteRoomResult_NoRoom: 7, //没有找到合适的房间	点击进入按钮
    emMode3Enter_Success: 0,
    emMode3Enter_ConditionFaild: 1, //不满足条件
    emMode3Enter_ConditionFaildNoVip: 2, //不满足条件-不是VIP
    emMode3Enter_ConditionFaildJinBi: 3, //不满足条件-金币不足
    emMode3Enter_ConditionFaildJiangQuan: 4, //不满足条件-奖券不足
    emMode3Enter_NotRightNow: 5, //还没到游戏时间
    emMode3Enter_ErrorIP: 6, //IP地址不是定制的IP
    emMode3Enter_MaxPerson: 7, //已经达到了玩家上线
    emMode3Enter_IsEnd: 8, //比赛已结束
    emMode3Enter_End_Clew_Time: 9, //在结束比赛提示时间段内
    emMode3Enter_Limit_JiFen_XiaXian: 10, //玩家的积分在比赛要求积分下限之下
    emMode3Enter_End_Rank_Time: 11, //玩家在排名等待时间段内
    emMode3Enter_GameStart: 12, //mode4人满开赛比赛已经开始
    eServerType_System: 0, //系统类别
    eServerType_Broadcast: 1, //主播类别
    eServerType_Vip: 2, //Vip才能创建的
    eServerType_HostBegin: 3, //房主触发开启游戏，到子游戏，房主叫开始后，所有准备-进入的玩家进以游戏者身份其它以占位观察者的身份到子游戏；在游戏中的玩家需准备-超时准备直到游戏结束
    eServerType_End: 4,
    emDeskMode_None: 0, //默认
    emDeskMode_LimitIP: 1, //相同IP不在一桌
    emDeskMode_LimitRound: 2, //限制局号
    emDeskMode_LimitIPAndRD: 3, //IP及局号一起限定
    emFunOpen_None: 0, //无
    emFunOpen_RoomIn: 1, //游戏开启是否可进入
    emFunOpen_CostType: 2, //房卡消费方式emRoomCostType除(emRoomCostType_Match)的配置
    emFunOpen_HostInCoin: 3, //房主进入底分,房主消耗完结束游戏
    emFunOpen_MinNumPlay: 4, //开桌人数限制0为手动开局,其它为满几人开局
    emFunOpen_DiFen: 5, //游戏开局底分，默认为1
    emFunOpen_End: 6,
    emMode4Type_None: 0, //普通
    emMode4Type_Always: 1, //常开模式(循环赛)
    Def_Mode1Room_Name_MinLength: 1, //模式2,名字最短字符
    Def_Mode1Room_Name_MaxLength: 20 //模式2,名字最长字符
};

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
        //# sourceMappingURL=F_Game.js.map
        