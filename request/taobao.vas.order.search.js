
/**
 * TOP API: taobao.vas.order.search request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 应用收费代码，从合作伙伴后台（my.open.taobao.com）-收费管理-收费项目列表 能够获得该应用的收费代码
	 **/
	this.articleCode;
	
	/** 
	 * 订单号
	 **/
	this.bizOrderId;
	
	/** 
	 * 订单类型，1=新订 2=续订 3=升级 4=后台赠送 5=后台自动续订 6=订单审核后生成订购关系（暂时用不到） 空=全部
	 **/
	this.bizType;
	
	/** 
	 * 订单创建时间（订购时间）结束值
	 **/
	this.endCreated;
	
	/** 
	 * 收费项目代码，从合作伙伴后台（my.open.taobao.com）-收费管理-收费项目列表 能够获得收费项目代码
	 **/
	this.itemCode;
	
	/** 
	 * 淘宝会员名
	 **/
	this.nick;
	
	/** 
	 * 子订单号
	 **/
	this.orderId;
	
	/** 
	 * 页码
	 **/
	this.pageNo;
	
	/** 
	 * 一页包含的记录数
	 **/
	this.pageSize;
	
	/** 
	 * 订单创建时间（订购时间）起始值（当start_created和end_created都不填写时，默认返回最近90天的数据）
	 **/
	this.startCreated;
	
	this.apiParas = [];
};

request.prototype.setArticleCode = function(articleCode) {
	this.articleCode = articleCode;
	this.apiParas["article_code"] = articleCode;
};

request.prototype.getArticleCode = function() {
	return this.articleCode;
};

request.prototype.setBizOrderId = function(bizOrderId) {
	this.bizOrderId = bizOrderId;
	this.apiParas["biz_order_id"] = bizOrderId;
};

request.prototype.getBizOrderId = function() {
	return this.bizOrderId;
};

request.prototype.setBizType = function(bizType) {
	this.bizType = bizType;
	this.apiParas["biz_type"] = bizType;
};

request.prototype.getBizType = function() {
	return this.bizType;
};

request.prototype.setEndCreated = function(endCreated) {
	this.endCreated = endCreated;
	this.apiParas["end_created"] = endCreated;
};

request.prototype.getEndCreated = function() {
	return this.endCreated;
};

request.prototype.setItemCode = function(itemCode) {
	this.itemCode = itemCode;
	this.apiParas["item_code"] = itemCode;
};

request.prototype.getItemCode = function() {
	return this.itemCode;
};

request.prototype.setNick = function(nick) {
	this.nick = nick;
	this.apiParas["nick"] = nick;
};

request.prototype.getNick = function() {
	return this.nick;
};

request.prototype.setOrderId = function(orderId) {
	this.orderId = orderId;
	this.apiParas["order_id"] = orderId;
};

request.prototype.getOrderId = function() {
	return this.orderId;
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

request.prototype.setStartCreated = function(startCreated) {
	this.startCreated = startCreated;
	this.apiParas["start_created"] = startCreated;
};

request.prototype.getStartCreated = function() {
	return this.startCreated;
};

request.prototype.getApiMethodName = function() {
	return "taobao.vas.order.search";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.articleCode,"articleCode");
	topApiCheck.checkMaxValue(this.pageSize,200,"pageSize");
};

