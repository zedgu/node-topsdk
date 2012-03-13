
/**
 * TOP API: taobao.crm.members.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 买家的昵称
	 **/
	this.buyerNick;
	
	/** 
	 * 显示第几页的会员，如果输入的页码大于总共的页码数，例如总共10页，但是current_page的值为11，则返回空白页，最小页数为1
	 **/
	this.currentPage;
	
	/** 
	 * 会员等级，0：返回所有会员1：普通客户，2：高级会员，3：VIP会员， 4：至尊VIP会员
(如果要查交易关闭的会员  请选择taobao.crm.members.search接口的 relation_source=2)
	 **/
	this.grade;
	
	/** 
	 * 最迟上次交易时间
	 **/
	this.maxLastTradeTime;
	
	/** 
	 * 最大交易额，单位为元
	 **/
	this.maxTradeAmount;
	
	/** 
	 * 最大交易量
	 **/
	this.maxTradeCount;
	
	/** 
	 * 最早上次交易时间
	 **/
	this.minLastTradeTime;
	
	/** 
	 * 最小交易额,单位为元
	 **/
	this.minTradeAmount;
	
	/** 
	 * 最小交易量
	 **/
	this.minTradeCount;
	
	/** 
	 * 表示每页显示的会员数量,page_size的最大值不能超过100条,最小值不能低于1，
	 **/
	this.pageSize;
	
	this.apiParas = [];
};

request.prototype.setBuyerNick = function(buyerNick) {
	this.buyerNick = buyerNick;
	this.apiParas["buyer_nick"] = buyerNick;
};

request.prototype.getBuyerNick = function() {
	return this.buyerNick;
};

request.prototype.setCurrentPage = function(currentPage) {
	this.currentPage = currentPage;
	this.apiParas["current_page"] = currentPage;
};

request.prototype.getCurrentPage = function() {
	return this.currentPage;
};

request.prototype.setGrade = function(grade) {
	this.grade = grade;
	this.apiParas["grade"] = grade;
};

request.prototype.getGrade = function() {
	return this.grade;
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

request.prototype.setPageSize = function(pageSize) {
	this.pageSize = pageSize;
	this.apiParas["page_size"] = pageSize;
};

request.prototype.getPageSize = function() {
	return this.pageSize;
};

request.prototype.getApiMethodName = function() {
	return "taobao.crm.members.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkMaxLength(this.buyerNick,32,"buyerNick");
	topApiCheck.checkNotNull(this.currentPage,"currentPage");
	topApiCheck.checkMaxValue(this.currentPage,1000000,"currentPage");
	topApiCheck.checkMinValue(this.currentPage,1,"currentPage");
	topApiCheck.checkMaxValue(this.grade,4,"grade");
	topApiCheck.checkMinValue(this.grade,1,"grade");
	topApiCheck.checkMinValue(this.maxTradeCount,0,"maxTradeCount");
	topApiCheck.checkMinValue(this.minTradeCount,0,"minTradeCount");
	topApiCheck.checkMaxValue(this.pageSize,100,"pageSize");
	topApiCheck.checkMinValue(this.pageSize,1,"pageSize");
};

