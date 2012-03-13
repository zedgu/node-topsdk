
/**
 * TOP API: taobao.increment.customers.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 需要返回的字段。可填写的字段参见AppCustomer中的返回字段。如：nick,created,status,type,subscriptions。
	 **/
	this.fields;
	
	/** 
	 * 查询用户的昵称。当为空时通过分页方式查询appkey开通的所有用户,最多填入20个昵称。
	 **/
	this.nicks;
	
	/** 
	 * 分页查询时，查询的页码。此参数只有nicks为空时起作用。
	 **/
	this.pageNo;
	
	/** 
	 * 分布查询时，页的大小。此参数只有当nicks为空时起作用。
	 **/
	this.pageSize;
	
	/** 
	 * 查询用户开通的功能。值可为get,notify和syn分别表示增量api取消息，主动发送消息和同步数据功能。这三个值不分次序。在查询时，type里面的参数会根据应用订阅的类型进行相应的过虑。如应用只订阅主动通知，则默认值过滤后为get,notify，如果应用只订阅数据同步服务，默认值过滤后为syn。
	 **/
	this.type;
	
	this.apiParas = [];
};

request.prototype.setFields = function(fields) {
	this.fields = fields;
	this.apiParas["fields"] = fields;
};

request.prototype.getFields = function() {
	return this.fields;
};

request.prototype.setNicks = function(nicks) {
	this.nicks = nicks;
	this.apiParas["nicks"] = nicks;
};

request.prototype.getNicks = function() {
	return this.nicks;
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

request.prototype.setType = function(type) {
	this.type = type;
	this.apiParas["type"] = type;
};

request.prototype.getType = function() {
	return this.type;
};

request.prototype.getApiMethodName = function() {
	return "taobao.increment.customers.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkMaxListSize(this.nicks,20,"nicks");
	topApiCheck.checkMinValue(this.pageNo,0,"pageNo");
	topApiCheck.checkMaxValue(this.pageSize,200,"pageSize");
	topApiCheck.checkMinValue(this.pageSize,0,"pageSize");
	topApiCheck.checkMaxListSize(this.type,3,"type");
};

