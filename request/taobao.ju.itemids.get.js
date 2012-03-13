
/**
 * TOP API: taobao.ju.itemids.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 分页获取商品信息页序号，代表第几页
	 **/
	this.pageNo;
	
	/** 
	 * 每次获取商品列表的数量
	 **/
	this.pageSize;
	
	/** 
	 * 平台ID。搜狗:1008,聚划算:1001,商城:1002,无线WAP:1007,支付宝:1003,淘宝天下:1004,嗨淘:1006
	 **/
	this.platformId;
	
	/** 
	 * IPHONE,WAP,ANDROID,SINA,163 各种终端类型
	 **/
	this.terminalType;
	
	this.apiParas = [];
};

request.prototype.setPageNo = function(pageNo) {
	this.pageNo = pageNo;
	this.apiParas["page_no"] = pageNo;
};

request.prototype.getPageNo = function() {
	return this.pageNo;
};

request.prototype.setPageSize = function(pageSize) {
	this.pageSize = pageSize;
	this.apiParas["page_size"] = pageSize;
};

request.prototype.getPageSize = function() {
	return this.pageSize;
};

request.prototype.setPlatformId = function(platformId) {
	this.platformId = platformId;
	this.apiParas["platform_id"] = platformId;
};

request.prototype.getPlatformId = function() {
	return this.platformId;
};

request.prototype.setTerminalType = function(terminalType) {
	this.terminalType = terminalType;
	this.apiParas["terminal_type"] = terminalType;
};

request.prototype.getTerminalType = function() {
	return this.terminalType;
};

request.prototype.getApiMethodName = function() {
	return "taobao.ju.itemids.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.pageNo,"pageNo");
	topApiCheck.checkMinValue(this.pageNo,0,"pageNo");
	topApiCheck.checkNotNull(this.pageSize,"pageSize");
	topApiCheck.checkMaxValue(this.pageSize,100,"pageSize");
	topApiCheck.checkMinValue(this.pageSize,1,"pageSize");
};

