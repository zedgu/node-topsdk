
/**
 * TOP API: taobao.fenxiao.product.add request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 警戒库存必须是0到29999。
	 **/
	this.alarmNumber;
	
	/** 
	 * 所属类目id，参考Taobao.itemcats.get，不支持成人等类目，输入成人类目id保存提示类目属性错误。
	 **/
	this.categoryId;
	
	/** 
	 * 所在地：市，例：“杭州”
	 **/
	this.city;
	
	/** 
	 * 代销采购价格，单位：元。例：“10.56”。必须在0.01元到10000000元之间。
	 **/
	this.costPrice;
	
	/** 
	 * 经销采购价，单位：元。例：“10.56”。必须在0.01元到10000000元之间。
	 **/
	this.dealerCostPrice;
	
	/** 
	 * 产品描述，长度为5到25000字符。
	 **/
	this.desc;
	
	/** 
	 * 折扣ID
	 **/
	this.discountId;
	
	/** 
	 * 是否有保修，可选值：false（否）、true（是），默认false。
	 **/
	this.haveGuarantee;
	
	/** 
	 * 是否有发票，可选值：false（否）、true（是），默认false。
	 **/
	this.haveInvoice;
	
	/** 
	 * 产品主图，大小不超过500k，格式为gif,jpg,jpeg,png,bmp等图片
	 **/
	this.image;
	
	/** 
	 * 自定义属性。格式为pid:value;pid:value
	 **/
	this.inputProperties;
	
	/** 
	 * 添加产品时，添加入参isAuthz:yes|no 
yes:需要授权 
no:不需要授权 
默认是需要授权
	 **/
	this.isAuthz;
	
	/** 
	 * 产品名称，长度不超过60个字节。
	 **/
	this.name;
	
	/** 
	 * 商家编码，长度不能超过60个字节。
	 **/
	this.outerId;
	
	/** 
	 * 产品主图图片空间相对路径或绝对路径
	 **/
	this.picPath;
	
	/** 
	 * ems费用，单位：元。例：“10.56”。 大小为0.00元到999999元之间。
	 **/
	this.postageEms;
	
	/** 
	 * 快递费用，单位：元。例：“10.56”。 大小为0.01元到999999元之间。
	 **/
	this.postageFast;
	
	/** 
	 * 运费模板ID，参考taobao.postages.get。
	 **/
	this.postageId;
	
	/** 
	 * 平邮费用，单位：元。例：“10.56”。 大小为0.01元到999999元之间。
	 **/
	this.postageOrdinary;
	
	/** 
	 * 运费类型，可选值：seller（供应商承担运费）、buyer（分销商承担运费）,默认seller。
	 **/
	this.postageType;
	
	/** 
	 * 产品线ID
	 **/
	this.productcatId;
	
	/** 
	 * 产品属性，格式为pid:vid;pid:vid
	 **/
	this.properties;
	
	/** 
	 * 属性别名，格式为：pid:vid:alias;pid:vid:alias（alias为别名）
	 **/
	this.propertyAlias;
	
	/** 
	 * 所在地：省，例：“浙江”
	 **/
	this.prov;
	
	/** 
	 * 产品库存必须是1到999999。
	 **/
	this.quantity;
	
	/** 
	 * 最高零售价，单位：元。例：“10.56”。必须在0.01元到10000000元之间，最高零售价必须大于最低零售价。
	 **/
	this.retailPriceHigh;
	
	/** 
	 * 最低零售价，单位：元。例：“10.56”。必须在0.01元到10000000元之间。
	 **/
	this.retailPriceLow;
	
	/** 
	 * sku的采购价。如果多个，用逗号分隔，并与其他sku信息保持相同顺序
	 **/
	this.skuCostPrices;
	
	/** 
	 * sku的经销采购价。如果多个，用逗号分隔，并与其他sku信息保持相同顺序。其中每个值的单位：元。例：“10.56,12.3”。必须在0.01元到10000000元之间。
	 **/
	this.skuDealerCostPrices;
	
	/** 
	 * sku的商家编码。如果多个，用逗号分隔，并与其他sku信息保持相同顺序
	 **/
	this.skuOuterIds;
	
	/** 
	 * sku的属性。如果多个，用逗号分隔，并与其他sku信息保持相同顺序
	 **/
	this.skuProperties;
	
	/** 
	 * sku的库存。如果多个，用逗号分隔，并与其他sku信息保持相同顺序
	 **/
	this.skuQuantitys;
	
	/** 
	 * sku的市场价。如果多个，用逗号分隔，并与其他sku信息保持相同顺序
	 **/
	this.skuStandardPrices;
	
	/** 
	 * 标准价格，单位：元。例：“10.56”。必须在0.01元到10000000元之间。
	 **/
	this.standardPrice;
	
	/** 
	 * 分销方式：AGENT（只做代销，默认值）、DEALER（只做经销）、ALL（代销和经销都做）
	 **/
	this.tradeType;
	
	this.apiParas = [];
};

