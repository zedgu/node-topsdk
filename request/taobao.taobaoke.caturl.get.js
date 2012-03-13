
/**
 * TOP API: taobao.taobaoke.caturl.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 类目id.注意：这里的类目id是淘宝后台发布商品的类目id.
	 **/
	this.cid;
	
	/** 
	 * 推广者的淘宝会员昵称.注：这里指的是淘宝的登录会员名
	 **/
	this.nick;
	
	/** 
	 * 自定义输入串.格式:英文和数字组成;长度不能大于12个字符,区分不同的推广渠道,如:bbs,表示bbs为推广渠道;blog,表示blog为推广渠道.
	 **/
	this.outerCode;
	
	/** 
	 * 淘客用户的pid,用于生成点击串.nick和pid都传入的话,以pid为准
	 **/
	this.pid;
	
	/** 
	 * 关键词
	 **/
	this.q;
	
	this.apiParas = [];
};

request.prototype.setCid = function(cid) {
	this.cid = cid;
	this.apiParas["cid"] = cid;
};

request.prototype.getCid = function() {
	return this.cid;
};

request.prototype.setNick = function(nick) {
	this.nick = nick;
	this.apiParas["nick"] = nick;
};

request.prototype.getNick = function() {
	return this.nick;
};

request.prototype.setOuterCode = function(outerCode) {
	this.outerCode = outerCode;
	this.apiParas["outer_code"] = outerCode;
};

request.prototype.getOuterCode = function() {
	return this.outerCode;
};

request.prototype.setPid = function(pid) {
	this.pid = pid;
	this.apiParas["pid"] = pid;
};

request.prototype.getPid = function() {
	return this.pid;
};

request.prototype.setQ = function(q) {
	this.q = q;
	this.apiParas["q"] = q;
};

request.prototype.getQ = function() {
	return this.q;
};

request.prototype.getApiMethodName = function() {
	return "taobao.taobaoke.caturl.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.cid,"cid");
	topApiCheck.checkMinValue(this.cid,0,"cid");
};

