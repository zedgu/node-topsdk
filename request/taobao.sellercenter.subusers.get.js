
/**
 * TOP API: taobao.sellercenter.subusers.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 表示卖家昵称
	 **/
	this.nick;
	
	this.apiParas = [];
};

request.prototype.setNick = function(nick) {
	this.nick = nick;
	this.apiParas["nick"] = nick;
};

request.prototype.getNick = function() {
	return this.nick;
};

request.prototype.getApiMethodName = function() {
	return "taobao.sellercenter.subusers.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.nick,"nick");
};

