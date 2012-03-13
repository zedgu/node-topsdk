
/**
 * TOP API: taobao.fenxiao.cooperation.update request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 分销商ID
	 **/
	this.distributorId;
	
	/** 
	 * 等级ID(0代表取消)
	 **/
	this.gradeId;
	
	/** 
	 * 分销方式(新增)： AGENT(代销)、DEALER(经销)(默认为代销)
	 **/
	this.tradeType;
	
	this.apiParas = [];
};

request.prototype.setDistributorId = function(distributorId) {
	this.distributorId = distributorId;
	this.apiParas["distributor_id"] = distributorId;
};

request.prototype.getDistributorId = function() {
	return this.distributorId;
};

request.prototype.setGradeId = function(gradeId) {
	this.gradeId = gradeId;
	this.apiParas["grade_id"] = gradeId;
};

request.prototype.getGradeId = function() {
	return this.gradeId;
};

request.prototype.setTradeType = function(tradeType) {
	this.tradeType = tradeType;
	this.apiParas["trade_type"] = tradeType;
};

request.prototype.getTradeType = function() {
	return this.tradeType;
};

request.prototype.getApiMethodName = function() {
	return "taobao.fenxiao.cooperation.update";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.distributorId,"distributorId");
	topApiCheck.checkNotNull(this.gradeId,"gradeId");
};

