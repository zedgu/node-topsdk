
/**
 * TOP API: taobao.hotel.order.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 是否需要返回该订单的入住人列表。可选值：true，false。
	 **/
	this.needGuest;
	
	/** 
	 * 是否显示买家留言，可选值true、false
	 **/
	this.needMessage;
	
	/** 
	 * 酒店订单oid，必须为数字。oid，tid必须传一项，同时传递的情况下，作为查询条件的优先级由高到低依次为oid，tid。
	 **/
	this.oid;
	
	/** 
	 * 淘宝订单tid，必须为数字。oid，tid必须传一项，同时传递的情况下，作为查询条件的优先级由高到低依次为oid，tid。
	 **/
	this.tid;
	
	this.apiParas = [];
};

request.prototype.setNeedGuest = function(needGuest) {
	this.needGuest = needGuest;
	this.apiParas["need_guest"] = needGuest;
};

request.prototype.getNeedGuest = function() {
	return this.needGuest;
};

request.prototype.setNeedMessage = function(needMessage) {
	this.needMessage = needMessage;
	this.apiParas["need_message"] = needMessage;
};

request.prototype.getNeedMessage = function() {
	return this.needMessage;
};

request.prototype.setOid = function(oid) {
	this.oid = oid;
	this.apiParas["oid"] = oid;
};

request.prototype.getOid = function() {
	return this.oid;
};

request.prototype.setTid = function(tid) {
	this.tid = tid;
	this.apiParas["tid"] = tid;
};

request.prototype.getTid = function() {
	return this.tid;
};

request.prototype.getApiMethodName = function() {
	return "taobao.hotel.order.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
};