request.prototype.setAlarmNumber = function(alarmNumber) {
	this.alarmNumber = alarmNumber;
	this.apiParas["alarm_number"] = alarmNumber;
};

request.prototype.getAlarmNumber = function() {
	return this.alarmNumber;
};

request.prototype.setCategoryId = function(categoryId) {
	this.categoryId = categoryId;
	this.apiParas["category_id"] = categoryId;
};

request.prototype.getCategoryId = function() {
	return this.categoryId;
};

request.prototype.setCity = function(city) {
	this.city = city;
	this.apiParas["city"] = city;
};

request.prototype.getCity = function() {
	return this.city;
};

request.prototype.setCostPrice = function(costPrice) {
	this.costPrice = costPrice;
	this.apiParas["cost_price"] = costPrice;
};

request.prototype.getCostPrice = function() {
	return this.costPrice;
};

request.prototype.setDealerCostPrice = function(dealerCostPrice) {
	this.dealerCostPrice = dealerCostPrice;
	this.apiParas["dealer_cost_price"] = dealerCostPrice;
};

request.prototype.getDealerCostPrice = function() {
	return this.dealerCostPrice;
};

request.prototype.setDesc = function(desc) {
	this.desc = desc;
	this.apiParas["desc"] = desc;
};

request.prototype.getDesc = function() {
	return this.desc;
};

request.prototype.setDiscountId = function(discountId) {
	this.discountId = discountId;
	this.apiParas["discount_id"] = discountId;
};

request.prototype.getDiscountId = function() {
	return this.discountId;
};

request.prototype.setHaveGuarantee = function(haveGuarantee) {
	this.haveGuarantee = haveGuarantee;
	this.apiParas["have_guarantee"] = haveGuarantee;
};

request.prototype.getHaveGuarantee = function() {
	return this.haveGuarantee;
};

request.prototype.setHaveInvoice = function(haveInvoice) {
	this.haveInvoice = haveInvoice;
	this.apiParas["have_invoice"] = haveInvoice;
};

request.prototype.getHaveInvoice = function() {
	return this.haveInvoice;
};

request.prototype.setImage = function(image) {
	this.image = image;
	this.apiParas["image"] = image;
};

request.prototype.getImage = function() {
	return this.image;
};

request.prototype.setInputProperties = function(inputProperties) {
	this.inputProperties = inputProperties;
	this.apiParas["input_properties"] = inputProperties;
};

request.prototype.getInputProperties = function() {
	return this.inputProperties;
};

request.prototype.setIsAuthz = function(isAuthz) {
	this.isAuthz = isAuthz;
	this.apiParas["is_authz"] = isAuthz;
};

request.prototype.getIsAuthz = function() {
	return this.isAuthz;
};

request.prototype.setName = function(name) {
	this.name = name;
	this.apiParas["name"] = name;
};

request.prototype.getName = function() {
	return this.name;
};

request.prototype.setOuterId = function(outerId) {
	this.outerId = outerId;
	this.apiParas["outer_id"] = outerId;
};

request.prototype.getOuterId = function() {
	return this.outerId;
};

request.prototype.setPicPath = function(picPath) {
	this.picPath = picPath;
	this.apiParas["pic_path"] = picPath;
};

request.prototype.getPicPath = function() {
	return this.picPath;
};

request.prototype.setPostageEms = function(postageEms) {
	this.postageEms = postageEms;
	this.apiParas["postage_ems"] = postageEms;
};

request.prototype.getPostageEms = function() {
	return this.postageEms;
};

request.prototype.setPostageFast = function(postageFast) {
	this.postageFast = postageFast;
	this.apiParas["postage_fast"] = postageFast;
};

request.prototype.getPostageFast = function() {
	return this.postageFast;
};

request.prototype.setPostageId = function(postageId) {
	this.postageId = postageId;
	this.apiParas["postage_id"] = postageId;
};

request.prototype.getPostageId = function() {
	return this.postageId;
};

request.prototype.setPostageOrdinary = function(postageOrdinary) {
	this.postageOrdinary = postageOrdinary;
	this.apiParas["postage_ordinary"] = postageOrdinary;
};

request.prototype.getPostageOrdinary = function() {
	return this.postageOrdinary;
};

request.prototype.setPostageType = function(postageType) {
	this.postageType = postageType;
	this.apiParas["postage_type"] = postageType;
};

request.prototype.getPostageType = function() {
	return this.postageType;
};

request.prototype.setProductcatId = function(productcatId) {
	this.productcatId = productcatId;
	this.apiParas["productcat_id"] = productcatId;
};

