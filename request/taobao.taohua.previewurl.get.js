
/**
 * TOP API: taobao.taohua.previewurl.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 用来区分要预览的文档类型,目前支持两种
pre_epub 预览epub文档
pre_pdf  预览pdf文档
	 **/
	this.fileType;
	
	/** 
	 * 商品ID
	 **/
	this.itemId;
	
	/** 
	 * 文件位置
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
	return "taobao.taohua.previewurl.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.fileType,"fileType");
	topApiCheck.checkNotNull(this.itemId,"itemId");
	topApiCheck.checkNotNull(this.position,"position");
};

