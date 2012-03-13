
/**
 * TOP API: taobao.wlb.order.create request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 支付宝交易号
	 **/
	this.alipayNo;
	
	/** 
	 * 该字段暂时保留
	 **/
	this.attributes;
	
	/** 
	 * 买家呢称
	 **/
	this.buyerNick;
	
	/** 
	 * 期望结束时间，在入库单会使用到
	 **/
	this.expectEndTime;
	
	/** 
	 * 计划开始送达时间  在入库单中可能会使用
	 **/
	this.expectStartTime;
	
	/** 
	 *  {"invoince_info": [ {"bill_type":"发票类型，必选", "bill_title":"发票抬头，必选", "bill_amount":"发票金额(单位是分)，必选","bill_content":"发票内容，可选"}]}
	 **/
	this.invoinceInfo;
	
	/** 
	 * 该物流宝订单是否已完成，如果完成则设置为true，如果为false，则需要等待继续创建订单商品信息。
	 **/
	this.isFinished;
	
	/** 
	 * 物流宝订单编号，该接口约定每次最多只能传50条order_item_list，如果一个物流宝订单超过50条商品的时候，需要批量来调用该接口，第一次调用的时候，wlb_order_code为空，如果第一次创建成功，该接口返回wlb_order_code，其后继续再该订单上添加商品条目，需要带上wlb_order_code，out_biz_code，order_item_list,is_finished四个字段。
	 **/
	this.orderCode;
	
	/** 
	 * 用字符串格式来表示订单标记列表：比如COD^PRESELL^SPLIT^LIMIT 等，中间用“^”来隔开 ---------------------------------------- 订单标记list（所有字母全部大写）： 1: COD –货到付款 2: LIMIT-限时配送 3: PRESELL-预售 5:COMPLAIN-已投诉 7:SPLIT-拆单， 8:EXCHANGE-换货， 9:VISIT-上门 ， 10: MODIFYTRANSPORT-是否可改配送方式，
: 是否可改配送方式  默认可更改
11 CONSIGN 物流宝代理发货,自动更改发货状态
12: SELLER_AFFORD 是否卖家承担运费 默认是，即没 13: SYNC_RETURN_BILL，同时退回发票
	 **/
	this.orderFlag;
	
	/** 
	 * 订单商品列表：  {"order_item_list":[ {"trade_code":"可选,淘宝交易订单，并且不是赠品，必须要传订单来源编号"," sub_trade_code ":"可选,淘宝子交易号","item_id":"必须,商品Id","item_code":"必须,商家编码","item_name":"可选,物流宝商品名称","item_quantity":"必选,计划数量","item_price":"必选,物品价格,单位为分","owner_user_nick
":"可选,货主nick 代销模式下会存在","flag":"判断是否为赠品0 不是1是","remarks":"可选,备注","batch_remark":"可选，批次描述信息会把这个信息带给WMS，但不会跟物流宝库存相关联"，"inventory_type":"库存类型1 可销售库存 101 类型用来定义残次品 201 冻结类型库存 301 在途库存","picture_url":"图片Url","distributor_user_nick": "分销商NICK","ext_order_item_code":"可选，外部商品的商家编码"]} ======================================== 如果订单中的商品条目数大于50条的时候，我们会校验，不能创建成功，需要你按照50个一批的数量传，需要分批调用该接口，第二次传的时候，需要带上wlb_order_code和is_finished和order_item_list三个字段是必传的，is_finished为true表示传输完毕，为false表示还没完全传完。
	 **/
	this.orderItemList;
	
	/** 
	 * 订单子类型：
（1）OTHER： 其他
（2）TAOBAO_TRADE： 淘宝交易
（3）OTHER_TRADE：其他交易
（4）ALLCOATE： 调拨
（5）PURCHASE:采购
	 **/
	this.orderSubType;
	
	/** 
	 * 订单类型:
（1）NORMAL_OUT ：正常出库
（2）NORMAL_IN：正常入库
（3）RETURN_IN：退货入库
（4）EXCHANGE_OUT：换货出库
	 **/
	this.orderType;
	
	/** 
	 * 外部订单业务ID，该编号在isv中是唯一编号， 用来控制并发，去重用
	 **/
	this.outBizCode;
	
	/** 
	 * 包裹件数，入库单和出库单中会用到
	 **/
	this.packageCount;
	
	/** 
	 * 应收金额，cod订单必选
	 **/
	this.payableAmount;
	
	/** 
	 * 源订单编号
	 **/
	this.prevOrderCode;
	
	/** 
	 * 发收方发货方信息必须传 手机和电话必选其一
收货方信息
邮编^^^省^^^市^^^区^^^具体地址^^^收件方名称^^^手机^^^电话

如果某一个字段的数据为空时，必须传NA
	 **/
	this.receiverInfo;
	
	/** 
	 * 备注
	 **/
	this.remark;
	
	/** 
	 * 投递时间范围要求,格式'15:20'用分号隔开
	 **/
	this.scheduleEnd;
	
	/** 
	 * 投递时间范围要求,格式'13:20'用分号隔开
	 **/
	this.scheduleStart;
	
	/** 
	 * 投递时延要求: 
（1）INSTANT_ARRIVED： 当日达 
（2）TOMMORROY_MORNING_ARRIVED：次晨达
（3）TOMMORROY_ARRIVED：次日达
（4）工作日：WORK_DAY 
（5）节假日：WEEKED_DAY
	 **/
	this.scheduleType;
	
	/** 
	 * 发货方信息，发收方发货方信息必须传 手机和电话必选其一
邮编^^^省^^^市^^^区^^^具体地址^^^收件方名称^^^手机^^^电话
如果某一个字段的数据为空时，必须传NA
	 **/
	this.senderInfo;
	
	/** 
	 * cod服务费，只有cod订单的时候，才需要这个字段
	 **/
	this.serviceFee;
	
	/** 
	 * 仓库编码
	 **/
	this.storeCode;
	
	/** 
	 * 出库单中可能会用到
运输公司名称^^^运输公司联系人^^^运输公司运单号^^^运输公司电话^^^运输公司联系人身份证号

========================================
如果某一个字段的数据为空时，必须传NA
	 **/
	this.tmsInfo;
	
	/** 
	 * 运单编号，退货单时可能会使用
	 **/
	this.tmsOrderCode;
	
	/** 
	 * 物流公司编码
	 **/
	this.tmsServiceCode;
	
	/** 
	 * 总金额
	 **/
	this.totalAmount;
	
	this.apiParas = [];
};

