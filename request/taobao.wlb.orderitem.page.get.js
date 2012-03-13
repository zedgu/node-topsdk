
/**
 * TOP API: taobao.wlb.orderitem.page.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 物流宝订单编码
	 **/
	this.orderCode;
	
	/** 
	 * 分页查询参数，指定查询页数，默认为1
	 **/
	this.pageNo;
	
	/** 
	 * 分页查询参数，每页查询数量，默认20，最大值50,大于50时按照50条查询
	 **/
	this.pageSize;
	
	this.apiParas = [];
};

request.prototype.setOrderCode = function(orderCode) {
	this.orderCode = orderCode;
	this.apiParas["order_code"] = orderCode;
};

request.prototype.getOrderCode = function() {
	return this.orderCode;
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

request.prototype.getApiMethodName = function() {
	return "taobao.wlb.orderitem.page.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.orderCode,"orderCode");
};

