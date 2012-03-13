
/**
 * TOP API: taobao.wlb.item.consignment.delete request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 代销商前台宝贝ID
	 **/
	this.icItemId;
	
	/** 
	 * 货主的物流宝商品ID
	 **/
	this.ownerItemId;
	
	/** 
	 * 授权关系id
	 **/
	this.ruleId;
	
	this.apiParas = [];
};

request.prototype.setIcItemId = function(icItemId) {
	this.icItemId = icItemId;
	this.apiParas["ic_item_id"] = icItemId;
};

request.prototype.getIcItemId = function() {
	return this.icItemId;
};

request.prototype.setOwnerItemId = function(ownerItemId) {
	this.ownerItemId = ownerItemId;
	this.apiParas["owner_item_id"] = ownerItemId;
};

request.prototype.getOwnerItemId = function() {
	return this.ownerItemId;
};

request.prototype.setRuleId = function(ruleId) {
	this.ruleId = ruleId;
	this.apiParas["rule_id"] = ruleId;
};

request.prototype.getRuleId = function() {
	return this.ruleId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.wlb.item.consignment.delete";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.icItemId,"icItemId");
	topApiCheck.checkNotNull(this.ownerItemId,"ownerItemId");
	topApiCheck.checkNotNull(this.ruleId,"ruleId");
};

