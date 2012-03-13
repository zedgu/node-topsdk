
/**
 * TOP API: taobao.poster.appointedposters.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * HOT(热门），RECOMMEND（推荐）
	 **/
	this.appointedType;
	
	/** 
	 * 频道ID列表
	 **/
	this.channelIds;
	
	/** 
	 * 请求返回的记录数，默认10条，最多20条，如果请求超过20或者小于等于0，则按10条返回
	 **/
	this.reNum;
	
	this.apiParas = [];
};

request.prototype.setAppointedType = function(appointedType) {
	this.appointedType = appointedType;
	this.apiParas["appointed_type"] = appointedType;
};

request.prototype.getAppointedType = function() {
	return this.appointedType;
};

request.prototype.setChannelIds = function(channelIds) {
	this.channelIds = channelIds;
	this.apiParas["channel_ids"] = channelIds;
};

request.prototype.getChannelIds = function() {
	return this.channelIds;
};

request.prototype.setReNum = function(reNum) {
	this.reNum = reNum;
	this.apiParas["re_num"] = reNum;
};

request.prototype.getReNum = function() {
	return this.reNum;
};

request.prototype.getApiMethodName = function() {
	return "taobao.poster.appointedposters.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.appointedType,"appointedType");
	topApiCheck.checkNotNull(this.channelIds,"channelIds");
	topApiCheck.checkMaxListSize(this.channelIds,15,"channelIds");
};

