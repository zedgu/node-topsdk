
/**
 * TOP API: taobao.taohua.audioreader.tracks.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 有声读物专辑ID
	 **/
	this.itemId;
	
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

request.prototype.setItemId = function(itemId) {
	this.itemId = itemId;
	this.apiParas["item_id"] = itemId;
};

request.prototype.getItemId = function() {
	return this.itemId;
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
	return "taobao.taohua.audioreader.tracks.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.itemId,"itemId");
	topApiCheck.checkMinValue(this.itemId,1,"itemId");
	topApiCheck.checkMaxValue(this.pageNo,100,"pageNo");
	topApiCheck.checkMinValue(this.pageNo,1,"pageNo");
	topApiCheck.checkMaxValue(this.pageSize,100,"pageSize");
	topApiCheck.checkMinValue(this.pageSize,1,"pageSize");
};

