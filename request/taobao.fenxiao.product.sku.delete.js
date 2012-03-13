
/**
 * TOP API: taobao.fenxiao.product.sku.delete request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 产品id
	 **/
	this.productId;
	
	/** 
	 * sku属性
	 **/
	this.properties;
	
	this.apiParas = [];
};

request.prototype.setProductId = function(productId) {
	this.productId = productId;
	this.apiParas["product_id"] = productId;
};

request.prototype.getProductId = function() {
	return this.productId;
};

request.prototype.setProperties = function(properties) {
	this.properties = properties;
	this.apiParas["properties"] = properties;
};

request.prototype.getProperties = function() {
	return this.properties;
};

request.prototype.getApiMethodName = function() {
	return "taobao.fenxiao.product.sku.delete";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.productId,"productId");
	topApiCheck.checkNotNull(this.properties,"properties");
};

