
/**
 * TOP API: taobao.taohua.itemresurl.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 商品资源的下载文件类型，可选值：1、pdf，2、epub，3、src。
dpf代表下载pdf类型的文件，epub代表下载epub类型的文件，src代表下载源文件
	 **/
	this.fileType;
	
	/** 
	 * 商品ID
	 **/
	this.itemId;
	
	/** 
	 * 因为下载地址涉及到断点续传的功能，所以需要客户端高速服务器端，应该从哪个byte开始返回文件流，那么这个字段作用就是用于告诉服务端从指定位置读取文件流
	 **/
	this.position;
	
	this.apiParas = [];
};

request.prototype.setFileType = function(fileType) {
	this.fileType = fileType;
	this.apiParas["file_type"] = fileType;
};

request.prototype.getFileType = function() {
	return this.fileType;
};

request.prototype.setItemId = function(itemId) {
	this.itemId = itemId;
	this.apiParas["item_id"] = itemId;
};

request.prototype.getItemId = function() {
	return this.itemId;
};

request.prototype.setPosition = function(position) {
	this.position = position;
	this.apiParas["position"] = position;
};

request.prototype.getPosition = function() {
	return this.position;
};

request.prototype.getApiMethodName = function() {
	return "taobao.taohua.itemresurl.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.itemId,"itemId");
};

