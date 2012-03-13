
/**
 * TOP API: taobao.crm.rule.group.set request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 需要添加到规则的分组
	 **/
	this.addGroups;
	
	/** 
	 * 需要删除的分组
	 **/
	this.deleteGroups;
	
	/** 
	 * 规则id
	 **/
	this.ruleId;
	
	this.apiParas = [];
};

request.prototype.setAddGroups = function(addGroups) {
	this.addGroups = addGroups;
	this.apiParas["add_groups"] = addGroups;
};

request.prototype.getAddGroups = function() {
	return this.addGroups;
};

request.prototype.setDeleteGroups = function(deleteGroups) {
	this.deleteGroups = deleteGroups;
	this.apiParas["delete_groups"] = deleteGroups;
};

request.prototype.getDeleteGroups = function() {
	return this.deleteGroups;
};

request.prototype.setRuleId = function(ruleId) {
	this.ruleId = ruleId;
	this.apiParas["rule_id"] = ruleId;
};

request.prototype.getRuleId = function() {
	return this.ruleId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.crm.rule.group.set";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkMaxListSize(this.addGroups,10,"addGroups");
	topApiCheck.checkMaxListSize(this.deleteGroups,10,"deleteGroups");
	topApiCheck.checkNotNull(this.ruleId,"ruleId");
	topApiCheck.checkMinValue(this.ruleId,1,"ruleId");
};

