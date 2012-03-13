
/**
 * TOP API: taobao.wlb.replenish.statistics request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 商品编码
	 **/
	this.itemCode;
	
	/** 
	 * 商品名称
	 **/
	this.name;
	
	/** 
	 * 分页参数，默认第一页
	 **/
	this.pageNo;
	
	/** 
	 * 分页每页页数，默认20，最大50
	 **/
	this.pageSize;
	
	/** 
	 * 仓库编码
	 **/
	this.storeCode;
	
	this.apiParas = [];
};

request.prototype.setItemCode = function(itemCode) {
	this.itemCode = itemCode;
	this.apiParas["item_code"] = itemCode;
};

request.prototype.getItemCode = function() {
	return this.itemCode;
};

request.prototype.setName = function(name) {
	this.name = name;
	this.apiParas["name"] = name;
};

request.prototype.getName = function() {
	return this.name;
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

request.prototype.setStoreCode = function(storeCode) {
	this.storeCode = storeCode;
	this.apiParas["store_code"] = storeCode;
};

request.prototype.getStoreCode = function() {
	return this.storeCode;
};

request.prototype.getApiMethodName = function() {
	return "taobao.wlb.replenish.statistics";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkMaxValue(this.pageSize,50,"pageSize");
};

