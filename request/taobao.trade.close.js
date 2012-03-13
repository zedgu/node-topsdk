
/**
 * TOP API: taobao.trade.close request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 交易关闭原因。
可以选择的理由有：
1、我不想买了
2、信息填写错误，重新拍
3、卖家缺货
4、同城见面交易
5、其他原因
注：（请不要选择其他自定义的关闭理由）
	 **/
	this.closeReason;
	
	/** 
	 * 主订单或子订单编号。
	 **/
	this.tid;
	
	this.apiParas = [];
};

request.prototype.setCloseReason = function(closeReason) {
	this.closeReason = closeReason;
	this.apiParas["close_reason"] = closeReason;
};

request.prototype.getCloseReason = function() {
	return this.closeReason;
};

request.prototype.setTid = function(tid) {
	this.tid = tid;
	this.apiParas["tid"] = tid;
};

request.prototype.getTid = function() {
	return this.tid;
};

request.prototype.getApiMethodName = function() {
	return "taobao.trade.close";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.closeReason,"closeReason");
	topApiCheck.checkNotNull(this.tid,"tid");
};

