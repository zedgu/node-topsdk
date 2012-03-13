
/**
 * TOP API: taobao.fenxiao.discounts.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 折扣ID
	 **/
	this.discountId;
	
	/** 
	 * 指定查询额外的信息，可选值：DETAIL（查询折扣详情），多个可选值用逗号分割。（只允许指定折扣ID情况下使用）
	 **/
	this.extFields;
	
	this.apiParas = [];
};

request.prototype.setDiscountId = function(discountId) {
	this.discountId = discountId;
	this.apiParas["discount_id"] = discountId;
};

request.prototype.getDiscountId = function() {
	return this.discountId;
};

request.prototype.setExtFields = function(extFields) {
	this.extFields = extFields;
	this.apiParas["ext_fields"] = extFields;
};

request.prototype.getExtFields = function() {
	return this.extFields;
};

request.prototype.getApiMethodName = function() {
	return "taobao.fenxiao.discounts.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
};

