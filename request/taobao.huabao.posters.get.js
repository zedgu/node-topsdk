
/**
 * TOP API: taobao.huabao.posters.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 频道的Id值
	 **/
	this.channelId;
	
	/** 
	 * 当前页，默认为1（当输入为负，零，或者超出页数范围时，取默认值）
	 **/
	this.pageNo;
	
	/** 
	 * 查询返回的记录数
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
	return "taobao.huabao.posters.get";
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

