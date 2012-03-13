
/**
 * TOP API: taobao.wangwang.eservice.chatpeers.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 字符集
	 **/
	this.charset;
	
	/** 
	 * 聊天用户ID：cntaobao+淘宝nick，例如cntaobaotest
	 **/
	this.chatId;
	
	/** 
	 * 查询结束日期。如2010-03-24，与起始日期跨度不能超过7天
	 **/
	this.endDate;
	
	/** 
	 * 查询起始日期。如2010-02-01，与当前日期间隔小于1个月。
	 **/
	this.startDate;
	
	this.apiParas = [];
};

request.prototype.setCharset = function(charset) {
	this.charset = charset;
	this.apiParas["charset"] = charset;
};

request.prototype.getCharset = function() {
	return this.charset;
};

request.prototype.setChatId = function(chatId) {
	this.chatId = chatId;
	this.apiParas["chat_id"] = chatId;
};

request.prototype.getChatId = function() {
	return this.chatId;
};

request.prototype.setEndDate = function(endDate) {
	this.endDate = endDate;
	this.apiParas["end_date"] = endDate;
};

request.prototype.getEndDate = function() {
	return this.endDate;
};

request.prototype.setStartDate = function(startDate) {
	this.startDate = startDate;
	this.apiParas["start_date"] = startDate;
};

request.prototype.getStartDate = function() {
	return this.startDate;
};

request.prototype.getApiMethodName = function() {
	return "taobao.wangwang.eservice.chatpeers.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.chatId,"chatId");
	topApiCheck.checkNotNull(this.endDate,"endDate");
	topApiCheck.checkNotNull(this.startDate,"startDate");
};

