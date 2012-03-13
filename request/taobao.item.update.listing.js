
/**
 * TOP API: taobao.item.update.listing request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 需要上架的商品的数量。取值范围:大于零的整数。如果商品有sku，则上架数量默认为所有sku数量总和，不可修改。否则商品数量根据设置数量调整为num
	 **/
	this.num;
	
	/** 
	 * 商品数字ID，该参数必须
	 **/
	this.numIid;
	
	this.apiParas = [];
};

request.prototype.setNum = function(num) {
	this.num = num;
	this.apiParas["num"] = num;
};

request.prototype.getNum = function() {
	return this.num;
};

request.prototype.setNumIid = function(numIid) {
	this.numIid = numIid;
	this.apiParas["num_iid"] = numIid;
};

request.prototype.getNumIid = function() {
	return this.numIid;
};

request.prototype.getApiMethodName = function() {
	return "taobao.item.update.listing";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.num,"num");
	topApiCheck.checkMinValue(this.num,0,"num");
	topApiCheck.checkNotNull(this.numIid,"numIid");
	topApiCheck.checkMinValue(this.numIid,0,"numIid");
};

