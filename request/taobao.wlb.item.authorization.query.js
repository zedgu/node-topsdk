
/**
 * TOP API: taobao.wlb.item.authorization.query request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 授权商品ID
	 **/
	this.itemId;
	
	/** 
	 * 授权名称
	 **/
	this.name;
	
	/** 
	 * 当前页
	 **/
	this.pageNo;
	
	/** 
	 * 分页记录个数，如果用户输入的记录数大于50，则一页显示50条记录
	 **/
	this.pageSize;
	
	/** 
	 * 授权编码
	 **/
	this.ruleCode;
	
	/** 
	 * 状态： 只能输入如下值,范围外的默认按VALID处理;不选则查询所有; 
VALID -- 1 有效； INVALIDATION -- 2 失效
	 **/
	this.status;
	
	/** 
	 * 类型：可由不同角色来查询，默认值OWNER,
OWNER -- 授权人,
ON_COMMISSION -- 被授权人
	 **/
	this.type;
	
	this.apiParas = [];
};

request.prototype.setItemId = function(itemId) {
	this.itemId = itemId;
	this.apiParas["item_id"] = itemId;
};

request.prototype.getItemId = function() {
	return this.itemId;
};

request.prototype.setName = function(name) {
	this.name = name;
	this.apiParas["name"] = name;
};

request.prototype.getName = function() {
	return this.name;
};

request.prototype.setPageNo = function(pageNo) {
	this.pageNo = pageNo;
	this.apiParas["page_no"] = pageNo;
};

request.prototype.getPageNo = function() {
	return this.pageNo;
};

request.prototype.setPageSize = function(pageSize) {
	this.pageSize = pageSize;
	this.apiParas["page_size"] = pageSize;
};

request.prototype.getPageSize = function() {
	return this.pageSize;
};

request.prototype.setRuleCode = function(ruleCode) {
	this.ruleCode = ruleCode;
	this.apiParas["rule_code"] = ruleCode;
};

request.prototype.getRuleCode = function() {
	return this.ruleCode;
};

request.prototype.setStatus = function(status) {
	this.status = status;
	this.apiParas["status"] = status;
};

request.prototype.getStatus = function() {
	return this.status;
};

request.prototype.setType = function(type) {
	this.type = type;
	this.apiParas["type"] = type;
};

request.prototype.getType = function() {
	return this.type;
};

request.prototype.getApiMethodName = function() {
	return "taobao.wlb.item.authorization.query";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkMaxLength(this.name,255,"name");
};

