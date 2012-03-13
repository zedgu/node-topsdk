
/**
 * TOP API: taobao.refund.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 需要返回的字段。目前支持有：refund_id, alipay_no, tid, oid, buyer_nick, seller_nick, total_fee, status, created, refund_fee, good_status, has_good_return, payment, reason, desc, num_iid, title, price, num, good_return_time, company_name, sid, address, shipping_type, refund_remind_timeout
	 **/
	this.fields;
	
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

request.prototype.setRefundId = function(refundId) {
	this.refundId = refundId;
	this.apiParas["refund_id"] = refundId;
};

request.prototype.getRefundId = function() {
	return this.refundId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.refund.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.fields,"fields");
	topApiCheck.checkNotNull(this.refundId,"refundId");
	topApiCheck.checkMaxValue(this.refundId,9223372036854775807,"refundId");
	topApiCheck.checkMinValue(this.refundId,1,"refundId");
};

