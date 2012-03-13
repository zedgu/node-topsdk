
/**
 * TOP API: taobao.traderates.search request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 商品的数字id
	 **/
	this.numIid;
	
	/** 
	 * 当前页
	 **/
	this.pageNo;
	
	/** 
	 * 每页显示的条数，允许值：5、10、20、40
	 **/
	this.pageSize;
	
	/** 
	 * 商品所属的卖家nick
	 **/
	this.sellerNick;
	
	this.apiParas = [];
};

request.prototype.setNumIid = function(numIid) {
	this.numIid = numIid;
	this.apiParas["num_iid"] = numIid;
};

request.prototype.getNumIid = function() {
	return this.numIid;
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

request.prototype.getApiMethodName = function() {
	return "taobao.traderates.search";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.numIid,"numIid");
	topApiCheck.checkMinValue(this.pageNo,1,"pageNo");
	topApiCheck.checkMaxValue(this.pageSize,40,"pageSize");
	topApiCheck.checkMinValue(this.pageSize,1,"pageSize");
	topApiCheck.checkNotNull(this.sellerNick,"sellerNick");
	topApiCheck.checkMaxLength(this.sellerNick,32,"sellerNick");
};

