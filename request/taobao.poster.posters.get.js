
/**
 * TOP API: taobao.poster.posters.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 频道ID
	 **/
	this.channelId;
	
	/** 
	 * 第几页
	 **/
	this.pageNo;
	
	/** 
	 * 每页条数
	 **/
	this.pageSize;
	
	this.apiParas = [];
};

request.prototype.setChannelId = function(channelId) {
	this.channelId = channelId;
	this.apiParas["channel_id"] = channelId;
};

request.prototype.getChannelId = function() {
	return this.channelId;
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
	return "taobao.poster.posters.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.channelId,"channelId");
	topApiCheck.checkMinValue(this.pageNo,1,"pageNo");
	topApiCheck.checkMaxValue(this.pageSize,100,"pageSize");
	topApiCheck.checkMinValue(this.pageSize,10,"pageSize");
};

