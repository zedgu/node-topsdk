
/**
 * TOP API: taobao.promotion.coupondetail.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 买家昵称
	 **/
	this.buyerNick;
	
	/** 
	 * 优惠券的id
	 **/
	this.couponId;
	
	/** 
	 * 查询的页号，结果集是分页返回的，每页20条
	 **/
	this.pageNo;
	
	/** 
	 * 每页行数
	 **/
	this.pageSize;
	
	/** 
	 * 优惠券使用情况unused：代表未使用using：代表使用中used：代表已使用。必须是unused，using，used
	 **/
	this.state;
	
	this.apiParas = [];
};

request.prototype.setBuyerNick = function(buyerNick) {
	this.buyerNick = buyerNick;
	this.apiParas["buyer_nick"] = buyerNick;
};

request.prototype.getBuyerNick = function() {
	return this.buyerNick;
};

request.prototype.setCouponId = function(couponId) {
	this.couponId = couponId;
	this.apiParas["coupon_id"] = couponId;
};

request.prototype.getCouponId = function() {
	return this.couponId;
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

request.prototype.setState = function(state) {
	this.state = state;
	this.apiParas["state"] = state;
};

request.prototype.getState = function() {
	return this.state;
};

request.prototype.getApiMethodName = function() {
	return "taobao.promotion.coupondetail.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.couponId,"couponId");
	topApiCheck.checkMaxValue(this.pageSize,20,"pageSize");
};

