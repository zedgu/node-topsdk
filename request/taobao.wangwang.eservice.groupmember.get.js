
/**
 * TOP API: taobao.wangwang.eservice.groupmember.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 被查询用户组管理员ID：cntaobao+淘宝nick，例如cntaobaotest
	 **/
	this.managerId;
	
	this.apiParas = [];
};

request.prototype.setManagerId = function(managerId) {
	this.managerId = managerId;
	this.apiParas["manager_id"] = managerId;
};

request.prototype.getManagerId = function() {
	return this.managerId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.wangwang.eservice.groupmember.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.managerId,"managerId");
	topApiCheck.checkMaxLength(this.managerId,128,"managerId");
};

