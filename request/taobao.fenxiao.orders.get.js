
/**
 * TOP API: taobao.fenxiao.orders.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 结束时间 格式 yyyy-MM-dd HH:mm:ss.支持到秒的查询。若不传时分秒，默认为0时0分0秒。若purchase_order_id没传，则此参数必传。
	 **/
	this.endCreated;
	
	/** 
	 * 页码。（大于0的整数。默认为1）
	 **/
	this.pageNo;
	
	/** 
	 * 每页条数。（每页条数不超过50条）
	 **/
	this.pageSize;
	
	/** 
	 * 采购单编号或分销流水号，若其它参数没传，则此参数必传。
	 **/
	this.purchaseOrderId;
	
	/** 
	 * 起始时间 格式 yyyy-MM-dd HH:mm:ss.支持到秒的查询。若不传时分秒，默认为0时0分0秒。若purchase_order_id没传，则此参数必传。
	 **/
	this.startCreated;
	
	/** 
	 * 交易状态，不传默认查询所有采购单。根据身份选择自身状态。可选值:<br>

 *供应商：<br>
WAIT_SELLER_SEND_GOODS(等待发货)<br>
WAIT_SELLER_CONFIRM_PAY(待确认收款)<br>
WAIT_BUYER_PAY(等待付款)<br>
WAIT_BUYER_CONFIRM_GOODS(已发货)<br>
TRADE_REFUNDING(退款中)<br>
TRADE_FINISHED(采购成功)<br>
TRADE_CLOSED(已关闭)。<br>
       *分销商：<br>
WAIT_BUYER_PAY(等待付款)<br>
WAIT_BUYER_CONFIRM_GOODS(待收货确认)<br>
TRADE_FOR_PAY(已付款)<br>
TRADE_REFUNDING(退款中)<br>
TRADE_FINISHED(采购成功)<br>
TRADE_CLOSED(已关闭)。
	 **/
	this.status;
	
	/** 
	 * 可选值：trade_time_type(采购单按照成交时间范围查询),update_time_type(采购单按照更新时间范围查询)
	 **/
	this.timeType;
	
	this.apiParas = [];
};

request.prototype.setEndCreated = function(endCreated) {
	this.endCreated = endCreated;
	this.apiParas["end_created"] = endCreated;
};

request.prototype.getEndCreated = function() {
	return this.endCreated;
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

request.prototype.setPurchaseOrderId = function(purchaseOrderId) {
	this.purchaseOrderId = purchaseOrderId;
	this.apiParas["purchase_order_id"] = purchaseOrderId;
};

request.prototype.getPurchaseOrderId = function() {
	return this.purchaseOrderId;
};

request.prototype.setStartCreated = function(startCreated) {
	this.startCreated = startCreated;
	this.apiParas["start_created"] = startCreated;
};

request.prototype.getStartCreated = function() {
	return this.startCreated;
};

request.prototype.setStatus = function(status) {
	this.status = status;
	this.apiParas["status"] = status;
};

request.prototype.getStatus = function() {
	return this.status;
};

request.prototype.setTimeType = function(timeType) {
	this.timeType = timeType;
	this.apiParas["time_type"] = timeType;
};

request.prototype.getTimeType = function() {
	return this.timeType;
};

request.prototype.getApiMethodName = function() {
	return "taobao.fenxiao.orders.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
};

