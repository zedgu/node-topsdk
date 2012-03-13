
/**
 * TOP API: taobao.logistics.online.confirm request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 运单号.具体一个物流公司的真实运单号码。淘宝官方物流会校验，请谨慎传入；若company_code中传入的代码非淘宝官方物流合作公司，此处运单号不校验。<br>
	 **/
	this.outSid;
	
	/** 
	 * 淘宝交易ID
	 **/
	this.tid;
	
	this.apiParas = [];
};

request.prototype.setOutSid = function(outSid) {
	this.outSid = outSid;
	this.apiParas["out_sid"] = outSid;
};

request.prototype.getOutSid = function() {
	return this.outSid;
};

request.prototype.setTid = function(tid) {
	this.tid = tid;
	this.apiParas["tid"] = tid;
};

request.prototype.getTid = function() {
	return this.tid;
};

request.prototype.getApiMethodName = function() {
	return "taobao.logistics.online.confirm";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.outSid,"outSid");
	topApiCheck.checkNotNull(this.tid,"tid");
};

