
/**
 * TOP API: taobao.comet.discardinfo.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 指定截止日志，如果不传则为服务端当前时间
	 **/
	this.end;
	
	/** 
	 * 指定从那个时间开始找丢弃的消息
	 **/
	this.start;
	
	/** 
	 * 指定多个消息类型
	 **/
	this.types;
	
	/** 
	 * 指定查看那个用户的丢弃消息
	 **/
	this.userId;
	
	this.apiParas = [];
};

request.prototype.setEnd = function(end) {
	this.end = end;
	this.apiParas["end"] = end;
};

request.prototype.getEnd = function() {
	return this.end;
};

request.prototype.setStart = function(start) {
	this.start = start;
	this.apiParas["start"] = start;
};

request.prototype.getStart = function() {
	return this.start;
};

request.prototype.setTypes = function(types) {
	this.types = types;
	this.apiParas["types"] = types;
};

request.prototype.getTypes = function() {
	return this.types;
};

request.prototype.setUserId = function(userId) {
	this.userId = userId;
	this.apiParas["user_id"] = userId;
};

request.prototype.getUserId = function() {
	return this.userId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.comet.discardinfo.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.start,"start");
};

