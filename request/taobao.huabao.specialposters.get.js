
/**
 * TOP API: taobao.huabao.specialposters.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 频道Id
	 **/
	this.channelIds;
	
	/** 
	 * 返回的记录数，默认10条，最多20条，如果请求超过20或者小于等于10，则按10条返回 type为NEW时该参数无效,返回为指定频道的最新的一条记录
	 **/
	this.number;
	
	/** 
	 * 类型可选：HOT(热门），RECOMMEND（推荐），NEW（最新）
	 **/
	this.type;
	
	this.apiParas = [];
};

request.prototype.setChannelIds = function(channelIds) {
	this.channelIds = channelIds;
	this.apiParas["channel_ids"] = channelIds;
};

request.prototype.getChannelIds = function() {
	return this.channelIds;
};

request.prototype.setNumber = function(number) {
	this.number = number;
	this.apiParas["number"] = number;
};

request.prototype.getNumber = function() {
	return this.number;
};

request.prototype.setType = function(type) {
	this.type = type;
	this.apiParas["type"] = type;
};

request.prototype.getType = function() {
	return this.type;
};

request.prototype.getApiMethodName = function() {
	return "taobao.huabao.specialposters.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.channelIds,"channelIds");
	topApiCheck.checkMaxListSize(this.channelIds,15,"channelIds");
	topApiCheck.checkNotNull(this.type,"type");
};

