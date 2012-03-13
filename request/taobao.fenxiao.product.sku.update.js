
/**
 * TOP API: taobao.fenxiao.product.sku.update request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 代销采购价
	 **/
	this.agentCostPrice;
	
	/** 
	 * 经销采购价
	 **/
	this.dealerCostPrice;
	
	/** 
	 * 产品ID
	 **/
	this.productId;
	
	/** 
	 * sku属性
	 **/
	this.properties;
	
	/** 
	 * 产品SKU库存
	 **/
	this.quantity;
	
	/** 
	 * 商家编码
	 **/
	this.skuNumber;
	
	/** 
	 * 市场价
	 **/
	this.standardPrice;
	
	this.apiParas = [];
};

request.prototype.setAgentCostPrice = function(agentCostPrice) {
	this.agentCostPrice = agentCostPrice;
	this.apiParas["agent_cost_price"] = agentCostPrice;
};

request.prototype.getAgentCostPrice = function() {
	return this.agentCostPrice;
};

request.prototype.setDealerCostPrice = function(dealerCostPrice) {
	this.dealerCostPrice = dealerCostPrice;
	this.apiParas["dealer_cost_price"] = dealerCostPrice;
};

request.prototype.getDealerCostPrice = function() {
	return this.dealerCostPrice;
};

request.prototype.setProductId = function(productId) {
	this.productId = productId;
	this.apiParas["product_id"] = productId;
};

request.prototype.getProductId = function() {
	return this.productId;
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

request.prototype.setSkuNumber = function(skuNumber) {
	this.skuNumber = skuNumber;
	this.apiParas["sku_number"] = skuNumber;
};

request.prototype.getSkuNumber = function() {
	return this.skuNumber;
};

request.prototype.setStandardPrice = function(standardPrice) {
	this.standardPrice = standardPrice;
	this.apiParas["standard_price"] = standardPrice;
};

request.prototype.getStandardPrice = function() {
	return this.standardPrice;
};

request.prototype.getApiMethodName = function() {
	return "taobao.fenxiao.product.sku.update";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.productId,"productId");
	topApiCheck.checkNotNull(this.properties,"properties");
};

