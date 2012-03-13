
/**
 * TOP API: taobao.topats.trade.accountreport.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 账务日期查询结束时间。查询结束时间必须大于查询开始时间，并且时间跨度不能超过3个月。
	 **/
	this.endCreated;
	
	/** 
	 * 返回信息包含的字段，详情请见TradeAccountDetail结构体说明
http://api.taobao.com/apidoc/dataStruct.htm?path=cid:5-dataStructId:10152
	 **/
	this.fields;
	
	/** 
	 * 账务日期开始时间，时间必须大于2010-06-10 00:00:00
	 **/
	this.startCreated;
	
	this.apiParas = [];
};

request.prototype.setEndCreated = function(endCreated) {
	this.endCreated = endCreated;
	this.apiParas["end_created"] = endCreated;
};

request.prototype.getEndCreated = function() {
	return this.endCreated;
};

request.prototype.setFields = function(fields) {
	this.fields = fields;
	this.apiParas["fields"] = fields;
};

request.prototype.getFields = function() {
	return this.fields;
};

request.prototype.setStartCreated = function(startCreated) {
	this.startCreated = startCreated;
	this.apiParas["start_created"] = startCreated;
};

request.prototype.getStartCreated = function() {
	return this.startCreated;
};

request.prototype.getApiMethodName = function() {
	return "taobao.topats.trade.accountreport.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.endCreated,"endCreated");
	topApiCheck.checkNotNull(this.fields,"fields");
	topApiCheck.checkNotNull(this.startCreated,"startCreated");
};

