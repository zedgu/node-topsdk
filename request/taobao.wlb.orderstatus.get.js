
/**
 * TOP API: taobao.wlb.orderstatus.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 物流宝订单编码
	 **/
	this.orderCode;
	
	this.apiParas = [];
};

request.prototype.setOrderCode = function(orderCode) {
	this.orderCode = orderCode;
	this.apiParas["order_code"] = orderCode;
};

request.prototype.getOrderCode = function() {
	return this.orderCode;
};

request.prototype.getApiMethodName = function() {
	return "taobao.wlb.orderstatus.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.orderCode,"orderCode");
};

