
/**
 * TOP API: taobao.product.update request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 非关键属性.调用taobao.itemprops.get获取pid,调用taobao.itempropvalues.get获取vid;格式:pid:vid;pid:vid
	 **/
	this.binds;
	
	/** 
	 * 产品描述.最大25000个字节
	 **/
	this.desc;
	
	/** 
	 * 产品主图.最大500K,目前仅支持GIF,JPG
	 **/
	this.image;
	
	/** 
	 * 是否是主图
	 **/
	this.major;
	
	/** 
	 * 产品名称.最大60个字节
	 **/
	this.name;
	
	/** 
	 * 自定义非关键属性
	 **/
	this.nativeUnkeyprops;
	
	/** 
	 * 外部产品ID
	 **/
	this.outerId;
	
	/** 
	 * 产品市场价.精确到2位小数;单位为元.如:200.07
	 **/
	this.price;
	
	/** 
	 * 产品ID
	 **/
	this.productId;
	
	/** 
	 * 销售属性.调用taobao.itemprops.get获取pid,调用taobao.itempropvalues.get获取vid;格式:pid:vid;pid:vid
	 **/
	this.saleProps;
	
	this.apiParas = [];
};

request.prototype.setBinds = function(binds) {
	this.binds = binds;
	this.apiParas["binds"] = binds;
};

request.prototype.getBinds = function() {
	return this.binds;
};

request.prototype.setDesc = function(desc) {
	this.desc = desc;
	this.apiParas["desc"] = desc;
};

request.prototype.getDesc = function() {
	return this.desc;
};

request.prototype.setImage = function(image) {
	this.image = image;
	this.apiParas["image"] = image;
};

request.prototype.getImage = function() {
	return this.image;
};

request.prototype.setMajor = function(major) {
	this.major = major;
	this.apiParas["major"] = major;
};

request.prototype.getMajor = function() {
	return this.major;
};

request.prototype.setName = function(name) {
	this.name = name;
	this.apiParas["name"] = name;
};

request.prototype.getName = function() {
	return this.name;
};

request.prototype.setNativeUnkeyprops = function(nativeUnkeyprops) {
	this.nativeUnkeyprops = nativeUnkeyprops;
	this.apiParas["native_unkeyprops"] = nativeUnkeyprops;
};

request.prototype.getNativeUnkeyprops = function() {
	return this.nativeUnkeyprops;
};

request.prototype.setOuterId = function(outerId) {
	this.outerId = outerId;
	this.apiParas["outer_id"] = outerId;
};

request.prototype.getOuterId = function() {
	return this.outerId;
};

request.prototype.setPrice = function(price) {
	this.price = price;
	this.apiParas["price"] = price;
};

request.prototype.getPrice = function() {
	return this.price;
};

request.prototype.setProductId = function(productId) {
	this.productId = productId;
	this.apiParas["product_id"] = productId;
};

request.prototype.getProductId = function() {
	return this.productId;
};

request.prototype.setSaleProps = function(saleProps) {
	this.saleProps = saleProps;
	this.apiParas["sale_props"] = saleProps;
};

request.prototype.getSaleProps = function() {
	return this.saleProps;
};

request.prototype.getApiMethodName = function() {
	return "taobao.product.update";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.productId,"productId");
};

