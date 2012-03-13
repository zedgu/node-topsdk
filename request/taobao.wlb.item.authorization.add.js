
/**
 * TOP API: taobao.wlb.item.authorization.add request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 授权类型：1=全量授权，0=部分授权
当部分授权时，需要指定授权数量quantity
	 **/
	this.authType;
	
	/** 
	 * 授权结束时间
	 **/
	this.authorizeEndTime;
	
	/** 
	 * 授权开始时间
	 **/
	this.authorizeStartTime;
	
	/** 
	 * 被授权人用户id
	 **/
	this.consignUserNick;
	
	/** 
	 * 商品id列表，以英文逗号,分隔，最多可放入50个商品ID。
	 **/
	this.itemIdList;
	
	/** 
	 * 规则名称
	 **/
	this.name;
	
	/** 
	 * 授权数量
	 **/
	this.quantity;
	
	/** 
	 * 授权规则：目前只有GRANT_FIX，按照数量授权
	 **/
	this.ruleCode;
	
	this.apiParas = [];
};

request.prototype.setAuthType = function(authType) {
	this.authType = authType;
	this.apiParas["auth_type"] = authType;
};

request.prototype.getAuthType = function() {
	return this.authType;
};

request.prototype.setAuthorizeEndTime = function(authorizeEndTime) {
	this.authorizeEndTime = authorizeEndTime;
	this.apiParas["authorize_end_time"] = authorizeEndTime;
};

request.prototype.getAuthorizeEndTime = function() {
	return this.authorizeEndTime;
};

request.prototype.setAuthorizeStartTime = function(authorizeStartTime) {
	this.authorizeStartTime = authorizeStartTime;
	this.apiParas["authorize_start_time"] = authorizeStartTime;
};

request.prototype.getAuthorizeStartTime = function() {
	return this.authorizeStartTime;
};

request.prototype.setConsignUserNick = function(consignUserNick) {
	this.consignUserNick = consignUserNick;
	this.apiParas["consign_user_nick"] = consignUserNick;
};

request.prototype.getConsignUserNick = function() {
	return this.consignUserNick;
};

request.prototype.setItemIdList = function(itemIdList) {
	this.itemIdList = itemIdList;
	this.apiParas["item_id_list"] = itemIdList;
};

request.prototype.getItemIdList = function() {
	return this.itemIdList;
};

request.prototype.setName = function(name) {
	this.name = name;
	this.apiParas["name"] = name;
};

request.prototype.getName = function() {
	return this.name;
};

request.prototype.setQuantity = function(quantity) {
	this.quantity = quantity;
	this.apiParas["quantity"] = quantity;
};

request.prototype.getQuantity = function() {
	return this.quantity;
};

request.prototype.setRuleCode = function(ruleCode) {
	this.ruleCode = ruleCode;
	this.apiParas["rule_code"] = ruleCode;
};

request.prototype.getRuleCode = function() {
	return this.ruleCode;
};

request.prototype.getApiMethodName = function() {
	return "taobao.wlb.item.authorization.add";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.authType,"authType");
	topApiCheck.checkNotNull(this.authorizeEndTime,"authorizeEndTime");
	topApiCheck.checkNotNull(this.authorizeStartTime,"authorizeStartTime");
	topApiCheck.checkNotNull(this.consignUserNick,"consignUserNick");
	topApiCheck.checkNotNull(this.itemIdList,"itemIdList");
	topApiCheck.checkNotNull(this.name,"name");
	topApiCheck.checkMaxLength(this.name,255,"name");
	topApiCheck.checkNotNull(this.ruleCode,"ruleCode");
};

