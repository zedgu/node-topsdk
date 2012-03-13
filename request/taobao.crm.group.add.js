
/**
 * TOP API: taobao.crm.group.add request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 分组名称，每个卖家最多可以拥有100个分组
	 **/
	this.groupName;
	
	this.apiParas = [];
};

request.prototype.setGroupName = function(groupName) {
	this.groupName = groupName;
	this.apiParas["group_name"] = groupName;
};

request.prototype.getGroupName = function() {
	return this.groupName;
};

request.prototype.getApiMethodName = function() {
	return "taobao.crm.group.add";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.groupName,"groupName");
	topApiCheck.checkMaxLength(this.groupName,15,"groupName");
};

