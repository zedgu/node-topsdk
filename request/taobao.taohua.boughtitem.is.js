
/**
 * TOP API: taobao.taohua.boughtitem.is request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 商品ID
	 **/
	this.itemId;
	
	this.apiParas = [];
};

request.prototype.setItemId = function(itemId) {
	this.itemId = itemId;
	this.apiParas["item_id"] = itemId;
};

request.prototype.getItemId = function() {
	return this.itemId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.taohua.boughtitem.is";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.itemId,"itemId");
};

