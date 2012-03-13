
/**
 * TOP API: taobao.taohua.items.search request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 文件最小size,单位byte。
	 **/
	this.beginSize;
	
	/** 
	 * 类目id
	 **/
	this.cid;
	
	/** 
	 * 文件最大size,单位byte。
	 **/
	this.endSize;
	
	/** 
	 * 按照文件类型来搜索
	 **/
	this.fileType;
	
	/** 
	 * 是否免费，如果为true则表示只搜索免费的商品。
	 **/
	this.free;
	
	/** 
	 * 查询关键字,超过60好字符则自动截断为60个字符.  默认允许为null
	 **/
	this.keywords;
	
	/** 
	 * 分页搜索商品信息，page_no代表的是第几页
	 **/
	this.pageNo;
	
	/** 
	 * 分页搜索商品信息，page_size代表：每页显示多少条数据。  目前最少5条，最多30条数据。
	 **/
	this.pageSize;
	
	/** 
	 * 排序值:

1. 评分排序：ratescoredesc,
2. 价格升序: priceasc,
3. 价格降序: pricedesc,
4. 时间排序: shelvesdate,
5. 浏览排序：viewcount,
6. 销量升序：saleasc,
7. 默认排序：default,
	 **/
	this.sort;
	
	this.apiParas = [];
};

request.prototype.setBeginSize = function(beginSize) {
	this.beginSize = beginSize;
	this.apiParas["begin_size"] = beginSize;
};

request.prototype.getBeginSize = function() {
	return this.beginSize;
};

request.prototype.setCid = function(cid) {
	this.cid = cid;
	this.apiParas["cid"] = cid;
};

request.prototype.getCid = function() {
	return this.cid;
};

request.prototype.setEndSize = function(endSize) {
	this.endSize = endSize;
	this.apiParas["end_size"] = endSize;
};

request.prototype.getEndSize = function() {
	return this.endSize;
};

request.prototype.setFileType = function(fileType) {
	this.fileType = fileType;
	this.apiParas["file_type"] = fileType;
};

request.prototype.getFileType = function() {
	return this.fileType;
};

request.prototype.setFree = function(free) {
	this.free = free;
	this.apiParas["free"] = free;
};

request.prototype.getFree = function() {
	return this.free;
};

request.prototype.setKeywords = function(keywords) {
	this.keywords = keywords;
	this.apiParas["keywords"] = keywords;
};

request.prototype.getKeywords = function() {
	return this.keywords;
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
	return "taobao.taohua.items.search";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkMaxValue(this.pageSize,30,"pageSize");
	topApiCheck.checkMinValue(this.pageSize,5,"pageSize");
};

