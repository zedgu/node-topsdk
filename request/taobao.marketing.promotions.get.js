
/**
 * TOP API: taobao.marketing.promotions.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 需返回的优惠策略结构字段列表。可选值为Promotion中所有字段，如：promotion_id, promotion_title, item_id, status, tag_id等等
	 **/
	this.fields;
	
	/** 
	 * 商品数字ID。根据该ID查询商品下通过第三方工具设置的所有优惠策略
	 **/
	this.numIid;
	
	/** 
	 * 优惠策略状态。可选值：ACTIVE(有效)，UNACTIVE(无效)，若不传或者传入其他值，则默认查询全部
	 **/
	this.status;
	
	/** 
	 * 标签ID
	 **/
	this.tagId;
	
	this.apiParas = [];
};

request.prototype.setFields = function(fields) {
	this.fields = fields;
	this.apiParas["fields"] = fields;
};

request.prototype.getFields = function() {
	return this.fields;
};

request.prototype.setNumIid = function(numIid) {
	this.numIid = numIid;
	this.apiParas["num_iid"] = numIid;
};

request.prototype.getNumIid = function() {
	return this.numIid;
};

request.prototype.setStatus = function(status) {
	this.status = status;
	this.apiParas["status"] = status;
};

request.prototype.getStatus = function() {
	return this.status;
};

request.prototype.setTagId = function(tagId) {
	this.tagId = tagId;
	this.apiParas["tag_id"] = tagId;
};

request.prototype.getTagId = function() {
	return this.tagId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.marketing.promotions.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.fields,"fields");
	topApiCheck.checkNotNull(this.numIid,"numIid");
};

