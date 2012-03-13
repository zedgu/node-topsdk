
/**
 * TOP API: taobao.wlb.tradeorder.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 指定交易类型的交易号
	 **/
	this.tradeId;
	
	/** 
	 * 交易类型:
TAOBAO--淘宝交易
PAIPAI--拍拍交易
YOUA--有啊交易
	 **/
	this.tradeType;
	
	this.apiParas = [];
};

request.prototype.setTradeId = function(tradeId) {
	this.tradeId = tradeId;
	this.apiParas["trade_id"] = tradeId;
};

request.prototype.getTradeId = function() {
	return this.tradeId;
};

request.prototype.setTradeType = function(tradeType) {
	this.tradeType = tradeType;
	this.apiParas["trade_type"] = tradeType;
};

request.prototype.getTradeType = function() {
	return this.tradeType;
};

request.prototype.getApiMethodName = function() {
	return "taobao.wlb.tradeorder.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.tradeId,"tradeId");
	topApiCheck.checkNotNull(this.tradeType,"tradeType");
};

