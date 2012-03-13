
/**
 * TOP API: taobao.item.skus.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 需返回的字段列表。可选值：Sku结构体中的所有字段；字段之间用“,”分隔。
	 **/
	this.fields;
	
	/** 
	 * sku所属商品数字id，必选。num_iid个数不能超过40个
	 **/
	this.numIids;
	
	this.apiParas = [];
};

request.prototype.setFields = function(fields) {
	this.fields = fields;
	this.apiParas["fields"] = fields;
};

request.prototype.getFields = function() {
	return this.fields;
};

request.prototype.setNumIids = function(numIids) {
	this.numIids = numIids;
	this.apiParas["num_iids"] = numIids;
};

request.prototype.getNumIids = function() {
	return this.numIids;
};

request.prototype.getApiMethodName = function() {
	return "taobao.item.skus.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.fields,"fields");
	topApiCheck.checkNotNull(this.numIids,"numIids");
};

