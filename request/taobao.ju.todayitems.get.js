
/**
 * TOP API: taobao.ju.todayitems.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 代表需要返回的商品对象字段。可选值：ItemData商品结构体中所有字段均可返回；多个字段用","分隔。如果fields为空，或者不传该参数，就默认获得所有的字段
	 **/
	this.fields;
	
	/** 
	 * IPHONE,WAP,ANDROID,SINA,163 各种终端类型
	 **/
	this.terminalType;
	
	/** 
	 * 终端的唯一标识，web可以用cookie，手机使用手机号码等，确保唯一性即可，用于分配商品组
	 **/
	this.uuid;
	
	this.apiParas = [];
};

request.prototype.setFields = function(fields) {
	this.fields = fields;
	this.apiParas["fields"] = fields;
};

request.prototype.getFields = function() {
	return this.fields;
};

request.prototype.setTerminalType = function(terminalType) {
	this.terminalType = terminalType;
	this.apiParas["terminal_type"] = terminalType;
};

request.prototype.getTerminalType = function() {
	return this.terminalType;
};

request.prototype.setUuid = function(uuid) {
	this.uuid = uuid;
	this.apiParas["uuid"] = uuid;
};

request.prototype.getUuid = function() {
	return this.uuid;
};

request.prototype.getApiMethodName = function() {
	return "taobao.ju.todayitems.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.terminalType,"terminalType");
	topApiCheck.checkNotNull(this.uuid,"uuid");
};

