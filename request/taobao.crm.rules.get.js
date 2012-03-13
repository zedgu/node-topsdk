
/**
 * TOP API: taobao.crm.rules.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 当前显示第几页，如果current_page超过页码范围或者小于页码范围，将直接返回空白页
	 **/
	this.currentPage;
	
	/** 
	 * 一页返回的记录的个数
	 **/
	this.pageSize;
	
	this.apiParas = [];
};

request.prototype.setCurrentPage = function(currentPage) {
	this.currentPage = currentPage;
	this.apiParas["current_page"] = currentPage;
};

request.prototype.getCurrentPage = function() {
	return this.currentPage;
};

request.prototype.setPageSize = function(pageSize) {
	this.pageSize = pageSize;
	this.apiParas["page_size"] = pageSize;
};

request.prototype.getPageSize = function() {
	return this.pageSize;
};

request.prototype.getApiMethodName = function() {
	return "taobao.crm.rules.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.currentPage,"currentPage");
	topApiCheck.checkMaxValue(this.currentPage,1000000,"currentPage");
	topApiCheck.checkMinValue(this.currentPage,1,"currentPage");
	topApiCheck.checkMaxValue(this.pageSize,100,"pageSize");
	topApiCheck.checkMinValue(this.pageSize,1,"pageSize");
};