request.prototype.setAlipayNo = function(alipayNo) {
	this.alipayNo = alipayNo;
	this.apiParas["alipay_no"] = alipayNo;
};

request.prototype.getAlipayNo = function() {
	return this.alipayNo;
};

request.prototype.setAttributes = function(attributes) {
	this.attributes = attributes;
	this.apiParas["attributes"] = attributes;
};

request.prototype.getAttributes = function() {
	return this.attributes;
};

request.prototype.setBuyerNick = function(buyerNick) {
	this.buyerNick = buyerNick;
	this.apiParas["buyer_nick"] = buyerNick;
};

request.prototype.getBuyerNick = function() {
	return this.buyerNick;
};

request.prototype.setExpectEndTime = function(expectEndTime) {
	this.expectEndTime = expectEndTime;
	this.apiParas["expect_end_time"] = expectEndTime;
};

request.prototype.getExpectEndTime = function() {
	return this.expectEndTime;
};

request.prototype.setExpectStartTime = function(expectStartTime) {
	this.expectStartTime = expectStartTime;
	this.apiParas["expect_start_time"] = expectStartTime;
};

request.prototype.getExpectStartTime = function() {
	return this.expectStartTime;
};

request.prototype.setInvoinceInfo = function(invoinceInfo) {
	this.invoinceInfo = invoinceInfo;
	this.apiParas["invoince_info"] = invoinceInfo;
};

request.prototype.getInvoinceInfo = function() {
	return this.invoinceInfo;
};

request.prototype.setIsFinished = function(isFinished) {
	this.isFinished = isFinished;
	this.apiParas["is_finished"] = isFinished;
};

request.prototype.getIsFinished = function() {
	return this.isFinished;
};

request.prototype.setOrderCode = function(orderCode) {
	this.orderCode = orderCode;
	this.apiParas["order_code"] = orderCode;
};

request.prototype.getOrderCode = function() {
	return this.orderCode;
};

request.prototype.setOrderFlag = function(orderFlag) {
	this.orderFlag = orderFlag;
	this.apiParas["order_flag"] = orderFlag;
};

request.prototype.getOrderFlag = function() {
	return this.orderFlag;
};

request.prototype.setOrderItemList = function(orderItemList) {
	this.orderItemList = orderItemList;
	this.apiParas["order_item_list"] = orderItemList;
};

request.prototype.getOrderItemList = function() {
	return this.orderItemList;
};

request.prototype.setOrderSubType = function(orderSubType) {
	this.orderSubType = orderSubType;
	this.apiParas["order_sub_type"] = orderSubType;
};

request.prototype.getOrderSubType = function() {
	return this.orderSubType;
};

request.prototype.setOrderType = function(orderType) {
	this.orderType = orderType;
	this.apiParas["order_type"] = orderType;
};

request.prototype.getOrderType = function() {
	return this.orderType;
};

request.prototype.setOutBizCode = function(outBizCode) {
	this.outBizCode = outBizCode;
	this.apiParas["out_biz_code"] = outBizCode;
};

