
/**
 * TOP API: taobao.crm.rule.add request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 会员等级，可选值为：1,2,3,4
	 **/
	this.grade;
	
	/** 
	 * 规则应用分组集合，若分组上有任务，则该分组不能挂到该规则下
	 **/
	this.groupIds;
	
	/** 
	 * 最大平均客单价，单位为元
	 **/
	this.maxAvgPrice;
	
	/** 
	 * 最大交易关闭数
	 **/
	this.maxCloseTradeNum;
	
	/** 
	 * 最大宝贝件数
	 **/
	this.maxItemNum;
	
	/** 
	 * 最迟交易时间
	 **/
	this.maxLastTradeTime;
	
	/** 
	 * 最大交易金额，单位为元
	 **/
	this.maxTradeAmount;
	
	/** 
	 * 最大交易数
	 **/
	this.maxTradeCount;
	
	/** 
	 * 最小平均客单价，单位元
	 **/
	this.minAvgPrice;
	
	/** 
	 * 最少交易关闭数
	 **/
	this.minCloseTradeNum;
	
	/** 
	 * 最少宝贝件数
	 **/
	this.minItemNum;
	
	/** 
	 * 最早交易日期
必须为早于今天的某个时间，例如今天是2011-11-11，那么必须填写2011-11-10或者早于此日期的时间
	 **/
	this.minLastTradeTime;
	
	/** 
	 * 最小交易金额,单位元。
	 **/
	this.minTradeAmount;
	
	/** 
	 * 最小交易次数
	 **/
	this.minTradeCount;
	
	/** 
	 * 北京=1,天津=2,河北省=3,山西省=4,内蒙古自治区=5,辽宁省=6,吉林省=7,黑龙江省=8,上海=9,江苏省=10,浙江省=11,安徽省=12,福建省=13,江西省=14,山东省=15,河南省=16,湖北省=17,湖南省=18, 广东省=19,广西壮族自治区=20,海南省=21,重庆=22,四川省=23,贵州省=24,云南省=25,西藏自治区26,陕西省=27,甘肃省=28,青海省=29,宁夏回族自治区=30,新疆维吾尔自治区=31,台湾省=32,香港特别行政区=33,澳门特别行政区=34,海外=35
	 **/
	this.province;
	
	/** 
	 * 客户关系来源,可选值为:1,2
	 **/
	this.relationSource;
	
	/** 
	 * 规则名称
	 **/
	this.ruleName;
	
	this.apiParas = [];
};

request.prototype.setGrade = function(grade) {
	this.grade = grade;
	this.apiParas["grade"] = grade;
};

request.prototype.getGrade = function() {
	return this.grade;
};

request.prototype.setGroupIds = function(groupIds) {
	this.groupIds = groupIds;
	this.apiParas["group_ids"] = groupIds;
};

request.prototype.getGroupIds = function() {
	return this.groupIds;
};

request.prototype.setMaxAvgPrice = function(maxAvgPrice) {
	this.maxAvgPrice = maxAvgPrice;
	this.apiParas["max_avg_price"] = maxAvgPrice;
};

request.prototype.getMaxAvgPrice = function() {
	return this.maxAvgPrice;
};

request.prototype.setMaxCloseTradeNum = function(maxCloseTradeNum) {
	this.maxCloseTradeNum = maxCloseTradeNum;
	this.apiParas["max_close_trade_num"] = maxCloseTradeNum;
};

request.prototype.getMaxCloseTradeNum = function() {
	return this.maxCloseTradeNum;
};

request.prototype.setMaxItemNum = function(maxItemNum) {
	this.maxItemNum = maxItemNum;
	this.apiParas["max_item_num"] = maxItemNum;
};

request.prototype.getMaxItemNum = function() {
	return this.maxItemNum;
};

request.prototype.setMaxLastTradeTime = function(maxLastTradeTime) {
	this.maxLastTradeTime = maxLastTradeTime;
	this.apiParas["max_last_trade_time"] = maxLastTradeTime;
};

request.prototype.getMaxLastTradeTime = function() {
	return this.maxLastTradeTime;
};

request.prototype.setMaxTradeAmount = function(maxTradeAmount) {
	this.maxTradeAmount = maxTradeAmount;
	this.apiParas["max_trade_amount"] = maxTradeAmount;
};

