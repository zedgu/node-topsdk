
/**
 * TOP API: taobao.wlb.item.batch.query request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 需要查询的商品ID列表，以字符串表示，ID间以;隔开
	 **/
	this.itemIds;
	
	/** 
	 * 分页查询参数，指定查询页数，默认为1
	 **/
	this.pageNo;
	
	/** 
	 * 分页查询参数，每页查询数量，默认20，最大值50,大于50时按照50条查询
	 **/
	this.pageSize;
	
	/** 
	 * 仓库编号
	 **/
	this.storeCode;
	
	this.apiParas = [];
};

request.prototype.setItemIds = function(itemIds) {
	this.itemIds = itemIds;
	this.apiParas["item_ids"] = itemIds;
};

request.prototype.getItemIds = function() {
	return this.itemIds;
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
	return "taobao.wlb.item.batch.query";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.itemIds,"itemIds");
};

