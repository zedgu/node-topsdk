
/**
 * TOP API: taobao.marketing.promotion.kfc request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 活动描述
	 **/
	this.promotionDesc;
	
	/** 
	 * 活动名称
	 **/
	this.promotionTitle;
	
	this.apiParas = [];
};

request.prototype.setPromotionDesc = function(promotionDesc) {
	this.promotionDesc = promotionDesc;
	this.apiParas["promotion_desc"] = promotionDesc;
};

request.prototype.getPromotionDesc = function() {
	return this.promotionDesc;
};

request.prototype.setPromotionTitle = function(promotionTitle) {
	this.promotionTitle = promotionTitle;
	this.apiParas["promotion_title"] = promotionTitle;
};

request.prototype.getPromotionTitle = function() {
	return this.promotionTitle;
};

request.prototype.getApiMethodName = function() {
	return "taobao.marketing.promotion.kfc";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.promotionDesc,"promotionDesc");
	topApiCheck.checkNotNull(this.promotionTitle,"promotionTitle");
};

