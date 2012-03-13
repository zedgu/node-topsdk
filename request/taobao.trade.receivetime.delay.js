
/**
 * TOP API: taobao.trade.receivetime.delay request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 延长收货的天数，可选值为：3, 5, 7, 10。
	 **/
	this.days;
	
	/** 
	 * 主订单号
	 **/
	this.tid;
	
	this.apiParas = [];
};

request.prototype.setDays = function(days) {
	this.days = days;
	this.apiParas["days"] = days;
};

request.prototype.getDays = function() {
	return this.days;
};

request.prototype.setTid = function(tid) {
	this.tid = tid;
	this.apiParas["tid"] = tid;
};

request.prototype.getTid = function() {
	return this.tid;
};

request.prototype.getApiMethodName = function() {
	return "taobao.trade.receivetime.delay";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.days,"days");
	topApiCheck.checkMaxValue(this.days,10,"days");
	topApiCheck.checkMinValue(this.days,3,"days");
	topApiCheck.checkNotNull(this.tid,"tid");
};

