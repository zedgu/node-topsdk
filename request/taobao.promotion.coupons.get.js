
/**
 * TOP API: taobao.promotion.coupons.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 优惠券的id，唯一标识这个优惠券
	 **/
	this.couponId;
	
	/** 
	 * 优惠券的面额，必须是3，5，10，20，50,100
	 **/
	this.denominations;
	
	/** 
	 * 优惠券的截止日期
	 **/
	this.endTime;
	
	/** 
	 * 查询的页号，结果集是分页返回的，每页20条
	 **/
	this.pageNo;
	
	/** 
	 * 每页条数
	 **/
	this.pageSize;
	
	this.apiParas = [];
};

request.prototype.setCouponId = function(couponId) {
	this.couponId = couponId;
	this.apiParas["coupon_id"] = couponId;
};

request.prototype.getCouponId = function() {
	return this.couponId;
};

request.prototype.setDenominations = function(denominations) {
	this.denominations = denominations;
	this.apiParas["denominations"] = denominations;
};

request.prototype.getDenominations = function() {
	return this.denominations;
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

request.prototype.getApiMethodName = function() {
	return "taobao.promotion.coupons.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkMaxValue(this.denominations,100,"denominations");
	topApiCheck.checkMinValue(this.denominations,3,"denominations");
	topApiCheck.checkMinValue(this.pageNo,1,"pageNo");
};

