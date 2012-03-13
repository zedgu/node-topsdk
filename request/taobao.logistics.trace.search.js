
/**
 * TOP API: taobao.logistics.trace.search request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 卖家昵称
	 **/
	this.sellerNick;
	
	/** 
	 * 淘宝交易号，请勿传非淘宝交易号，
	 **/
	this.tid;
	
	this.apiParas = [];
};

request.prototype.setSellerNick = function(sellerNick) {
	this.sellerNick = sellerNick;
	this.apiParas["seller_nick"] = sellerNick;
};

request.prototype.getSellerNick = function() {
	return this.sellerNick;
};

request.prototype.setTid = function(tid) {
	this.tid = tid;
	this.apiParas["tid"] = tid;
};

request.prototype.getTid = function() {
	return this.tid;
};

request.prototype.getApiMethodName = function() {
	return "taobao.logistics.trace.search";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.sellerNick,"sellerNick");
	topApiCheck.checkNotNull(this.tid,"tid");
};

