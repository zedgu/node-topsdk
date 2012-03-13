
/**
 * TOP API: taobao.wlb.item.consignment.page.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 代销商宝贝id
	 **/
	this.icItemId;
	
	/** 
	 * 供应商商品id
	 **/
	this.ownerItemId;
	
	/** 
	 * 供应商用户昵称
	 **/
	this.ownerUserNick;
	
	this.apiParas = [];
};

request.prototype.setIcItemId = function(icItemId) {
	this.icItemId = icItemId;
	this.apiParas["ic_item_id"] = icItemId;
};

request.prototype.getIcItemId = function() {
	return this.icItemId;
};

request.prototype.setOwnerItemId = function(ownerItemId) {
	this.ownerItemId = ownerItemId;
	this.apiParas["owner_item_id"] = ownerItemId;
};

request.prototype.getOwnerItemId = function() {
	return this.ownerItemId;
};

request.prototype.setOwnerUserNick = function(ownerUserNick) {
	this.ownerUserNick = ownerUserNick;
	this.apiParas["owner_user_nick"] = ownerUserNick;
};

request.prototype.getOwnerUserNick = function() {
	return this.ownerUserNick;
};

request.prototype.getApiMethodName = function() {
	return "taobao.wlb.item.consignment.page.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
};

