
/**
 * TOP API: taobao.wlb.inventory.sync request
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
	 * 外部实体类型.存如下值 
IC_ITEM --表示IC商品; 
IC_SKU --表示IC最小单位商品;
WLB_ITEM  --表示WLB商品.
若值不在范围内，则按WLB_ITEM处理
	 **/
	this.itemType;
	
	/** 
	 * 库存数量
	 **/
	this.quantity;
	
	this.apiParas = [];
};

request.prototype.setItemId = function(itemId) {
	this.itemId = itemId;
	this.apiParas["item_id"] = itemId;
};

request.prototype.getItemId = function() {
	return this.itemId;
};

request.prototype.setItemType = function(itemType) {
	this.itemType = itemType;
	this.apiParas["item_type"] = itemType;
};

request.prototype.getItemType = function() {
	return this.itemType;
};

request.prototype.setQuantity = function(quantity) {
	this.quantity = quantity;
	this.apiParas["quantity"] = quantity;
};

request.prototype.getQuantity = function() {
	return this.quantity;
};

request.prototype.getApiMethodName = function() {
	return "taobao.wlb.inventory.sync";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.itemId,"itemId");
	topApiCheck.checkNotNull(this.itemType,"itemType");
	topApiCheck.checkNotNull(this.quantity,"quantity");
};

