
/**
 * TOP API: taobao.items.list.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 需要返回的商品对象字段。可选值：Item商品结构体中所有字段均可返回(注：目前不能返回props_name)；多个字段用“,”分隔。如果想返回整个子对象，那字段为itemimg，如果是想返回子对象里面的字段，那字段为itemimg.url。
	 **/
	this.fields;
	
	/** 
	 * 商品数字id列表，多个num_iid用逗号隔开，一次不超过20个。
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
	return "taobao.items.list.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.fields,"fields");
	topApiCheck.checkNotNull(this.numIids,"numIids");
};

