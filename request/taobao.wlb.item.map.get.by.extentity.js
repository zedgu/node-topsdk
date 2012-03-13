
/**
 * TOP API: taobao.wlb.item.map.get.by.extentity request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 外部实体类型对应的商品id
	 **/
	this.extEntityId;
	
	/** 
	 * 外部实体类型： IC_ITEM--ic商品 IC_SKU--ic销售单元
	 **/
	this.extEntityType;
	
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

request.prototype.getApiMethodName = function() {
	return "taobao.wlb.item.map.get.by.extentity";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.extEntityId,"extEntityId");
	topApiCheck.checkNotNull(this.extEntityType,"extEntityType");
};

