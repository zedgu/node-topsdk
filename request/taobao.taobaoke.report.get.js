
/**
 * TOP API: taobao.taobaoke.report.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 需要查询报表的日期，有效的日期为最近3个月内的某一天，格式为:yyyyMMdd,如20090520.
	 **/
	this.date;
	
	/** 
	 * 需返回的字段列表.可选值:TaobaokeReportMember淘宝客报表成员结构体中的所有字段;字段之间用","分隔.
	 **/
	this.fields;
	
	/** 
	 * 当前页数.只能获取1-99页数据
	 **/
	this.pageNo;
	
	/** 
	 * 每页返回结果数,默认是40条.最大每页100
	 **/
	this.pageSize;
	
	this.apiParas = [];
};

request.prototype.setDate = function(date) {
	this.date = date;
	this.apiParas["date"] = date;
};

request.prototype.getDate = function() {
	return this.date;
};

request.prototype.setFields = function(fields) {
	this.fields = fields;
	this.apiParas["fields"] = fields;
};

request.prototype.getFields = function() {
	return this.fields;
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

request.prototype.getApiMethodName = function() {
	return "taobao.taobaoke.report.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.date,"date");
	topApiCheck.checkNotNull(this.fields,"fields");
	topApiCheck.checkMaxValue(this.pageNo,99,"pageNo");
	topApiCheck.checkMinValue(this.pageNo,1,"pageNo");
	topApiCheck.checkMaxValue(this.pageSize,100,"pageSize");
};

