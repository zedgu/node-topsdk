
/**
 * TOP API: taobao.taohua.childcates.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 通过类目ID获取它的子类目列表
	 **/
	this.cateId;
	
	this.apiParas = [];
};

request.prototype.setCateId = function(cateId) {
	this.cateId = cateId;
	this.apiParas["cate_id"] = cateId;
};

request.prototype.getCateId = function() {
	return this.cateId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.taohua.childcates.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
};

