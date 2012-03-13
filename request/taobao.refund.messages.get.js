
/**
 * TOP API: taobao.refund.messages.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 需返回的字段列表。可选值：RefundMessage结构体中的所有字段，以半角逗号(,)分隔。
	 **/
	this.fields;
	
	/** 
	 * 页码。取值范围:大于零的整数; 默认值:1
	 **/
	this.pageNo;
	
	/** 
	 * 每页条数。取值范围:大于零的整数; 默认值:40;最大值:100
	 **/
	this.pageSize;
	
	/** 
	 * 退款单号
	 **/
	this.refundId;
	
	this.apiParas = [];
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

request.prototype.setRefundId = function(refundId) {
	this.refundId = refundId;
	this.apiParas["refund_id"] = refundId;
};

request.prototype.getRefundId = function() {
	return this.refundId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.refund.messages.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.fields,"fields");
	topApiCheck.checkMinValue(this.pageNo,1,"pageNo");
	topApiCheck.checkMaxValue(this.pageSize,100,"pageSize");
	topApiCheck.checkMinValue(this.pageSize,1,"pageSize");
	topApiCheck.checkNotNull(this.refundId,"refundId");
};

