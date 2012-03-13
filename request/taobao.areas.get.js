
/**
 * TOP API: taobao.areas.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 需返回的字段列表.可选值:Area 结构中的所有字段;多个字段之间用","分隔.如:id,type,name,parent_id,zip.
	 **/
	this.fields;
	
	this.apiParas = [];
};

request.prototype.setFields = function(fields) {
	this.fields = fields;
	this.apiParas["fields"] = fields;
};

request.prototype.getFields = function() {
	return this.fields;
};

request.prototype.getApiMethodName = function() {
	return "taobao.areas.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.fields,"fields");
};

