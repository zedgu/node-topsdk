
/**
 * TOP API: taobao.crm.group.update request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 分组的id
	 **/
	this.groupId;
	
	/** 
	 * 新的分组名，分组名称不能包含|或者：
	 **/
	this.newGroupName;
	
	this.apiParas = [];
};

request.prototype.setGroupId = function(groupId) {
	this.groupId = groupId;
	this.apiParas["group_id"] = groupId;
};

request.prototype.getGroupId = function() {
	return this.groupId;
};

request.prototype.setNewGroupName = function(newGroupName) {
	this.newGroupName = newGroupName;
	this.apiParas["new_group_name"] = newGroupName;
};

request.prototype.getNewGroupName = function() {
	return this.newGroupName;
};

request.prototype.getApiMethodName = function() {
	return "taobao.crm.group.update";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.groupId,"groupId");
	topApiCheck.checkMinValue(this.groupId,1,"groupId");
	topApiCheck.checkNotNull(this.newGroupName,"newGroupName");
	topApiCheck.checkMaxLength(this.newGroupName,15,"newGroupName");
};

