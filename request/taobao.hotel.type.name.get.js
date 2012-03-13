
/**
 * TOP API: taobao.hotel.type.name.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 要查询的酒店id。必须为数字
	 **/
	this.hid;
	
	/** 
	 * 房型全部名称/别名。不能超过60字节
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
	return "taobao.hotel.type.name.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.hid,"hid");
	topApiCheck.checkNotNull(this.name,"name");
	topApiCheck.checkMaxLength(this.name,60,"name");
};

