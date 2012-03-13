
/**
 * TOP API: taobao.fenxiao.product.image.upload request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 产品图片
	 **/
	this.image;
	
	/** 
	 * 产品主图图片空间相对路径或绝对路径
	 **/
	this.picPath;
	
	/** 
	 * 图片位置，1-5之间
	 **/
	this.position;
	
	/** 
	 * 产品ID
	 **/
	this.productId;
	
	this.apiParas = [];
};

request.prototype.setImage = function(image) {
	this.image = image;
	this.apiParas["image"] = image;
};

request.prototype.getImage = function() {
	return this.image;
};

request.prototype.setPicPath = function(picPath) {
	this.picPath = picPath;
	this.apiParas["pic_path"] = picPath;
};

request.prototype.getPicPath = function() {
	return this.picPath;
};

request.prototype.setPosition = function(position) {
	this.position = position;
	this.apiParas["position"] = position;
};

request.prototype.getPosition = function() {
	return this.position;
};

request.prototype.setProductId = function(productId) {
	this.productId = productId;
	this.apiParas["product_id"] = productId;
};

request.prototype.getProductId = function() {
	return this.productId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.fenxiao.product.image.upload";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.position,"position");
	topApiCheck.checkNotNull(this.productId,"productId");
};

