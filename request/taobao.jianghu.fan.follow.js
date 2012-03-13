
/**
 * TOP API: taobao.jianghu.fan.follow request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 掌柜的id，被关注者的id
	 **/
	this.shopOwnerId;
	
	this.apiParas = [];
};

request.prototype.setShopOwnerId = function(shopOwnerId) {
	this.shopOwnerId = shopOwnerId;
	this.apiParas["shop_owner_id"] = shopOwnerId;
};

request.prototype.getShopOwnerId = function() {
	return this.shopOwnerId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.jianghu.fan.follow";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.shopOwnerId,"shopOwnerId");
};

