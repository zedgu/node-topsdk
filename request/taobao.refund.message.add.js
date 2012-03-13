
/**
 * TOP API: taobao.refund.message.add request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 留言内容。最大长度: 400个字节
	 **/
	this.content;
	
	/** 
	 * 图片（凭证）。类型: JPG,GIF,PNG;最大为: 500K
	 **/
	this.image;
	
	/** 
	 * 退款编号。
	 **/
	this.refundId;
	
	this.apiParas = [];
};

request.prototype.setContent = function(content) {
	this.content = content;
	this.apiParas["content"] = content;
};

request.prototype.getContent = function() {
	return this.content;
};

request.prototype.setImage = function(image) {
	this.image = image;
	this.apiParas["image"] = image;
};

request.prototype.getImage = function() {
	return this.image;
};

request.prototype.setRefundId = function(refundId) {
	this.refundId = refundId;
	this.apiParas["refund_id"] = refundId;
};

request.prototype.getRefundId = function() {
	return this.refundId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.refund.message.add";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.content,"content");
	topApiCheck.checkNotNull(this.refundId,"refundId");
};

