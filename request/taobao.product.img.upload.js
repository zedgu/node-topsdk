
/**
 * TOP API: taobao.product.img.upload request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 产品图片ID.修改图片时需要传入
	 **/
	this.id;
	
	/** 
	 * 图片内容.图片最大为500K,只支持JPG,GIF格式.
	 **/
	this.image;
	
	/** 
	 * 是否将该图片设为主图.可选值:true,false;默认值:false.
	 **/
	this.isMajor;
	
	/** 
	 * 图片序号
	 **/
	this.position;
	
	/** 
	 * 产品ID.Product的id
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

request.prototype.setImage = function(image) {
	this.image = image;
	this.apiParas["image"] = image;
};

request.prototype.getImage = function() {
	return this.image;
};

request.prototype.setIsMajor = function(isMajor) {
	this.isMajor = isMajor;
	this.apiParas["is_major"] = isMajor;
};

request.prototype.getIsMajor = function() {
	return this.isMajor;
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
	return "taobao.product.img.upload";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.image,"image");
	topApiCheck.checkNotNull(this.productId,"productId");
};

