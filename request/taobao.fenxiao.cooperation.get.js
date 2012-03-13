
/**
 * TOP API: taobao.fenxiao.cooperation.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 合作结束时间yyyy-MM-dd
	 **/
	this.endDate;
	
	/** 
	 * 页码（大于0的整数，默认1）
	 **/
	this.pageNo;
	
	/** 
	 * 每页记录数（默认20，最大50）
	 **/
	this.pageSize;
	
	/** 
	 * 合作开始时间yyyy-MM-dd
	 **/
	this.startDate;
	
	/** 
	 * 合作状态： NORMAL(合作中)、 ENDING(终止中) 、END (终止)
	 **/
	this.status;
	
	/** 
	 * 分销方式：AGENT(代销) 、DEALER（经销）
	 **/
	this.tradeType;
	
	this.apiParas = [];
};

request.prototype.setEndDate = function(endDate) {
	this.endDate = endDate;
	this.apiParas["end_date"] = endDate;
};

request.prototype.getEndDate = function() {
	return this.endDate;
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

request.prototype.setTradeType = function(tradeType) {
	this.tradeType = tradeType;
	this.apiParas["trade_type"] = tradeType;
};

request.prototype.getTradeType = function() {
	return this.tradeType;
};

request.prototype.getApiMethodName = function() {
	return "taobao.fenxiao.cooperation.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
};

