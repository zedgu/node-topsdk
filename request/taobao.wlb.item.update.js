
/**
 * TOP API: taobao.wlb.item.update request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 商品颜色
	 **/
	this.color;
	
	/** 
	 * 需要删除的商品属性key列表
	 **/
	this.deletePropertyKeyList;
	
	/** 
	 * 商品货类
	 **/
	this.goodsCat;
	
	/** 
	 * 商品高度，单位厘米
	 **/
	this.height;
	
	/** 
	 * 要修改的商品id
	 **/
	this.id;
	
	/** 
	 * 是否危险品
	 **/
	this.isDangerous;
	
	/** 
	 * 是否易碎品
	 **/
	this.isFriable;
	
	/** 
	 * 商品长度，单位厘米
	 **/
	this.length;
	
	/** 
	 * 要修改的商品名称
	 **/
	this.name;
	
	/** 
	 * 商品包装材料类型
	 **/
	this.packageMaterial;
	
	/** 
	 * 商品计价货类
	 **/
	this.pricingCat;
	
	/** 
	 * 要修改的商品备注
	 **/
	this.remark;
	
	/** 
	 * 要修改的商品标题
	 **/
	this.title;
	
	/** 
	 * 需要修改的商品属性值的列表，如果属性不存在，则新增属性
	 **/
	this.updatePropertyKeyList;
	
	/** 
	 * 需要修改的属性值的列表
	 **/
	this.updatePropertyValueList;
	
	/** 
	 * 商品体积，单位立方厘米
	 **/
	this.volume;
	
	/** 
	 * 商品重量，单位G
	 **/
	this.weight;
	
	/** 
	 * 商品宽度，单位厘米
	 **/
	this.width;
	
	this.apiParas = [];
};

request.prototype.setColor = function(color) {
	this.color = color;
	this.apiParas["color"] = color;
};

request.prototype.getColor = function() {
	return this.color;
};

request.prototype.setDeletePropertyKeyList = function(deletePropertyKeyList) {
	this.deletePropertyKeyList = deletePropertyKeyList;
	this.apiParas["delete_property_key_list"] = deletePropertyKeyList;
};

request.prototype.getDeletePropertyKeyList = function() {
	return this.deletePropertyKeyList;
};

request.prototype.setGoodsCat = function(goodsCat) {
	this.goodsCat = goodsCat;
	this.apiParas["goods_cat"] = goodsCat;
};

request.prototype.getGoodsCat = function() {
	return this.goodsCat;
};

request.prototype.setHeight = function(height) {
	this.height = height;
	this.apiParas["height"] = height;
};

request.prototype.getHeight = function() {
	return this.height;
};

request.prototype.setId = function(id) {
	this.id = id;
	this.apiParas["id"] = id;
};

request.prototype.getId = function() {
	return this.id;
};

request.prototype.setIsDangerous = function(isDangerous) {
	this.isDangerous = isDangerous;
	this.apiParas["is_dangerous"] = isDangerous;
};

request.prototype.getIsDangerous = function() {
	return this.isDangerous;
};

request.prototype.setIsFriable = function(isFriable) {
	this.isFriable = isFriable;
	this.apiParas["is_friable"] = isFriable;
};

request.prototype.getIsFriable = function() {
	return this.isFriable;
};

request.prototype.setLength = function(length) {
	this.length = length;
	this.apiParas["length"] = length;
};

request.prototype.getLength = function() {
	return this.length;
};

request.prototype.setName = function(name) {
	this.name = name;
	this.apiParas["name"] = name;
};

request.prototype.getName = function() {
	return this.name;
};

request.prototype.setPackageMaterial = function(packageMaterial) {
	this.packageMaterial = packageMaterial;
	this.apiParas["package_material"] = packageMaterial;
};

request.prototype.getPackageMaterial = function() {
	return this.packageMaterial;
};

request.prototype.setPricingCat = function(pricingCat) {
	this.pricingCat = pricingCat;
	this.apiParas["pricing_cat"] = pricingCat;
};

request.prototype.getPricingCat = function() {
	return this.pricingCat;
};

request.prototype.setRemark = function(remark) {
	this.remark = remark;
	this.apiParas["remark"] = remark;
};

request.prototype.getRemark = function() {
	return this.remark;
};

request.prototype.setTitle = function(title) {
	this.title = title;
	this.apiParas["title"] = title;
};

request.prototype.getTitle = function() {
	return this.title;
};

request.prototype.setUpdatePropertyKeyList = function(updatePropertyKeyList) {
	this.updatePropertyKeyList = updatePropertyKeyList;
	this.apiParas["update_property_key_list"] = updatePropertyKeyList;
};

request.prototype.getUpdatePropertyKeyList = function() {
	return this.updatePropertyKeyList;
};

request.prototype.setUpdatePropertyValueList = function(updatePropertyValueList) {
	this.updatePropertyValueList = updatePropertyValueList;
	this.apiParas["update_property_value_list"] = updatePropertyValueList;
};

request.prototype.getUpdatePropertyValueList = function() {
	return this.updatePropertyValueList;
};

request.prototype.setVolume = function(volume) {
	this.volume = volume;
	this.apiParas["volume"] = volume;
};

request.prototype.getVolume = function() {
	return this.volume;
};

request.prototype.setWeight = function(weight) {
	this.weight = weight;
	this.apiParas["weight"] = weight;
};

request.prototype.getWeight = function() {
	return this.weight;
};

request.prototype.setWidth = function(width) {
	this.width = width;
	this.apiParas["width"] = width;
};

request.prototype.getWidth = function() {
	return this.width;
};

request.prototype.getApiMethodName = function() {
	return "taobao.wlb.item.update";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.id,"id");
};

