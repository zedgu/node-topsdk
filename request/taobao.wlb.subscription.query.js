
/**
 * TOP API: taobao.wlb.subscription.query request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 当前页
	 **/
	this.pageNo;
	
	/** 
	 * 分页记录个数，如果用户输入的记录数大于50，则一页显示50条记录
	 **/
	this.pageSize;
	
	/** 
	 * 状态 
AUDITING 1-待审核; 
CANCEL 2-撤销 ;
CHECKED 3-审核通过 ;
FAILED 4-审核未通过 ;
SYNCHRONIZING 5-同步中;
只允许输入上面指定的值，且可以为空，为空时查询所有状态。若输错了，则按AUDITING处理。
	 **/
	this.status;
	
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

request.prototype.setStatus = function(status) {
	this.status = status;
	this.apiParas["status"] = status;
};

request.prototype.getStatus = function() {
	return this.status;
};

request.prototype.getApiMethodName = function() {
	return "taobao.wlb.subscription.query";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
};

