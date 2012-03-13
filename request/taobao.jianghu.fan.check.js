
/**
 * TOP API: taobao.jianghu.fan.check request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 粉丝的id
	 **/
	this.followerId;
	
	/** 
	 * 达人的id值
	 **/
	this.userId;
	
	this.apiParas = [];
};

request.prototype.setFollowerId = function(followerId) {
	this.followerId = followerId;
	this.apiParas["follower_id"] = followerId;
};

request.prototype.getFollowerId = function() {
	return this.followerId;
};

request.prototype.setUserId = function(userId) {
	this.userId = userId;
	this.apiParas["user_id"] = userId;
};

request.prototype.getUserId = function() {
	return this.userId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.jianghu.fan.check";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.followerId,"followerId");
	topApiCheck.checkNotNull(this.userId,"userId");
};

