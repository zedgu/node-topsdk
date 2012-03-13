
/**
 * TOP API: taobao.increment.customer.stop request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 应用要关闭增量消息服务的用户昵称
	 **/
	this.nick;
	
	/** 
	 * 应用需要关闭用户的功能。取值可为get,notify和syn分别表示增量api取消息，主动发送消息和同步数据功能。用户关闭相应功能前,需应用已为用户经开通了相应的功能。这三个参数可无序任意组合。在关闭时，type里面的参数会根据应用订阅的类型进行相应的过虑。如应用只订阅主动通知，则默认值过滤后为get,notify，如果应用只订阅数据同步服务，默认值过滤后为syn。
	 **/
	this.type;
	
	this.apiParas = [];
};

request.prototype.setNick = function(nick) {
	this.nick = nick;
	this.apiParas["nick"] = nick;
};

request.prototype.getNick = function() {
	return this.nick;
};

request.prototype.setType = function(type) {
	this.type = type;
	this.apiParas["type"] = type;
};

request.prototype.getType = function() {
	return this.type;
};

request.prototype.getApiMethodName = function() {
	return "taobao.increment.customer.stop";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.nick,"nick");
	topApiCheck.checkMaxListSize(this.type,3,"type");
};

