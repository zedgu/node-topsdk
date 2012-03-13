
/**
 * TOP API: taobao.wlb.item.add request
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
	 * 货类
	 **/
	this.goodsCat;
	
	/** 
	 * 商品高度，单位毫米
	 **/
	this.height;
	
	/** 
	 * 是否危险品
	 **/
	this.isDangerous;
	
	/** 
	 * 是否易碎品
	 **/
	this.isFriable;
	
	/** 
	 * 是否sku
	 **/
	this.isSku;
	
	/** 
	 * 商品编码
	 **/
	this.itemCode;
	
	/** 
	 * 商品长度，单位毫米
	 **/
	this.length;
	
	/** 
	 * 商品名称
	 **/
	this.name;
	
	/** 
	 * 商品包装材料类型
	 **/
	this.packageMaterial;
	
	/** 
	 * 商品价格，单位：分
	 **/
	this.price;
	
	/** 
	 * 计价货类
	 **/
	this.pricingCat;
	
	/** 
	 * 属性名列表,目前支持的属性：
毛重:GWeight	
净重:Nweight
皮重: Tweight
自定义属性：
paramkey1
paramkey2
paramkey3
paramkey4
	 **/
	this.proNameList;
	
	/** 
	 * 属性值列表：
10,8
	 **/
	this.proValueList;
	
	/** 
	 * 商品备注
	 **/
	this.remark;
	
	/** 
	 * 是否支持批次
	 **/
	this.supportBatch;
	
	/** 
	 * 商品标题
	 **/
	this.title;
	
	/** 
	 * NORMAL--普通商品
COMBINE--组合商品
DISTRIBUTION--分销
	 **/
	this.type;
	
	/** 
	 * 商品体积，单位立方厘米
	 **/
	this.volume;
	
	/** 
	 * 商品重量，单位G
	 **/
	this.weight;
	
	/** 
	 * 商品宽度，单位毫米
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

request.prototype.setIsSku = function(isSku) {
	this.isSku = isSku;
	this.apiParas["is_sku"] = isSku;
};

request.prototype.getIsSku = function() {
	return this.isSku;
};

request.prototype.setItemCode = function(itemCode) {
	this.itemCode = itemCode;
	this.apiParas["item_code"] = itemCode;
};

request.prototype.getItemCode = function() {
	return this.itemCode;
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

request.prototype.setPrice = function(price) {
	this.price = price;
	this.apiParas["price"] = price;
};

request.prototype.getPrice = function() {
	return this.price;
};

request.prototype.setPricingCat = function(pricingCat) {
	this.pricingCat = pricingCat;
	this.apiParas["pricing_cat"] = pricingCat;
};

request.prototype.getPricingCat = function() {
	return this.pricingCat;
};

request.prototype.setProNameList = function(proNameList) {
	this.proNameList = proNameList;
	this.apiParas["pro_name_list"] = proNameList;
};

request.prototype.getProNameList = function() {
	return this.proNameList;
};

request.prototype.setProValueList = function(proValueList) {
	this.proValueList = proValueList;
	this.apiParas["pro_value_list"] = proValueList;
};

request.prototype.getProValueList = function() {
	return this.proValueList;
};

request.prototype.setRemark = function(remark) {
	this.remark = remark;
	this.apiParas["remark"] = remark;
};

request.prototype.getRemark = function() {
	return this.remark;
};

request.prototype.setSupportBatch = function(supportBatch) {
	this.supportBatch = supportBatch;
	this.apiParas["support_batch"] = supportBatch;
};

request.prototype.getSupportBatch = function() {
	return this.supportBatch;
};

request.prototype.setTitle = function(title) {
	this.title = title;
	this.apiParas["title"] = title;
};

request.prototype.getTitle = function() {
	return this.title;
};

request.prototype.setType = function(type) {
	this.type = type;
	this.apiParas["type"] = type;
};

request.prototype.getType = function() {
	return this.type;
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
	return "taobao.wlb.item.add";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.isSku,"isSku");
	topApiCheck.checkNotNull(this.itemCode,"itemCode");
	topApiCheck.checkNotNull(this.name,"name");
};

