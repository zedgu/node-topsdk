
/**
 * TOP API: taobao.hotel.sold.types.increment.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 查询修改结束时间，必须大于修改开始时间（修改时间跨度不能大于1天）。格式：yyyy-MM-dd HH:mm:ss
	 **/
	this.endModified;
	
	/** 
	 * 分页页码。取值范围，大于零的整数，默认值1，即返回第一页的数据。
	 **/
	this.pageNo;
	
	/** 
	 * 页面大小，取值范围1-100，默认大小20。
	 **/
	this.pageSize;
	
	/** 
	 * 查询修改开始时间（修改时间跨度不能大于1天）。格式：yyyy-MM-dd HH:mm:ss
	 **/
	this.startModified;
	
	/** 
	 * 是否使用has_next的分页方式，如果指定true，则返回的结果中不包含总记录数，但是会新增一个是否存在下一页的字段，效率比总记录数高
	 **/
	this.useHasNext;
	
	this.apiParas = [];
};

request.prototype.setEndModified = function(endModified) {
	this.endModified = endModified;
	this.apiParas["end_modified"] = endModified;
};

request.prototype.getEndModified = function() {
	return this.endModified;
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

request.prototype.setStartModified = function(startModified) {
	this.startModified = startModified;
	this.apiParas["start_modified"] = startModified;
};

request.prototype.getStartModified = function() {
	return this.startModified;
};

request.prototype.setUseHasNext = function(useHasNext) {
	this.useHasNext = useHasNext;
	this.apiParas["use_has_next"] = useHasNext;
};

request.prototype.getUseHasNext = function() {
	return this.useHasNext;
};

request.prototype.getApiMethodName = function() {
	return "taobao.hotel.sold.types.increment.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.endModified,"endModified");
	topApiCheck.checkNotNull(this.startModified,"startModified");
};

