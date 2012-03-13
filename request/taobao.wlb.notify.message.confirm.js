
/**
 * TOP API: taobao.wlb.notify.message.confirm request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 物流宝通知消息的id，通过taobao.wlb.notify.message.page.get接口得到的WlbMessage数据结构中的id字段
	 **/
	this.messageId;
	
	this.apiParas = [];
};

request.prototype.setMessageId = function(messageId) {
	this.messageId = messageId;
	this.apiParas["message_id"] = messageId;
};

request.prototype.getMessageId = function() {
	return this.messageId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.wlb.notify.message.confirm";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.messageId,"messageId");
};