request.prototype.getProductcatId = function() {
	return this.productcatId;
};

request.prototype.setProperties = function(properties) {
	this.properties = properties;
	this.apiParas["properties"] = properties;
};

request.prototype.getProperties = function() {
	return this.properties;
};

request.prototype.setPropertyAlias = function(propertyAlias) {
	this.propertyAlias = propertyAlias;
	this.apiParas["property_alias"] = propertyAlias;
};

request.prototype.getPropertyAlias = function() {
	return this.propertyAlias;
};

request.prototype.setProv = function(prov) {
	this.prov = prov;
	this.apiParas["prov"] = prov;
};

request.prototype.getProv = function() {
	return this.prov;
};

request.prototype.setQuantity = function(quantity) {
	this.quantity = quantity;
	this.apiParas["quantity"] = quantity;
};

request.prototype.getQuantity = function() {
	return this.quantity;
};

request.prototype.setRetailPriceHigh = function(retailPriceHigh) {
	this.retailPriceHigh = retailPriceHigh;
	this.apiParas["retail_price_high"] = retailPriceHigh;
};

request.prototype.getRetailPriceHigh = function() {
	return this.retailPriceHigh;
};

request.prototype.setRetailPriceLow = function(retailPriceLow) {
	this.retailPriceLow = retailPriceLow;
	this.apiParas["retail_price_low"] = retailPriceLow;
};

request.prototype.getRetailPriceLow = function() {
	return this.retailPriceLow;
};

request.prototype.setSkuCostPrices = function(skuCostPrices) {
	this.skuCostPrices = skuCostPrices;
	this.apiParas["sku_cost_prices"] = skuCostPrices;
};

request.prototype.getSkuCostPrices = function() {
	return this.skuCostPrices;
};

request.prototype.setSkuDealerCostPrices = function(skuDealerCostPrices) {
	this.skuDealerCostPrices = skuDealerCostPrices;
	this.apiParas["sku_dealer_cost_prices"] = skuDealerCostPrices;
};

request.prototype.getSkuDealerCostPrices = function() {
	return this.skuDealerCostPrices;
};

request.prototype.setSkuOuterIds = function(skuOuterIds) {
	this.skuOuterIds = skuOuterIds;
	this.apiParas["sku_outer_ids"] = skuOuterIds;
};

request.prototype.getSkuOuterIds = function() {
	return this.skuOuterIds;
};

request.prototype.setSkuProperties = function(skuProperties) {
	this.skuProperties = skuProperties;
	this.apiParas["sku_properties"] = skuProperties;
};

request.prototype.getSkuProperties = function() {
	return this.skuProperties;
};

request.prototype.setSkuQuantitys = function(skuQuantitys) {
	this.skuQuantitys = skuQuantitys;
	this.apiParas["sku_quantitys"] = skuQuantitys;
};

request.prototype.getSkuQuantitys = function() {
	return this.skuQuantitys;
};

request.prototype.setSkuStandardPrices = function(skuStandardPrices) {
	this.skuStandardPrices = skuStandardPrices;
	this.apiParas["sku_standard_prices"] = skuStandardPrices;
};

request.prototype.getSkuStandardPrices = function() {
	return this.skuStandardPrices;
};

request.prototype.setStandardPrice = function(standardPrice) {
	this.standardPrice = standardPrice;
	this.apiParas["standard_price"] = standardPrice;
};

request.prototype.getStandardPrice = function() {
	return this.standardPrice;
};

request.prototype.setTradeType = function(tradeType) {
	this.tradeType = tradeType;
	this.apiParas["trade_type"] = tradeType;
};

request.prototype.getTradeType = function() {
	return this.tradeType;
};

request.prototype.getApiMethodName = function() {
	return "taobao.fenxiao.product.add";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.alarmNumber,"alarmNumber");
	topApiCheck.checkNotNull(this.categoryId,"categoryId");
	topApiCheck.checkNotNull(this.city,"city");
	topApiCheck.checkNotNull(this.desc,"desc");
	topApiCheck.checkNotNull(this.haveGuarantee,"haveGuarantee");
	topApiCheck.checkNotNull(this.haveInvoice,"haveInvoice");
	topApiCheck.checkNotNull(this.name,"name");
	topApiCheck.checkNotNull(this.postageType,"postageType");
	topApiCheck.checkNotNull(this.productcatId,"productcatId");
	topApiCheck.checkNotNull(this.prov,"prov");
	topApiCheck.checkNotNull(this.quantity,"quantity");
	topApiCheck.checkNotNull(this.retailPriceHigh,"retailPriceHigh");
	topApiCheck.checkNotNull(this.retailPriceLow,"retailPriceLow");
	topApiCheck.checkNotNull(this.standardPrice,"standardPrice");
};

