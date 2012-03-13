
/**
 * TOP API: taobao.crm.group.move request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 需要移动的分组
	 **/
	this.fromGroupId;
	
	/** 
	 * 目的分组
	 **/
	this.toGroupId;
	
	this.apiParas = [];
};

request.prototype.setFromGroupId = function(fromGroupId) {
	this.fromGroupId = fromGroupId;
	this.apiParas["from_group_id"] = fromGroupId;
};

request.prototype.getFromGroupId = function() {
	return this.fromGroupId;
};

request.prototype.setToGroupId = function(toGroupId) {
	this.toGroupId = toGroupId;
	this.apiParas["to_group_id"] = toGroupId;
};

request.prototype.getToGroupId = function() {
	return this.toGroupId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.crm.group.move";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.fromGroupId,"fromGroupId");
	topApiCheck.checkMinValue(this.fromGroupId,1,"fromGroupId");
	topApiCheck.checkNotNull(this.toGroupId,"toGroupId");
	topApiCheck.checkMinValue(this.toGroupId,1,"toGroupId");
};

