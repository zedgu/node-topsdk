
/**
 * TOP API: taobao.wangwang.eservice.chatlog.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 聊天消息终止时间，如2010-03-24
	 **/
	this.endDate;
	
	/** 
	 * 聊天消息被查询用户ID：cntaobao+淘宝nick，例如cntaobaotest
	 **/
	this.fromId;
	
	/** 
	 * 聊天消息起始时间，如2010-02-01
	 **/
	this.startDate;
	
	/** 
	 * 聊天消息相关方ID：cntaobao+淘宝nick，例如cntaobaotest
	 **/
	this.toId;
	
	this.apiParas = [];
};

request.prototype.setEndDate = function(endDate) {
	this.endDate = endDate;
	this.apiParas["end_date"] = endDate;
};

request.prototype.getEndDate = function() {
	return this.endDate;
};

request.prototype.setFromId = function(fromId) {
	this.fromId = fromId;
	this.apiParas["from_id"] = fromId;
};

request.prototype.getFromId = function() {
	return this.fromId;
};

request.prototype.setStartDate = function(startDate) {
	this.startDate = startDate;
	this.apiParas["start_date"] = startDate;
};

request.prototype.getStartDate = function() {
	return this.startDate;
};

request.prototype.setToId = function(toId) {
	this.toId = toId;
	this.apiParas["to_id"] = toId;
};

request.prototype.getToId = function() {
	return this.toId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.wangwang.eservice.chatlog.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.endDate,"endDate");
	topApiCheck.checkNotNull(this.fromId,"fromId");
	topApiCheck.checkNotNull(this.startDate,"startDate");
	topApiCheck.checkNotNull(this.toId,"toId");
};

