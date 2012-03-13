
/**
 * TOP API: taobao.taohua.staffrecitems.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 推荐的商品类型:
1. free:获取推荐的免费商品
2. charges:获取推荐的收费商品
	 **/
	this.itemType;
	
	/** 
	 * 当前页数，大于0的整数，默认值1，代表第一页
	 **/
	this.pageNo;
	
	/** 
	 * 每页显示最大条数，要求：大于0的整数。默认为5，代表每页显示5条
	 **/
	this.pageSize;
	
	this.apiParas = [];
};

request.prototype.setItemType = function(itemType) {
	this.itemType = itemType;
	this.apiParas["item_type"] = itemType;
};

request.prototype.getItemType = function() {
	return this.itemType;
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
	return "taobao.taohua.staffrecitems.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.itemType,"itemType");
};

