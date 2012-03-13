
/**
 * TOP API: taobao.wlb.item.delete request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 商品ID
	 **/
	this.itemId;
	
	/** 
	 * 商品所有人淘宝nick
	 **/
	this.userNick;
	
	this.apiParas = [];
};

request.prototype.setItemId = function(itemId) {
	this.itemId = itemId;
	this.apiParas["item_id"] = itemId;
};

request.prototype.getItemId = function() {
	return this.itemId;
};

request.prototype.setUserNick = function(userNick) {
	this.userNick = userNick;
	this.apiParas["user_nick"] = userNick;
};

request.prototype.getUserNick = function() {
	return this.userNick;
};

request.prototype.getApiMethodName = function() {
	return "taobao.wlb.item.delete";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.itemId,"itemId");
	topApiCheck.checkNotNull(this.userNick,"userNick");
};

