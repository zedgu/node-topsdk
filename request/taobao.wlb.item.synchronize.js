
/**
 * TOP API: taobao.wlb.item.synchronize request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 外部实体ID
	 **/
	this.extEntityId;
	
	/** 
	 * 外部实体类型.存如下值
IC_ITEM   --表示IC商品
IC_SKU    --表示IC最小单位商品
若输入其他值，则按IC_ITEM处理
	 **/
	this.extEntityType;
	
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

request.prototype.setExtEntityId = function(extEntityId) {
	this.extEntityId = extEntityId;
	this.apiParas["ext_entity_id"] = extEntityId;
};

request.prototype.getExtEntityId = function() {
	return this.extEntityId;
};

request.prototype.setExtEntityType = function(extEntityType) {
	this.extEntityType = extEntityType;
	this.apiParas["ext_entity_type"] = extEntityType;
};

request.prototype.getExtEntityType = function() {
	return this.extEntityType;
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
	return "taobao.wlb.item.synchronize";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.extEntityId,"extEntityId");
	topApiCheck.checkNotNull(this.extEntityType,"extEntityType");
	topApiCheck.checkNotNull(this.itemId,"itemId");
	topApiCheck.checkNotNull(this.userNick,"userNick");
	topApiCheck.checkMaxLength(this.userNick,64,"userNick");
};

