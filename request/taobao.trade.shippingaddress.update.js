
/**
 * TOP API: taobao.trade.shippingaddress.update request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 收货地址。最大长度为228个字节。
	 **/
	this.receiverAddress;
	
	/** 
	 * 城市。最大长度为32个字节。如：杭州
	 **/
	this.receiverCity;
	
	/** 
	 * 区/县。最大长度为32个字节。如：西湖区
	 **/
	this.receiverDistrict;
	
	/** 
	 * 移动电话。最大长度为30个字节。
	 **/
	this.receiverMobile;
	
	/** 
	 * 收货人全名。最大长度为50个字节。
	 **/
	this.receiverName;
	
	/** 
	 * 固定电话。最大长度为30个字节。
	 **/
	this.receiverPhone;
	
	/** 
	 * 省份。最大长度为32个字节。如：浙江
	 **/
	this.receiverState;
	
	/** 
	 * 邮政编码。必须由6个数字组成。
	 **/
	this.receiverZip;
	
	/** 
	 * 交易编号。
	 **/
	this.tid;
	
	this.apiParas = [];
};

request.prototype.setReceiverAddress = function(receiverAddress) {
	this.receiverAddress = receiverAddress;
	this.apiParas["receiver_address"] = receiverAddress;
};

request.prototype.getReceiverAddress = function() {
	return this.receiverAddress;
};

request.prototype.setReceiverCity = function(receiverCity) {
	this.receiverCity = receiverCity;
	this.apiParas["receiver_city"] = receiverCity;
};

request.prototype.getReceiverCity = function() {
	return this.receiverCity;
};

request.prototype.setReceiverDistrict = function(receiverDistrict) {
	this.receiverDistrict = receiverDistrict;
	this.apiParas["receiver_district"] = receiverDistrict;
};

request.prototype.getReceiverDistrict = function() {
	return this.receiverDistrict;
};

request.prototype.setReceiverMobile = function(receiverMobile) {
	this.receiverMobile = receiverMobile;
	this.apiParas["receiver_mobile"] = receiverMobile;
};

request.prototype.getReceiverMobile = function() {
	return this.receiverMobile;
};

request.prototype.setReceiverName = function(receiverName) {
	this.receiverName = receiverName;
	this.apiParas["receiver_name"] = receiverName;
};

request.prototype.getReceiverName = function() {
	return this.receiverName;
};

request.prototype.setReceiverPhone = function(receiverPhone) {
	this.receiverPhone = receiverPhone;
	this.apiParas["receiver_phone"] = receiverPhone;
};

request.prototype.getReceiverPhone = function() {
	return this.receiverPhone;
};

request.prototype.setReceiverState = function(receiverState) {
	this.receiverState = receiverState;
	this.apiParas["receiver_state"] = receiverState;
};

request.prototype.getReceiverState = function() {
	return this.receiverState;
};

request.prototype.setReceiverZip = function(receiverZip) {
	this.receiverZip = receiverZip;
	this.apiParas["receiver_zip"] = receiverZip;
};

request.prototype.getReceiverZip = function() {
	return this.receiverZip;
};

request.prototype.setTid = function(tid) {
	this.tid = tid;
	this.apiParas["tid"] = tid;
};

request.prototype.getTid = function() {
	return this.tid;
};

request.prototype.getApiMethodName = function() {
	return "taobao.trade.shippingaddress.update";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkMaxLength(this.receiverAddress,228,"receiverAddress");
	topApiCheck.checkMaxLength(this.receiverCity,32,"receiverCity");
	topApiCheck.checkMaxLength(this.receiverDistrict,32,"receiverDistrict");
	topApiCheck.checkMaxLength(this.receiverMobile,30,"receiverMobile");
	topApiCheck.checkMaxLength(this.receiverName,50,"receiverName");
	topApiCheck.checkMaxLength(this.receiverPhone,30,"receiverPhone");
	topApiCheck.checkMaxLength(this.receiverState,32,"receiverState");
	topApiCheck.checkMaxLength(this.receiverZip,6,"receiverZip");
	topApiCheck.checkNotNull(this.tid,"tid");
};

