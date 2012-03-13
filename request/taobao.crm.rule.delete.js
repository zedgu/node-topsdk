
/**
 * TOP API: taobao.crm.rule.delete request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 规则id
	 **/
	this.ruleId;
	
	this.apiParas = [];
};

request.prototype.setRuleId = function(ruleId) {
	this.ruleId = ruleId;
	this.apiParas["rule_id"] = ruleId;
};

request.prototype.getRuleId = function() {
	return this.ruleId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.crm.rule.delete";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.ruleId,"ruleId");
	topApiCheck.checkMinValue(this.ruleId,1,"ruleId");
};

