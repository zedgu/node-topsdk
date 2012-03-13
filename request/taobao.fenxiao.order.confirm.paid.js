
/**
 * TOP API: taobao.fenxiao.order.confirm.paid request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 确认支付信息（字数小于100）
	 **/
	this.confirmRemark;
	
	/** 
	 * 采购单编号。
	 **/
	this.purchaseOrderId;
	
	this.apiParas = [];
};

request.prototype.setConfirmRemark = function(confirmRemark) {
	this.confirmRemark = confirmRemark;
	this.apiParas["confirm_remark"] = confirmRemark;
};

request.prototype.getConfirmRemark = function() {
	return this.confirmRemark;
};

request.prototype.setPurchaseOrderId = function(purchaseOrderId) {
	this.purchaseOrderId = purchaseOrderId;
	this.apiParas["purchase_order_id"] = purchaseOrderId;
};

request.prototype.getPurchaseOrderId = function() {
	return this.purchaseOrderId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.fenxiao.order.confirm.paid";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.purchaseOrderId,"purchaseOrderId");
};

