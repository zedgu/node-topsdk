
/**
 * TOP API: taobao.taohua.audioreader.recommend.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 推荐专辑的类型，有两个可选项，recent:最近更新，hot:热门
	 **/
	this.itemType;
	
	/** 
	 * 当前页码
	 **/
	this.pageNo;
	
	/** 
	 * 每页个数
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
	return "taobao.taohua.audioreader.recommend.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.itemType,"itemType");
	topApiCheck.checkMaxValue(this.pageNo,100,"pageNo");
	topApiCheck.checkMinValue(this.pageNo,1,"pageNo");
	topApiCheck.checkMaxValue(this.pageSize,100,"pageSize");
	topApiCheck.checkMinValue(this.pageSize,1,"pageSize");
};

