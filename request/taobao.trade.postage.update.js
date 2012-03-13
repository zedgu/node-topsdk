
/**
 * TOP API: taobao.trade.postage.update request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 邮费价格(邮费单位是元）
	 **/
	this.postFee;
	
	/** 
	 * 主订单编号
	 **/
	this.tid;
	
	this.apiParas = [];
};

request.prototype.setPostFee = function(postFee) {
	this.postFee = postFee;
	this.apiParas["post_fee"] = postFee;
};

request.prototype.getPostFee = function() {
	return this.postFee;
};

request.prototype.setTid = function(tid) {
	this.tid = tid;
	this.apiParas["tid"] = tid;
};

request.prototype.getTid = function() {
	return this.tid;
};

request.prototype.getApiMethodName = function() {
	return "taobao.trade.postage.update";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.postFee,"postFee");
	topApiCheck.checkNotNull(this.tid,"tid");
};

