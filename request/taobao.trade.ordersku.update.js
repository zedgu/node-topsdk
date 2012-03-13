
/**
 * TOP API: taobao.trade.ordersku.update request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 子订单编号（对于单笔订单的交易可以传交易编号）。
	 **/
	this.oid;
	
	/** 
	 * 销售属性编号，可以通过taobao.item.skus.get获取订单对应的商品的所有销售属性。
	 **/
	this.skuId;
	
	/** 
	 * 销售属性组合串，格式：p1:v1;p2:v2，如：1627207:28329;20509:28314。可以通过taobao.item.skus.get获取订单对应的商品的所有销售属性。
	 **/
	this.skuProps;
	
	this.apiParas = [];
};

request.prototype.setOid = function(oid) {
	this.oid = oid;
	this.apiParas["oid"] = oid;
};

request.prototype.getOid = function() {
	return this.oid;
};

request.prototype.setSkuId = function(skuId) {
	this.skuId = skuId;
	this.apiParas["sku_id"] = skuId;
};

request.prototype.getSkuId = function() {
	return this.skuId;
};

request.prototype.setSkuProps = function(skuProps) {
	this.skuProps = skuProps;
	this.apiParas["sku_props"] = skuProps;
};

request.prototype.getSkuProps = function() {
	return this.skuProps;
};

request.prototype.getApiMethodName = function() {
	return "taobao.trade.ordersku.update";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.oid,"oid");
};

