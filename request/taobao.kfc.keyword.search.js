
/**
 * TOP API: taobao.kfc.keyword.search request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 应用点，分为一级应用点、二级应用点。其中一级应用点通常是指某一个系统或产品，比如淘宝的商品应用（taobao_auction）；二级应用点，是指一级应用点下的具体的分类，比如商品标题(title)、商品描述(content)。不同的二级应用可以设置不同关键词。

这里的apply参数是由一级应用点与二级应用点合起来的字符（一级应用点+"."+二级应用点），如taobao_auction.title。


通常apply参数是不需要传递的。如有特殊需求（比如特殊的过滤需求，需要自己维护一套自己词库），需传递此参数。
	 **/
	this.apply;
	
	/** 
	 * 需要过滤的文本信息
	 **/
	this.content;
	
	/** 
	 * 发布信息的淘宝会员名，可以不传
	 **/
	this.nick;
	
	this.apiParas = [];
};

request.prototype.setApply = function(apply) {
	this.apply = apply;
	this.apiParas["apply"] = apply;
};

request.prototype.getApply = function() {
	return this.apply;
};

request.prototype.setContent = function(content) {
	this.content = content;
	this.apiParas["content"] = content;
};

request.prototype.getContent = function() {
	return this.content;
};

request.prototype.setNick = function(nick) {
	this.nick = nick;
	this.apiParas["nick"] = nick;
};

request.prototype.getNick = function() {
	return this.nick;
};

request.prototype.getApiMethodName = function() {
	return "taobao.kfc.keyword.search";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.content,"content");
};

