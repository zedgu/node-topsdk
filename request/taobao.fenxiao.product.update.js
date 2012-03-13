
/**
 * TOP API: taobao.fenxiao.product.update request
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
	 * 主图图片，如果pic_path参数不空，则优先使用pic_path，忽略该参数
	 **/
	this.image;
	
	/** 
	 * 自定义属性。格式为pid:value;pid:value
	 **/
	this.inputProperties;
	
	/** 
	 * 产品是否需要授权isAuthz:yes|no 
yes:需要授权 
no:不需要授权
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
	 * 产品ID
	 **/
	this.pid;
	
	/** 
	 * ems费用，单位：元。例：“10.56”。大小为0.01元到999999元之间。更新时必须指定运费类型为buyer，否则不更新。
	 **/
	this.postageEms;
	
	/** 
	 * 快递费用，单位：元。例：“10.56”。大小为0.01元到999999元之间。更新时必须指定运费类型为buyer，否则不更新。
	 **/
	this.postageFast;
	
	/** 
	 * 运费模板ID，参考taobao.postages.get。更新时必须指定运费类型为 buyer，否则不更新。
	 **/
	this.postageId;
	
	/** 
	 * 平邮费用，单位：元。例：“10.56”。大小为0.01元到999999元之间。更新时必须指定运费类型为buyer，否则不更新。
	 **/
	this.postageOrdinary;
	
	/** 
	 * 运费类型，可选值：seller（供应商承担运费）、buyer（分销商承担运费），默认seller。
	 **/
	this.postageType;
	
	/** 
	 * 产品属性
	 **/
	this.properties;
	
	/** 
	 * 属性别名
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
	 * sku采购价格，单位元，例："10.50,11.00,20.50"，字段必须和上面的sku_ids或sku_properties保持一致。
	 **/
	this.skuCostPrices;
	
	/** 
	 * sku的经销采购价。如果多个，用逗号分隔，并与其他sku信息保持相同顺序。其中每个值的单位：元。例：“10.56,12.3”。必须在0.01元到10000000元之间。
	 **/
	this.skuDealerCostPrices;
	
	/** 
	 * sku id列表，例：1001,1002,1003。如果传入sku_properties将忽略此参数。
	 **/
	this.skuIds;
	
	/** 
	 * sku商家编码 ，单位元，例："S1000,S1002,S1003"，字段必须和上面的id或sku_properties保持一致，如果没有可以写成",,"
	 **/
	this.skuOuterIds;
	
	/** 
	 * sku属性。格式:pid:vid;pid:vid,表示一组属性如:1627207:3232483;1630696:3284570,表示一组:机身颜色:军绿色;手机套餐:一电一充。多组之间用逗号“,”区分。(属性的pid调用taobao.itemprops.get取得，属性值的vid用taobao.itempropvalues.get取得vid)
通过此字段可新增和更新sku。若传入此值将忽略sku_ids字段。sku其他字段与此值保持一致。
	 **/
	this.skuProperties;
	
	/** 
	 * 根据sku属性删除sku信息。需要按组删除属性。
	 **/
	this.skuPropertiesDel;
	
	/** 
	 * sku库存，单位元，例："10,20,30"，字段必须和sku_ids或sku_properties保持一致。
	 **/
	this.skuQuantitys;
	
	/** 
	 * sku市场价，单位元，例："10.50,11.00,20.50"，字段必须和上面的sku_ids或sku_properties保持一致。
	 **/
	this.skuStandardPrices;
	
	/** 
	 * 标准价格，单位：元。例：“10.56”。必须在0.01元到10000000元之间。
	 **/
	this.standardPrice;
	
	/** 
	 * 发布状态，可选值：up（上架）、down（下架）、delete（删除），输入非法字符则忽略。
	 **/
	this.status;
	
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

request.prototype.setPid = function(pid) {
	this.pid = pid;
	this.apiParas["pid"] = pid;
};

request.prototype.getPid = function() {
	return this.pid;
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

request.prototype.setSkuIds = function(skuIds) {
	this.skuIds = skuIds;
	this.apiParas["sku_ids"] = skuIds;
};

request.prototype.getSkuIds = function() {
	return this.skuIds;
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

request.prototype.setSkuPropertiesDel = function(skuPropertiesDel) {
	this.skuPropertiesDel = skuPropertiesDel;
	this.apiParas["sku_properties_del"] = skuPropertiesDel;
};

request.prototype.getSkuPropertiesDel = function() {
	return this.skuPropertiesDel;
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

request.prototype.setStatus = function(status) {
	this.status = status;
	this.apiParas["status"] = status;
};

request.prototype.getStatus = function() {
	return this.status;
};

request.prototype.getApiMethodName = function() {
	return "taobao.fenxiao.product.update";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.pid,"pid");
};

