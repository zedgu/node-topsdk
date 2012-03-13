
/**
 * TOP API: taobao.hotel.type.add request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 酒店id。必须为数字
	 **/
	this.hid;
	
	/** 
	 * 房型名称。长度不能超过30
	 **/
	this.name;
	
	this.apiParas = [];
};

request.prototype.setHid = function(hid) {
	this.hid = hid;
	this.apiParas["hid"] = hid;
};

request.prototype.getHid = function() {
	return this.hid;
};

request.prototype.setName = function(name) {
	this.name = name;
	this.apiParas["name"] = name;
};

request.prototype.getName = function() {
	return this.name;
};

request.prototype.getApiMethodName = function() {
	return "taobao.hotel.type.add";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.hid,"hid");
	topApiCheck.checkMinValue(this.hid,0,"hid");
	topApiCheck.checkNotNull(this.name,"name");
	topApiCheck.checkMaxLength(this.name,30,"name");
};

