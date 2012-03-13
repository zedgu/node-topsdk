
/**
 * TOP API: taobao.crm.group.delete request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 要删除的分组id
	 **/
	this.groupId;
	
	this.apiParas = [];
};

request.prototype.setGroupId = function(groupId) {
	this.groupId = groupId;
	this.apiParas["group_id"] = groupId;
};

request.prototype.getGroupId = function() {
	return this.groupId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.crm.group.delete";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.groupId,"groupId");
	topApiCheck.checkMinValue(this.groupId,1,"groupId");
};

