
/**
 * TOP API: taobao.wlb.notify.message.page.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 查询条件：记录截至时间
	 **/
	this.endDate;
	
	/** 
	 * 通知消息编码：
STOCK_IN_NOT_CONSISTENT---入库单不一致
CANCEL_ORDER_SUCCESS---取消订单成功
INVENTORY_CHECK---盘点
CANCEL_ORDER_FAILURE---取消订单失败
ORDER_REJECT--wms拒单
ORDER_CONFIRMED--订单处理成功
	 **/
	this.msgCode;
	
	/** 
	 * 分页查询页数
	 **/
	this.pageNo;
	
	/** 
	 * 分页查询的每页页数
	 **/
	this.pageSize;
	
	/** 
	 * 查询条件：记录开始时间
	 **/
	this.startDate;
	
	/** 
	 * 消息状态：
不需要确认：NO_NEED_CONFIRM
已确认：CONFIRMED
待确认：TO_BE_CONFIRM
	 **/
	this.status;
	
	this.apiParas = [];
};

request.prototype.setEndDate = function(endDate) {
	this.endDate = endDate;
	this.apiParas["end_date"] = endDate;
};

request.prototype.getEndDate = function() {
	return this.endDate;
};

request.prototype.setMsgCode = function(msgCode) {
	this.msgCode = msgCode;
	this.apiParas["msg_code"] = msgCode;
};

request.prototype.getMsgCode = function() {
	return this.msgCode;
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

request.prototype.setStartDate = function(startDate) {
	this.startDate = startDate;
	this.apiParas["start_date"] = startDate;
};

request.prototype.getStartDate = function() {
	return this.startDate;
};

request.prototype.setStatus = function(status) {
	this.status = status;
	this.apiParas["status"] = status;
};

request.prototype.getStatus = function() {
	return this.status;
};

request.prototype.getApiMethodName = function() {
	return "taobao.wlb.notify.message.page.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
};

