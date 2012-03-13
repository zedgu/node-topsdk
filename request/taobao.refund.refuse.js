
/**
 * TOP API: taobao.refund.refuse request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 退款记录对应的交易子订单号
	 **/
	this.oid;
	
	/** 
	 * 退款单号
	 **/
	this.refundId;
	
	/** 
	 * 拒绝退款时的说明信息，长度2-200
	 **/
	this.refuseMessage;
	
	/** 
	 * 拒绝退款时的退款凭证，一般是卖家拒绝退款时使用的发货凭证，最大长度130000字节，支持的图片格式：GIF, JPG, PNG
	 **/
	this.refuseProof;
	
	/** 
	 * 退款记录对应的交易订单号
	 **/
	this.tid;
	
	this.apiParas = [];
};

request.prototype.setOid = function(oid) {
	this.oid = oid;
	this.apiParas["oid"] = oid;
};

request.prototype.getOid = function() {
	return this.oid;
};

request.prototype.setRefundId = function(refundId) {
	this.refundId = refundId;
	this.apiParas["refund_id"] = refundId;
};

request.prototype.getRefundId = function() {
	return this.refundId;
};

request.prototype.setRefuseMessage = function(refuseMessage) {
	this.refuseMessage = refuseMessage;
	this.apiParas["refuse_message"] = refuseMessage;
};

request.prototype.getRefuseMessage = function() {
	return this.refuseMessage;
};

request.prototype.setRefuseProof = function(refuseProof) {
	this.refuseProof = refuseProof;
	this.apiParas["refuse_proof"] = refuseProof;
};

request.prototype.getRefuseProof = function() {
	return this.refuseProof;
};

request.prototype.setTid = function(tid) {
	this.tid = tid;
	this.apiParas["tid"] = tid;
};

request.prototype.getTid = function() {
	return this.tid;
};

request.prototype.getApiMethodName = function() {
	return "taobao.refund.refuse";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.oid,"oid");
	topApiCheck.checkNotNull(this.refundId,"refundId");
	topApiCheck.checkNotNull(this.refuseMessage,"refuseMessage");
	topApiCheck.checkMaxLength(this.refuseMessage,200,"refuseMessage");
	topApiCheck.checkNotNull(this.tid,"tid");
};

