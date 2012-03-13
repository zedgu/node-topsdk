
/**
 * TOP API: taobao.users.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 查询字段：User数据结构的公开信息字段列表，以半角逗号(,)分隔
	 **/
	this.fields;
	
	/** 
	 * 用户昵称，多个以半角逗号(,)分隔，最多40个
	 **/
	this.nicks;
	
	this.apiParas = [];
};

request.prototype.setFields = function(fields) {
	this.fields = fields;
	this.apiParas["fields"] = fields;
};

request.prototype.getFields = function() {
	return this.fields;
};

request.prototype.setNicks = function(nicks) {
	this.nicks = nicks;
	this.apiParas["nicks"] = nicks;
};

request.prototype.getNicks = function() {
	return this.nicks;
};

request.prototype.getApiMethodName = function() {
	return "taobao.users.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.fields,"fields");
	topApiCheck.checkNotNull(this.nicks,"nicks");
};

