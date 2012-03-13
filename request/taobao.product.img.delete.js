
/**
 * TOP API: taobao.product.img.delete request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 非主图ID
	 **/
	this.id;
	
	/** 
	 * 产品ID.Product的id,通过taobao.product.add接口新增产品的时候会返回id.
	 **/
	this.productId;
	
	this.apiParas = [];
};

request.prototype.setId = function(id) {
	this.id = id;
	this.apiParas["id"] = id;
};

request.prototype.getId = function() {
	return this.id;
};

request.prototype.setProductId = function(productId) {
	this.productId = productId;
	this.apiParas["product_id"] = productId;
};

request.prototype.getProductId = function() {
	return this.productId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.product.img.delete";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.id,"id");
	topApiCheck.checkNotNull(this.productId,"productId");
};

