
/**
 * TOP API: taobao.wlb.inventory.detail.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 库存类型列表，值包括：
VENDIBLE--可销售库存
FREEZE--冻结库存
ONWAY--在途库存
DEFECT--残次品库存
ENGINE_DAMAGE--机损
BOX_DAMAGE--箱损
	 **/
	this.inventoryTypeList;
	
	/** 
	 * 商品ID
	 **/
	this.itemId;
	
	/** 
	 * 仓库编码
	 **/
	this.storeCode;
	
	this.apiParas = [];
};

request.prototype.setInventoryTypeList = function(inventoryTypeList) {
	this.inventoryTypeList = inventoryTypeList;
	this.apiParas["inventory_type_list"] = inventoryTypeList;
};

request.prototype.getInventoryTypeList = function() {
	return this.inventoryTypeList;
};

request.prototype.setItemId = function(itemId) {
	this.itemId = itemId;
	this.apiParas["item_id"] = itemId;
};

request.prototype.getItemId = function() {
	return this.itemId;
};

request.prototype.setStoreCode = function(storeCode) {
	this.storeCode = storeCode;
	this.apiParas["store_code"] = storeCode;
};

request.prototype.getStoreCode = function() {
	return this.storeCode;
};

request.prototype.getApiMethodName = function() {
	return "taobao.wlb.inventory.detail.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkMaxListSize(this.inventoryTypeList,20,"inventoryTypeList");
	topApiCheck.checkNotNull(this.itemId,"itemId");
};

