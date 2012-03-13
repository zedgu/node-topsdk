
/**
 * TOP API: taobao.taohua.orders.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 默认为当前时间， 日期格式精确到天数
	 **/
	this.endDate;
	
	/** 
	 * 分页获取订单列表信息，page_no代表的是第几页
	 **/
	this.pageNo;
	
	/** 
	 * 分页获取订单列表信息，page_size代表每页显示多少条。  注意：每页显示条数。最小5条，最多30条，凡是超出范围的条数，都会被默认为10条。
	 **/
	this.pageSize;
	
	/** 
	 * 系统默认为：当前时间-90天。  日期精确到日
	 **/
	this.startDate;
	
	/** 
	 * 查询的交易状态：
1.	全部 all
2.	等待买家付款 wait_pay
3.	交易成功 trade_suc
4.	交易关闭 trade_close
	 **/
	this.tradeStatus;
	
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

request.prototype.setTradeStatus = function(tradeStatus) {
	this.tradeStatus = tradeStatus;
	this.apiParas["trade_status"] = tradeStatus;
};

request.prototype.getTradeStatus = function() {
	return this.tradeStatus;
};

request.prototype.getApiMethodName = function() {
	return "taobao.taohua.orders.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkMaxValue(this.pageSize,30,"pageSize");
	topApiCheck.checkMinValue(this.pageSize,5,"pageSize");
};

