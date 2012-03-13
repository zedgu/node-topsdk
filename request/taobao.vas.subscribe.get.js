
/**
 * TOP API: taobao.vas.subscribe.get request
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
	 * 淘宝会员名
	 **/
	this.nick;
	
	this.apiParas = [];
};

request.prototype.setArticleCode = function(articleCode) {
	this.articleCode = articleCode;
	this.apiParas["article_code"] = articleCode;
};

request.prototype.getArticleCode = function() {
	return this.articleCode;
};

request.prototype.setNick = function(nick) {
	this.nick = nick;
	this.apiParas["nick"] = nick;
};

request.prototype.getNick = function() {
	return this.nick;
};

request.prototype.getApiMethodName = function() {
	return "taobao.vas.subscribe.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.articleCode,"articleCode");
	topApiCheck.checkNotNull(this.nick,"nick");
};

