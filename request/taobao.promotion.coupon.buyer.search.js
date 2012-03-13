
/**
 * TOP API: taobao.promotion.coupon.buyer.search request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 查询有效期晚于查询日期的所有优惠券
	 **/
	this.endTime;
	
	/** 
	 * 第几页
	 **/
	this.pageNo;
	
	/** 
	 * 每页条数
	 **/
	this.pageSize;
	
	/** 
	 * 店铺的名称，就是卖家的昵称
	 **/
	this.sellerNick;
	
	/** 
	 * unused：未使用，using：使用中,used,已经使用，overdue：已经过期，transfered：已经转发
	 **/
	this.status;
	
	this.apiParas = [];
};

request.prototype.setEndTime = function(endTime) {
	this.endTime = endTime;
	this.apiParas["end_time"] = endTime;
};

request.prototype.getEndTime = function() {
	return this.endTime;
};

request.prototype.setPageNo = function(pageNo) {
	this.pageNo = pageNo;
	this.apiParas["page_no"] = pageNo;
};

request.prototype.getPageNo = function() {
	return this.pageNo;
};

request.prototype.setPageSize = function(pageSize) {
	this.pageSize = pageSize;
	this.apiParas["page_size"] = pageSize;
};

request.prototype.getPageSize = function() {
	return this.pageSize;
};

request.prototype.setSellerNick = function(sellerNick) {
	this.sellerNick = sellerNick;
	this.apiParas["seller_nick"] = sellerNick;
};

request.prototype.getSellerNick = function() {
	return this.sellerNick;
};

request.prototype.setStatus = function(status) {
	this.status = status;
	this.apiParas["status"] = status;
};

request.prototype.getStatus = function() {
	return this.status;
};

request.prototype.getApiMethodName = function() {
	return "taobao.promotion.coupon.buyer.search";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkMinValue(this.pageNo,1,"pageNo");
	topApiCheck.checkMaxValue(this.pageSize,20,"pageSize");
	topApiCheck.checkMinValue(this.pageSize,10,"pageSize");
	topApiCheck.checkNotNull(this.status,"status");
};

