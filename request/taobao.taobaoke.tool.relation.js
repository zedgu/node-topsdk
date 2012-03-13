
/**
 * TOP API: taobao.taobaoke.tool.relation request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 用户的pubid 用来判断这个pubid是否是appkey关联的开发者的注册用户
	 **/
	this.pubid;
	
	this.apiParas = [];
};

request.prototype.setPubid = function(pubid) {
	this.pubid = pubid;
	this.apiParas["pubid"] = pubid;
};

request.prototype.getPubid = function() {
	return this.pubid;
};

request.prototype.getApiMethodName = function() {
	return "taobao.taobaoke.tool.relation";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.pubid,"pubid");
};

