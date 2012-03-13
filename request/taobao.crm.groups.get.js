
/**
 * TOP API: taobao.crm.groups.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 显示第几页的分组，如果输入的页码大于总共的页码数，例如总共10页，但是current_page的值为11，则返回空白页，最小页码为1
	 **/
	this.currentPage;
	
	/** 
	 * 每页显示的记录数，其最大值不能超过100条，最小值为1，默认20条
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
	return "taobao.crm.groups.get";
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

