
/**
 * TOP API: taobao.logistics.partners.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 货物价格.只有当选择货到付款此参数才会有效
	 **/
	this.goodsValue;
	
	/** 
	 * 是否需要揽收资费信息，默认false。在此值为false时，返回内容中将无carriage。在未设置source_id或target_id的情况下，无法查询揽收资费信息。自己联系无揽收资费记录。
	 **/
	this.isNeedCarriage;
	
	/** 
	 * 服务类型，根据此参数可查出提供相应服务类型的物流公司信息(物流公司状态正常)，可选值：cod(货到付款)、online(在线下单)、 offline(自己联系)、limit(限时物流)。然后再根据source_id,target_id,goods_value这三个条件来过滤物流公司. 目前输入自己联系服务类型将会返回空，因为自己联系并没有具体的服务信息，所以不会有记录。
	 **/
	this.serviceType;
	
	/** 
	 * 物流公司揽货地地区码.参考:http://www.stats.gov.cn/tjbz/xzqhdm/t20100623_402652267.htm  或者调用 taobao.areas.get 获取
	 **/
	this.sourceId;
	
	/** 
	 * 物流公司派送地地区码.参考:http://www.stats.gov.cn/tjbz/xzqhdm/t20100623_402652267.htm  或者调用 taobao.areas.get 获取
	 **/
	this.targetId;
	
	this.apiParas = [];
};

request.prototype.setGoodsValue = function(goodsValue) {
	this.goodsValue = goodsValue;
	this.apiParas["goods_value"] = goodsValue;
};

request.prototype.getGoodsValue = function() {
	return this.goodsValue;
};

request.prototype.setIsNeedCarriage = function(isNeedCarriage) {
	this.isNeedCarriage = isNeedCarriage;
	this.apiParas["is_need_carriage"] = isNeedCarriage;
};

request.prototype.getIsNeedCarriage = function() {
	return this.isNeedCarriage;
};

request.prototype.setServiceType = function(serviceType) {
	this.serviceType = serviceType;
	this.apiParas["service_type"] = serviceType;
};

request.prototype.getServiceType = function() {
	return this.serviceType;
};

request.prototype.setSourceId = function(sourceId) {
	this.sourceId = sourceId;
	this.apiParas["source_id"] = sourceId;
};

request.prototype.getSourceId = function() {
	return this.sourceId;
};

request.prototype.setTargetId = function(targetId) {
	this.targetId = targetId;
	this.apiParas["target_id"] = targetId;
};

request.prototype.getTargetId = function() {
	return this.targetId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.logistics.partners.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.serviceType,"serviceType");
};

