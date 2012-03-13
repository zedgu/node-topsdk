
/**
 * TOP API: taobao.wlb.wlborder.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 物流宝订单编码
	 **/
	this.wlbOrderCode;
	
	this.apiParas = [];
};

request.prototype.setWlbOrderCode = function(wlbOrderCode) {
	this.wlbOrderCode = wlbOrderCode;
	this.apiParas["wlb_order_code"] = wlbOrderCode;
};

request.prototype.getWlbOrderCode = function() {
	return this.wlbOrderCode;
};

request.prototype.getApiMethodName = function() {
	return "taobao.wlb.wlborder.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.wlbOrderCode,"wlbOrderCode");
};

