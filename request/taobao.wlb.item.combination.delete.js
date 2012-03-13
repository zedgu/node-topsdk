
/**
 * TOP API: taobao.wlb.item.combination.delete request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 组合商品的id列表
	 **/
	this.destItemList;
	
	/** 
	 * 组合关系的商品id
	 **/
	this.itemId;
	
	this.apiParas = [];
};

request.prototype.setDestItemList = function(destItemList) {
	this.destItemList = destItemList;
	this.apiParas["dest_item_list"] = destItemList;
};

request.prototype.getDestItemList = function() {
	return this.destItemList;
};

request.prototype.setItemId = function(itemId) {
	this.itemId = itemId;
	this.apiParas["item_id"] = itemId;
};

request.prototype.getItemId = function() {
	return this.itemId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.wlb.item.combination.delete";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.destItemList,"destItemList");
	topApiCheck.checkNotNull(this.itemId,"itemId");
};

