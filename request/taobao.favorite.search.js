
/**
 * TOP API: taobao.favorite.search request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * ITEM表示宝贝，SHOP表示商铺，collect_type只能为这两者之一
	 **/
	this.collectType;
	
	/** 
	 * 页码。取值范围:大于零的整数; 默认值:1。一页20条记录。
	 **/
	this.pageNo;
	
	/** 
	 * 用户昵称
	 **/
	this.userNick;
	
	this.apiParas = [];
};

request.prototype.setCollectType = function(collectType) {
	this.collectType = collectType;
	this.apiParas["collect_type"] = collectType;
};

request.prototype.getCollectType = function() {
	return this.collectType;
};

request.prototype.setPageNo = function(pageNo) {
	this.pageNo = pageNo;
	this.apiParas["page_no"] = pageNo;
};

request.prototype.getPageNo = function() {
	return this.pageNo;
};

request.prototype.setUserNick = function(userNick) {
	this.userNick = userNick;
	this.apiParas["user_nick"] = userNick;
};

request.prototype.getUserNick = function() {
	return this.userNick;
};

request.prototype.getApiMethodName = function() {
	return "taobao.favorite.search";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.collectType,"collectType");
	topApiCheck.checkMaxLength(this.collectType,4,"collectType");
	topApiCheck.checkNotNull(this.pageNo,"pageNo");
	topApiCheck.checkMaxValue(this.pageNo,100,"pageNo");
	topApiCheck.checkMinValue(this.pageNo,1,"pageNo");
	topApiCheck.checkNotNull(this.userNick,"userNick");
	topApiCheck.checkMaxLength(this.userNick,32,"userNick");
};

