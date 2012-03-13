
/**
 * TOP API: taobao.ju.items.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 代表需要返回的商品对象字段。可选值：ItemData商品结构体中所有字段均可返回；多个字段用","分隔。如果fields为空，或者不传该参数，就默认获得所有的字段
	 **/
	this.fields;
	
	/** 
	 * 商品ID列表。id列表超过6条也只返回前6条的商品
	 **/
	this.ids;
	
	this.apiParas = [];
};

request.prototype.setFields = function(fields) {
	this.fields = fields;
	this.apiParas["fields"] = fields;
};

request.prototype.getFields = function() {
	return this.fields;
};

request.prototype.setIds = function(ids) {
	this.ids = ids;
	this.apiParas["ids"] = ids;
};

request.prototype.getIds = function() {
	return this.ids;
};

request.prototype.getApiMethodName = function() {
	return "taobao.ju.items.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.ids,"ids");
};

