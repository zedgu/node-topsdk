
/**
 * TOP API: taobao.crm.group.append request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 添加的来源分组
	 **/
	this.fromGroupId;
	
	/** 
	 * 添加的目标分组
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
	return "taobao.crm.group.append";
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

