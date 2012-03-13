
/**
 * TOP API: taobao.item.sku.get request
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
	 * 卖家nick(num_iid和nick必传一个)
	 **/
	this.nick;
	
	/** 
	 * 商品的数字IID（num_iid和nick必传一个，推荐用num_iid）
	 **/
	this.numIid;
	
	/** 
	 * Sku的id。可以通过taobao.item.get得到
	 **/
	this.skuId;
	
	this.apiParas = [];
};

request.prototype.setFields = function(fields) {
	this.fields = fields;
	this.apiParas["fields"] = fields;
};

request.prototype.getFields = function() {
	return this.fields;
};

request.prototype.setNick = function(nick) {
	this.nick = nick;
	this.apiParas["nick"] = nick;
};

request.prototype.getNick = function() {
	return this.nick;
};

request.prototype.setNumIid = function(numIid) {
	this.numIid = numIid;
	this.apiParas["num_iid"] = numIid;
};

request.prototype.getNumIid = function() {
	return this.numIid;
};

request.prototype.setSkuId = function(skuId) {
	this.skuId = skuId;
	this.apiParas["sku_id"] = skuId;
};

request.prototype.getSkuId = function() {
	return this.skuId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.item.sku.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.fields,"fields");
	topApiCheck.checkMinValue(this.numIid,0,"numIid");
	topApiCheck.checkNotNull(this.skuId,"skuId");
};

