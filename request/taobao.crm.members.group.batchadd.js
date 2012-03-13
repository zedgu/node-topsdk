
/**
 * TOP API: taobao.crm.members.group.batchadd request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 会员的id（一次最多传入10个）
	 **/
	this.buyerIds;
	
	/** 
	 * 分组id
	 **/
	this.groupIds;
	
	this.apiParas = [];
};

request.prototype.setBuyerIds = function(buyerIds) {
	this.buyerIds = buyerIds;
	this.apiParas["buyer_ids"] = buyerIds;
};

request.prototype.getBuyerIds = function() {
	return this.buyerIds;
};

request.prototype.setGroupIds = function(groupIds) {
	this.groupIds = groupIds;
	this.apiParas["group_ids"] = groupIds;
};

request.prototype.getGroupIds = function() {
	return this.groupIds;
};

request.prototype.getApiMethodName = function() {
	return "taobao.crm.members.group.batchadd";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.buyerIds,"buyerIds");
	topApiCheck.checkMaxListSize(this.buyerIds,10,"buyerIds");
	topApiCheck.checkNotNull(this.groupIds,"groupIds");
	topApiCheck.checkMaxListSize(this.groupIds,10,"groupIds");
};

