
/**
 * TOP API: taobao.item.sku.price.update request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * sku所属商品的价格。当用户更新sku，使商品价格不属于sku价格之间的时候，用于修改商品的价格，使sku能够更新成功
	 **/
	this.itemPrice;
	
	/** 
	 * Sku文字的版本。可选值:zh_HK(繁体),zh_CN(简体);默认值:zh_CN
	 **/
	this.lang;
	
	/** 
	 * Sku所属商品数字id，可通过 taobao.item.get 获取
	 **/
	this.numIid;
	
	/** 
	 * Sku的商家外部id
	 **/
	this.outerId;
	
	/** 
	 * Sku的销售价格。精确到2位小数;单位:元。如:200.07，表示:200元7分。修改后的sku价格要保证商品的价格在所有sku价格所形成的价格区间内（例如：商品价格为6元，sku价格有5元、10元两种，如果要修改5元sku的价格，那么修改的范围只能是0-6元之间；如果要修改10元的sku，那么修改的范围只能是6到无穷大的区间中）
	 **/
	this.price;
	
	/** 
	 * Sku属性串。格式:pid:vid;pid:vid,如: 1627207:3232483;1630696:3284570,表示机身颜色:军绿色;手机套餐:一电一充
	 **/
	this.properties;
	
	/** 
	 * Sku的库存数量。sku的总数量应该小于等于商品总数量(Item的NUM)，sku数量变化后item的总数量也会随着变化。取值范围:大于等于零的整数
	 **/
	this.quantity;
	
	this.apiParas = [];
};

request.prototype.setItemPrice = function(itemPrice) {
	this.itemPrice = itemPrice;
	this.apiParas["item_price"] = itemPrice;
};

request.prototype.getItemPrice = function() {
	return this.itemPrice;
};

request.prototype.setLang = function(lang) {
	this.lang = lang;
	this.apiParas["lang"] = lang;
};

request.prototype.getLang = function() {
	return this.lang;
};

request.prototype.setNumIid = function(numIid) {
	this.numIid = numIid;
	this.apiParas["num_iid"] = numIid;
};

request.prototype.getNumIid = function() {
	return this.numIid;
};

request.prototype.setOuterId = function(outerId) {
	this.outerId = outerId;
	this.apiParas["outer_id"] = outerId;
};

request.prototype.getOuterId = function() {
	return this.outerId;
};

request.prototype.setPrice = function(price) {
	this.price = price;
	this.apiParas["price"] = price;
};

request.prototype.getPrice = function() {
	return this.price;
};

request.prototype.setProperties = function(properties) {
	this.properties = properties;
	this.apiParas["properties"] = properties;
};

request.prototype.getProperties = function() {
	return this.properties;
};

request.prototype.setQuantity = function(quantity) {
	this.quantity = quantity;
	this.apiParas["quantity"] = quantity;
};

request.prototype.getQuantity = function() {
	return this.quantity;
};

request.prototype.getApiMethodName = function() {
	return "taobao.item.sku.price.update";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.numIid,"numIid");
	topApiCheck.checkMinValue(this.numIid,0,"numIid");
	topApiCheck.checkNotNull(this.properties,"properties");
	topApiCheck.checkMinValue(this.quantity,0,"quantity");
};

