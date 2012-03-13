
/**
 * TOP API: taobao.fenxiao.distributor.items.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 分销商ID 。
	 **/
	this.distributorId;
	
	/** 
	 * 设置结束时间,空为不设置。
	 **/
	this.endModified;
	
	/** 
	 * 页码（大于0的整数，默认1）
	 **/
	this.pageNo;
	
	/** 
	 * 每页记录数（默认20，最大50）
	 **/
	this.pageSize;
	
	/** 
	 * 产品ID
	 **/
	this.productId;
	
	/** 
	 * 设置开始时间。空为不设置。
	 **/
	this.startModified;
	
	this.apiParas = [];
};

request.prototype.setDistributorId = function(distributorId) {
	this.distributorId = distributorId;
	this.apiParas["distributor_id"] = distributorId;
};

request.prototype.getDistributorId = function() {
	return this.distributorId;
};

request.prototype.setEndModified = function(endModified) {
	this.endModified = endModified;
	this.apiParas["end_modified"] = endModified;
};

request.prototype.getEndModified = function() {
	return this.endModified;
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

request.prototype.setProductId = function(productId) {
	this.productId = productId;
	this.apiParas["product_id"] = productId;
};

request.prototype.getProductId = function() {
	return this.productId;
};

request.prototype.setStartModified = function(startModified) {
	this.startModified = startModified;
	this.apiParas["start_modified"] = startModified;
};

request.prototype.getStartModified = function() {
	return this.startModified;
};

request.prototype.getApiMethodName = function() {
	return "taobao.fenxiao.distributor.items.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
};