request.prototype.getMaxTradeAmount = function() {
	return this.maxTradeAmount;
};

request.prototype.setMaxTradeCount = function(maxTradeCount) {
	this.maxTradeCount = maxTradeCount;
	this.apiParas["max_trade_count"] = maxTradeCount;
};

request.prototype.getMaxTradeCount = function() {
	return this.maxTradeCount;
};

request.prototype.setMinAvgPrice = function(minAvgPrice) {
	this.minAvgPrice = minAvgPrice;
	this.apiParas["min_avg_price"] = minAvgPrice;
};

request.prototype.getMinAvgPrice = function() {
	return this.minAvgPrice;
};

request.prototype.setMinCloseTradeNum = function(minCloseTradeNum) {
	this.minCloseTradeNum = minCloseTradeNum;
	this.apiParas["min_close_trade_num"] = minCloseTradeNum;
};

request.prototype.getMinCloseTradeNum = function() {
	return this.minCloseTradeNum;
};

request.prototype.setMinItemNum = function(minItemNum) {
	this.minItemNum = minItemNum;
	this.apiParas["min_item_num"] = minItemNum;
};

request.prototype.getMinItemNum = function() {
	return this.minItemNum;
};

request.prototype.setMinLastTradeTime = function(minLastTradeTime) {
	this.minLastTradeTime = minLastTradeTime;
	this.apiParas["min_last_trade_time"] = minLastTradeTime;
};

request.prototype.getMinLastTradeTime = function() {
	return this.minLastTradeTime;
};

request.prototype.setMinTradeAmount = function(minTradeAmount) {
	this.minTradeAmount = minTradeAmount;
	this.apiParas["min_trade_amount"] = minTradeAmount;
};

request.prototype.getMinTradeAmount = function() {
	return this.minTradeAmount;
};

request.prototype.setMinTradeCount = function(minTradeCount) {
	this.minTradeCount = minTradeCount;
	this.apiParas["min_trade_count"] = minTradeCount;
};

request.prototype.getMinTradeCount = function() {
	return this.minTradeCount;
};

request.prototype.setProvince = function(province) {
	this.province = province;
	this.apiParas["province"] = province;
};

request.prototype.getProvince = function() {
	return this.province;
};

request.prototype.setRelationSource = function(relationSource) {
	this.relationSource = relationSource;
	this.apiParas["relation_source"] = relationSource;
};

request.prototype.getRelationSource = function() {
	return this.relationSource;
};

request.prototype.setRuleName = function(ruleName) {
	this.ruleName = ruleName;
	this.apiParas["rule_name"] = ruleName;
};

request.prototype.getRuleName = function() {
	return this.ruleName;
};

request.prototype.getApiMethodName = function() {
	return "taobao.crm.rule.add";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkMaxValue(this.grade,4,"grade");
	topApiCheck.checkMinValue(this.grade,1,"grade");
	topApiCheck.checkMaxListSize(this.groupIds,10,"groupIds");
	topApiCheck.checkMaxLength(this.maxAvgPrice,7,"maxAvgPrice");
	topApiCheck.checkMinValue(this.maxCloseTradeNum,0,"maxCloseTradeNum");
	topApiCheck.checkMinValue(this.maxItemNum,0,"maxItemNum");
	topApiCheck.checkMaxLength(this.maxTradeAmount,7,"maxTradeAmount");
	topApiCheck.checkMinValue(this.maxTradeCount,0,"maxTradeCount");
	topApiCheck.checkMaxLength(this.minAvgPrice,7,"minAvgPrice");
	topApiCheck.checkMinValue(this.minCloseTradeNum,0,"minCloseTradeNum");
	topApiCheck.checkMinValue(this.minItemNum,0,"minItemNum");
	topApiCheck.checkMaxLength(this.minTradeAmount,7,"minTradeAmount");
	topApiCheck.checkMinValue(this.minTradeCount,0,"minTradeCount");
	topApiCheck.checkMaxValue(this.province,35,"province");
	topApiCheck.checkMinValue(this.province,1,"province");
	topApiCheck.checkMaxValue(this.relationSource,2,"relationSource");
	topApiCheck.checkMinValue(this.relationSource,1,"relationSource");
	topApiCheck.checkNotNull(this.ruleName,"ruleName");
	topApiCheck.checkMaxLength(this.ruleName,15,"ruleName");
};

