
/**
 * TOP API: taobao.fenxiao.distributors.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 分销商用户名列表。多个之间以“,”分隔;最多支持50个分销商用户名。
	 **/
	this.nicks;
	
	this.apiParas = [];
};

request.prototype.setNicks = function(nicks) {
	this.nicks = nicks;
	this.apiParas["nicks"] = nicks;
};

request.prototype.getNicks = function() {
	return this.nicks;
};

request.prototype.getApiMethodName = function() {
	return "taobao.fenxiao.distributors.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.nicks,"nicks");
};

