
/**
 * TOP API: taobao.item.sku.delete request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * sku所属商品的数量,大于0的整数。当用户删除sku，使商品数量不等于sku数量之和时候，用于修改商品的数量，使sku能够删除成功。特别是删除最后一个sku的时候，一定要设置商品数量到正常的值，否则删除失败
	 **/
	this.itemNum;
	
	/** 
	 * sku所属商品的价格。当用户删除sku，使商品价格不属于sku价格之间的时候，用于修改商品的价格，使sku能够删除成功
	 **/
	this.itemPrice;
	
	/** 
	 * Sku文字的版本。可选值:zh_HK(繁体),zh_CN(简体);默认值:zh_CN
	 **/
	this.lang;
	
	/** 
	 * Sku所属商品数字id，可通过 taobao.item.get 获取。必选
	 **/
	this.numIid;
	
	/** 
	 * Sku属性串。格式:pid:vid;pid:vid,如: 1627207:3232483;1630696:3284570,表示机身颜色:军绿色;手机套餐:一电一充
	 **/
	this.properties;
	
	this.apiParas = [];
};

request.prototype.setItemNum = function(itemNum) {
	this.itemNum = itemNum;
	this.apiParas["item_num"] = itemNum;
};

request.prototype.getItemNum = function() {
	return this.itemNum;
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

request.prototype.setProperties = function(properties) {
	this.properties = properties;
	this.apiParas["properties"] = properties;
};

request.prototype.getProperties = function() {
	return this.properties;
};

request.prototype.getApiMethodName = function() {
	return "taobao.item.sku.delete";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.numIid,"numIid");
	topApiCheck.checkNotNull(this.properties,"properties");
};

