
/**
 * TOP API: taobao.fenxiao.discount.add request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 折扣名称,长度不能超过25字节
	 **/
	this.discountName;
	
	/** 
	 * PERCENT（按折扣优惠）、PRICE（按减价优惠），例如"PERCENT,PRICE,PERCENT"
	 **/
	this.discountTypes;
	
	/** 
	 * 优惠比率或者优惠价格，例如：”8000,-2300,7000”,大小为-100000000到100000000之间（单位：分）
	 **/
	this.discountValues;
	
	/** 
	 * 会员等级的id或者分销商id，例如：”1001,2001,1002”
	 **/
	this.targetIds;
	
	/** 
	 * GRADE（按会员等级优惠）、DISTRIBUTOR（按分销商优惠），例如"GRADE,DISTRIBUTOR"
	 **/
	this.targetTypes;
	
	this.apiParas = [];
};

request.prototype.setDiscountName = function(discountName) {
	this.discountName = discountName;
	this.apiParas["discount_name"] = discountName;
};

request.prototype.getDiscountName = function() {
	return this.discountName;
};

request.prototype.setDiscountTypes = function(discountTypes) {
	this.discountTypes = discountTypes;
	this.apiParas["discount_types"] = discountTypes;
};

request.prototype.getDiscountTypes = function() {
	return this.discountTypes;
};

request.prototype.setDiscountValues = function(discountValues) {
	this.discountValues = discountValues;
	this.apiParas["discount_values"] = discountValues;
};

request.prototype.getDiscountValues = function() {
	return this.discountValues;
};

request.prototype.setTargetIds = function(targetIds) {
	this.targetIds = targetIds;
	this.apiParas["target_ids"] = targetIds;
};

request.prototype.getTargetIds = function() {
	return this.targetIds;
};

request.prototype.setTargetTypes = function(targetTypes) {
	this.targetTypes = targetTypes;
	this.apiParas["target_types"] = targetTypes;
};

request.prototype.getTargetTypes = function() {
	return this.targetTypes;
};

request.prototype.getApiMethodName = function() {
	return "taobao.fenxiao.discount.add";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.discountName,"discountName");
	topApiCheck.checkNotNull(this.discountTypes,"discountTypes");
	topApiCheck.checkNotNull(this.discountValues,"discountValues");
	topApiCheck.checkNotNull(this.targetIds,"targetIds");
	topApiCheck.checkNotNull(this.targetTypes,"targetTypes");
};

