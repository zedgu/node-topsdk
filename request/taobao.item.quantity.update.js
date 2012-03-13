
/**
 * TOP API: taobao.item.quantity.update request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 商品数字ID，必填参数
	 **/
	this.numIid;
	
	/** 
	 * SKU的商家编码，可选参数。如果不填则默认修改宝贝的库存，如果填了则按照商家编码搜索出对应的SKU并修改库存。当sku_id和本字段都填写时以sku_id为准搜索对应SKU
	 **/
	this.outerId;
	
	/** 
	 * 库存修改值，必选。当全量更新库存时，quantity必须为大于等于0的正整数；当增量更新库存时，quantity为整数，可小于等于0。若增量更新时传入的库存为负数且绝对值大于当前实际库存，则库存改为0。比如当前实际库存为1，传入增量更新quantity=-5，库存改为0
	 **/
	this.quantity;
	
	/** 
	 * 要操作的SKU的数字ID，可选。如果不填默认修改宝贝的库存，如果填上则修改该SKU的库存
	 **/
	this.skuId;
	
	/** 
	 * 库存更新方式，可选。1为全量更新，2为增量更新。如果不填，默认为全量更新
	 **/
	this.type;
	
	this.apiParas = [];
};

request.prototype.setNumIid = function(numIid) {
	this.numIid = numIid;
	this.apiParas["num_iid"] = numIid;
};

request.prototype.getNumIid = function() {
	return this.numIid;
};

request.prototype.setOuterId = function(outerId) {
	this.outerId = outerId;
	this.apiParas["outer_id"] = outerId;
};

request.prototype.getOuterId = function() {
	return this.outerId;
};

request.prototype.setQuantity = function(quantity) {
	this.quantity = quantity;
	this.apiParas["quantity"] = quantity;
};

request.prototype.getQuantity = function() {
	return this.quantity;
};

request.prototype.setSkuId = function(skuId) {
	this.skuId = skuId;
	this.apiParas["sku_id"] = skuId;
};

request.prototype.getSkuId = function() {
	return this.skuId;
};

request.prototype.setType = function(type) {
	this.type = type;
	this.apiParas["type"] = type;
};

request.prototype.getType = function() {
	return this.type;
};

request.prototype.getApiMethodName = function() {
	return "taobao.item.quantity.update";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.numIid,"numIid");
	topApiCheck.checkNotNull(this.quantity,"quantity");
};

