
/**
 * TOP API: taobao.trade.confirmfee.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 是否是子订单。可选值:IS_FATHER(父订单),IS_CHILD(子订单)
	 **/
	this.isDetail;
	
	/** 
	 * 交易编号，或子订单编号
	 **/
	this.tid;
	
	this.apiParas = [];
};

request.prototype.setIsDetail = function(isDetail) {
	this.isDetail = isDetail;
	this.apiParas["is_detail"] = isDetail;
};

request.prototype.getIsDetail = function() {
	return this.isDetail;
};

request.prototype.setTid = function(tid) {
	this.tid = tid;
	this.apiParas["tid"] = tid;
};

request.prototype.getTid = function() {
	return this.tid;
};

request.prototype.getApiMethodName = function() {
	return "taobao.trade.confirmfee.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.isDetail,"isDetail");
	topApiCheck.checkNotNull(this.tid,"tid");
};

