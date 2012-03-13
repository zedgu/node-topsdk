
/**
 * TOP API: taobao.promotion.limitdiscount.detail.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 限时打折ID。这个针对查询唯一限时打折情况。
	 **/
	this.limitDiscountId;
	
	this.apiParas = [];
};

request.prototype.setLimitDiscountId = function(limitDiscountId) {
	this.limitDiscountId = limitDiscountId;
	this.apiParas["limit_discount_id"] = limitDiscountId;
};

request.prototype.getLimitDiscountId = function() {
	return this.limitDiscountId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.promotion.limitdiscount.detail.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.limitDiscountId,"limitDiscountId");
};

