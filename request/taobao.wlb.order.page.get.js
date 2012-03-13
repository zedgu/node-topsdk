
/**
 * TOP API: taobao.wlb.order.page.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 查询截止时间
	 **/
	this.endTime;
	
	/** 
	 * 物流订单编号
	 **/
	this.orderCode;
	
	/** 
	 * 订单状态
	 **/
	this.orderStatus;
	
	/** 
	 * 订单子类型： 
（1）OTHER： 其他 
（2）TAOBAO_TRADE： 淘宝交易 
（3）OTHER_TRADE：其他交易
（4）ALLCOATE： 调拨
（5）CHECK:  盘点单
（6）PURCHASE: 采购单
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
	 * 分页的第几页
	 **/
	this.pageNo;
	
	/** 
	 * 每页多少条
	 **/
	this.pageSize;
	
	/** 
	 * 查询开始时间
	 **/
	this.startTime;
	
	this.apiParas = [];
};

request.prototype.setEndTime = function(endTime) {
	this.endTime = endTime;
	this.apiParas["end_time"] = endTime;
};

request.prototype.getEndTime = function() {
	return this.endTime;
};

request.prototype.setOrderCode = function(orderCode) {
	this.orderCode = orderCode;
	this.apiParas["order_code"] = orderCode;
};

request.prototype.getOrderCode = function() {
	return this.orderCode;
};

request.prototype.setOrderStatus = function(orderStatus) {
	this.orderStatus = orderStatus;
	this.apiParas["order_status"] = orderStatus;
};

request.prototype.getOrderStatus = function() {
	return this.orderStatus;
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

request.prototype.setPageNo = function(pageNo) {
	this.pageNo = pageNo;
	this.apiParas["page_no"] = pageNo;
};

request.prototype.getPageNo = function() {
	return this.pageNo;
};

request.prototype.setPageSize = function(pageSize) {
	this.pageSize = pageSize;
	this.apiParas["page_size"] = pageSize;
};

request.prototype.getPageSize = function() {
	return this.pageSize;
};

request.prototype.setStartTime = function(startTime) {
	this.startTime = startTime;
	this.apiParas["start_time"] = startTime;
};

request.prototype.getStartTime = function() {
	return this.startTime;
};

request.prototype.getApiMethodName = function() {
	return "taobao.wlb.order.page.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
};

