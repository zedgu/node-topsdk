
/**
 * TOP API: taobao.taohua.audioreader.search request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 类目id
	 **/
	this.cid;
	
	/** 
	 * 是否免费，如果为true则表示只搜索免费的商品
	 **/
	this.free;
	
	/** 
	 * 查询关键字,超过60个字符则自动截断为60个字符. 允许为空
	 **/
	this.keyword;
	
	/** 
	 * 当前页码
	 **/
	this.pageNo;
	
	/** 
	 * 每页个数
	 **/
	this.pageSize;
	
	/** 
	 * 排序值: 1. 评分排序：ratescoredesc, 2. 价格升序：priceasc, 3. 价格降序：pricedesc, 4. 最新发布：shelvesdate, 5. 最多浏览：viewcount, 6. 销量升序：saleasc, 7. 销量降序：saledesc, 8. 最受欢迎：favoritedesc, 9. 默认排序：default
	 **/
	this.sort;
	
	this.apiParas = [];
};

request.prototype.setCid = function(cid) {
	this.cid = cid;
	this.apiParas["cid"] = cid;
};

request.prototype.getCid = function() {
	return this.cid;
};

request.prototype.setFree = function(free) {
	this.free = free;
	this.apiParas["free"] = free;
};

request.prototype.getFree = function() {
	return this.free;
};

request.prototype.setKeyword = function(keyword) {
	this.keyword = keyword;
	this.apiParas["keyword"] = keyword;
};

request.prototype.getKeyword = function() {
	return this.keyword;
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

request.prototype.setSort = function(sort) {
	this.sort = sort;
	this.apiParas["sort"] = sort;
};

request.prototype.getSort = function() {
	return this.sort;
};

request.prototype.getApiMethodName = function() {
	return "taobao.taohua.audioreader.search";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkMaxValue(this.pageNo,100,"pageNo");
	topApiCheck.checkMinValue(this.pageNo,1,"pageNo");
	topApiCheck.checkMaxValue(this.pageSize,100,"pageSize");
	topApiCheck.checkMinValue(this.pageSize,1,"pageSize");
};

