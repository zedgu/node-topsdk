
/**
 * TOP API: taobao.poster.channel.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 根据频道ID获取频道信息
	 **/
	this.channelId;
	
	this.apiParas = [];
};

request.prototype.setChannelId = function(channelId) {
	this.channelId = channelId;
	this.apiParas["channel_id"] = channelId;
};

request.prototype.getChannelId = function() {
	return this.channelId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.poster.channel.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.channelId,"channelId");
};

