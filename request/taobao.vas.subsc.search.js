
/**
 * TOP API: taobao.vas.subsc.search request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 应用收费代码，从合作伙伴后台（my.open.taobao.com）-收费管理-收费项目列表 能够获得该应用的收费代码
	 **/
	this.articleCode;
	
	/** 
	 * 是否自动续费，true=自动续费 false=非自动续费 空=全部
	 **/
	this.autosub;
	
	/** 
	 * 到期时间结束值
	 **/
	this.endDeadline;
	
	/** 
	 * 是否到期提醒，true=到期提醒 false=非到期提醒 空=全部
	 **/
	this.expireNotice;
	
	/** 
	 * 收费项目代码，从合作伙伴后台（my.open.taobao.com）-收费管理-收费项目列表 能够获得收费项目代码
	 **/
	this.itemCode;
	
	/** 
	 * 淘宝会员名
	 **/
	this.nick;
	
	/** 
	 * 页码
	 **/
	this.pageNo;
	
	/** 
	 * 一页包含的记录数
	 **/
	this.pageSize;
	
	/** 
	 * 到期时间起始值（当start_deadline和end_deadline都不填写时，默认返回最近90天的数据）
	 **/
	this.startDeadline;
	
	/** 
	 * 订购记录状态，1=有效 2=过期 空=全部
	 **/
	this.status;
	
	this.apiParas = [];
};

request.prototype.setArticleCode = function(articleCode) {
	this.articleCode = articleCode;
	this.apiParas["article_code"] = articleCode;
};

request.prototype.getArticleCode = function() {
	return this.articleCode;
};

request.prototype.setAutosub = function(autosub) {
	this.autosub = autosub;
	this.apiParas["autosub"] = autosub;
};

request.prototype.getAutosub = function() {
	return this.autosub;
};

request.prototype.setEndDeadline = function(endDeadline) {
	this.endDeadline = endDeadline;
	this.apiParas["end_deadline"] = endDeadline;
};

request.prototype.getEndDeadline = function() {
	return this.endDeadline;
};

request.prototype.setExpireNotice = function(expireNotice) {
	this.expireNotice = expireNotice;
	this.apiParas["expire_notice"] = expireNotice;
};

request.prototype.getExpireNotice = function() {
	return this.expireNotice;
};

request.prototype.setItemCode = function(itemCode) {
	this.itemCode = itemCode;
	this.apiParas["item_code"] = itemCode;
};

request.prototype.getItemCode = function() {
	return this.itemCode;
};

request.prototype.setNick = function(nick) {
	this.nick = nick;
	this.apiParas["nick"] = nick;
};

request.prototype.getNick = function() {
	return this.nick;
};

request.prototype.setPageNo = function(pageNo) {
	this.pageNo = pageNo;
	this.apiParas["page_no"] = pageNo;
};

request.prototype.getPageNo = function() {
	return this.pageNo;
};

request.prototype.setPageSize = function(pageSize) {
	this.pageSize = pageSize;
	this.apiParas["page_size"] = pageSize;
};

request.prototype.getPageSize = function() {
	return this.pageSize;
};

request.prototype.setStartDeadline = function(startDeadline) {
	this.startDeadline = startDeadline;
	this.apiParas["start_deadline"] = startDeadline;
};

request.prototype.getStartDeadline = function() {
	return this.startDeadline;
};

request.prototype.setStatus = function(status) {
	this.status = status;
	this.apiParas["status"] = status;
};

request.prototype.getStatus = function() {
	return this.status;
};

request.prototype.getApiMethodName = function() {
	return "taobao.vas.subsc.search";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.articleCode,"articleCode");
	topApiCheck.checkMaxValue(this.pageSize,200,"pageSize");
};

