
/**
 * TOP API: taobao.wlb.item.consignment.create request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 商品id
	 **/
	this.itemId;
	
	/** 
	 * 代销数量
	 **/
	this.number;
	
	/** 
	 * 货主商品id
	 **/
	this.ownerItemId;
	
	/** 
	 * 货主id
	 **/
	this.ownerUserId;
	
	/** 
	 * 通过taobao.wlb.item.authorization.add接口创建后得到的rule_id，规则中设定了代销商可以代销的商品数量
	 **/
	this.ruleId;
	
	this.apiParas = [];
};

request.prototype.setItemId = function(itemId) {
	this.itemId = itemId;
	this.apiParas["item_id"] = itemId;
};

request.prototype.getItemId = function() {
	return this.itemId;
};

request.prototype.setNumber = function(number) {
	this.number = number;
	this.apiParas["number"] = number;
};

request.prototype.getNumber = function() {
	return this.number;
};

request.prototype.setOwnerItemId = function(ownerItemId) {
	this.ownerItemId = ownerItemId;
	this.apiParas["owner_item_id"] = ownerItemId;
};

request.prototype.getOwnerItemId = function() {
	return this.ownerItemId;
};

request.prototype.setOwnerUserId = function(ownerUserId) {
	this.ownerUserId = ownerUserId;
	this.apiParas["owner_user_id"] = ownerUserId;
};

request.prototype.getOwnerUserId = function() {
	return this.ownerUserId;
};

request.prototype.setRuleId = function(ruleId) {
	this.ruleId = ruleId;
	this.apiParas["rule_id"] = ruleId;
};

request.prototype.getRuleId = function() {
	return this.ruleId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.wlb.item.consignment.create";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.itemId,"itemId");
	topApiCheck.checkNotNull(this.number,"number");
	topApiCheck.checkNotNull(this.ownerItemId,"ownerItemId");
	topApiCheck.checkNotNull(this.ownerUserId,"ownerUserId");
	topApiCheck.checkNotNull(this.ruleId,"ruleId");
};