request.prototype.getOutBizCode = function() {
	return this.outBizCode;
};

request.prototype.setPackageCount = function(packageCount) {
	this.packageCount = packageCount;
	this.apiParas["package_count"] = packageCount;
};

request.prototype.getPackageCount = function() {
	return this.packageCount;
};

request.prototype.setPayableAmount = function(payableAmount) {
	this.payableAmount = payableAmount;
	this.apiParas["payable_amount"] = payableAmount;
};

request.prototype.getPayableAmount = function() {
	return this.payableAmount;
};

request.prototype.setPrevOrderCode = function(prevOrderCode) {
	this.prevOrderCode = prevOrderCode;
	this.apiParas["prev_order_code"] = prevOrderCode;
};

request.prototype.getPrevOrderCode = function() {
	return this.prevOrderCode;
};

request.prototype.setReceiverInfo = function(receiverInfo) {
	this.receiverInfo = receiverInfo;
	this.apiParas["receiver_info"] = receiverInfo;
};

request.prototype.getReceiverInfo = function() {
	return this.receiverInfo;
};

request.prototype.setRemark = function(remark) {
	this.remark = remark;
	this.apiParas["remark"] = remark;
};

request.prototype.getRemark = function() {
	return this.remark;
};

request.prototype.setScheduleEnd = function(scheduleEnd) {
	this.scheduleEnd = scheduleEnd;
	this.apiParas["schedule_end"] = scheduleEnd;
};

request.prototype.getScheduleEnd = function() {
	return this.scheduleEnd;
};

request.prototype.setScheduleStart = function(scheduleStart) {
	this.scheduleStart = scheduleStart;
	this.apiParas["schedule_start"] = scheduleStart;
};

request.prototype.getScheduleStart = function() {
	return this.scheduleStart;
};

request.prototype.setScheduleType = function(scheduleType) {
	this.scheduleType = scheduleType;
	this.apiParas["schedule_type"] = scheduleType;
};

request.prototype.getScheduleType = function() {
	return this.scheduleType;
};

request.prototype.setSenderInfo = function(senderInfo) {
	this.senderInfo = senderInfo;
	this.apiParas["sender_info"] = senderInfo;
};

request.prototype.getSenderInfo = function() {
	return this.senderInfo;
};

request.prototype.setServiceFee = function(serviceFee) {
	this.serviceFee = serviceFee;
	this.apiParas["service_fee"] = serviceFee;
};

request.prototype.getServiceFee = function() {
	return this.serviceFee;
};

request.prototype.setStoreCode = function(storeCode) {
	this.storeCode = storeCode;
	this.apiParas["store_code"] = storeCode;
};

request.prototype.getStoreCode = function() {
	return this.storeCode;
};

request.prototype.setTmsInfo = function(tmsInfo) {
	this.tmsInfo = tmsInfo;
	this.apiParas["tms_info"] = tmsInfo;
};

request.prototype.getTmsInfo = function() {
	return this.tmsInfo;
};

request.prototype.setTmsOrderCode = function(tmsOrderCode) {
	this.tmsOrderCode = tmsOrderCode;
	this.apiParas["tms_order_code"] = tmsOrderCode;
};

request.prototype.getTmsOrderCode = function() {
	return this.tmsOrderCode;
};

request.prototype.setTmsServiceCode = function(tmsServiceCode) {
	this.tmsServiceCode = tmsServiceCode;
	this.apiParas["tms_service_code"] = tmsServiceCode;
};

request.prototype.getTmsServiceCode = function() {
	return this.tmsServiceCode;
};

request.prototype.setTotalAmount = function(totalAmount) {
	this.totalAmount = totalAmount;
	this.apiParas["total_amount"] = totalAmount;
};

request.prototype.getTotalAmount = function() {
	return this.totalAmount;
};

request.prototype.getApiMethodName = function() {
	return "taobao.wlb.order.create";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkMaxLength(this.buyerNick,64,"buyerNick");
	topApiCheck.checkNotNull(this.isFinished,"isFinished");
	topApiCheck.checkNotNull(this.orderItemList,"orderItemList");
	topApiCheck.checkNotNull(this.orderSubType,"orderSubType");
	topApiCheck.checkNotNull(this.orderType,"orderType");
	topApiCheck.checkNotNull(this.outBizCode,"outBizCode");
	topApiCheck.checkMaxLength(this.outBizCode,128,"outBizCode");
	topApiCheck.checkMaxLength(this.remark,4000,"remark");
	topApiCheck.checkNotNull(this.storeCode,"storeCode");
	topApiCheck.checkMaxLength(this.storeCode,64,"storeCode");
	topApiCheck.checkMaxLength(this.tmsServiceCode,64,"tmsServiceCode");
};

