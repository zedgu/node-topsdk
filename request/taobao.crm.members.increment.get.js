
/**
 * TOP API: taobao.crm.members.increment.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 显示第几页的会员，如果输入的页码大于总共的页码数，例如总共10页，但是current_page的值为11，则返回空白页，最小页数为1
	 **/
	this.currentPage;
	
	/** 
	 * 对应买家 最后一次 确认收货或者关闭交易的时间，如果不填写此字段，默认为当前时间
	 **/
	this.endModify;
	
	/** 
	 * 会员等级，1：普通客户，2：高级会员，3：VIP会员， 4：至尊VIP会员
	 **/
	this.grade;
	
	/** 
	 * 每页显示的会员数，page_size的值不能超过100，最小值要大于1
	 **/
	this.pageSize;
	
	/** 
	 * 对应买家 最后一次 确认收货或者关闭交易的时间
	 **/
	this.startModify;
	
	this.apiParas = [];
};

request.prototype.setCurrentPage = function(currentPage) {
	this.currentPage = currentPage;
	this.apiParas["current_page"] = currentPage;
};

request.prototype.getCurrentPage = function() {
	return this.currentPage;
};

request.prototype.setEndModify = function(endModify) {
	this.endModify = endModify;
	this.apiParas["end_modify"] = endModify;
};

request.prototype.getEndModify = function() {
	return this.endModify;
};

request.prototype.setGrade = function(grade) {
	this.grade = grade;
	this.apiParas["grade"] = grade;
};

request.prototype.getGrade = function() {
	return this.grade;
};

request.prototype.setPageSize = function(pageSize) {
	this.pageSize = pageSize;
	this.apiParas["page_size"] = pageSize;
};

request.prototype.getPageSize = function() {
	return this.pageSize;
};

request.prototype.setStartModify = function(startModify) {
	this.startModify = startModify;
	this.apiParas["start_modify"] = startModify;
};

request.prototype.getStartModify = function() {
	return this.startModify;
};

request.prototype.getApiMethodName = function() {
	return "taobao.crm.members.increment.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.currentPage,"currentPage");
	topApiCheck.checkMaxValue(this.currentPage,1000000,"currentPage");
	topApiCheck.checkMinValue(this.currentPage,1,"currentPage");
	topApiCheck.checkMaxValue(this.grade,4,"grade");
	topApiCheck.checkMinValue(this.grade,1,"grade");
	topApiCheck.checkMaxValue(this.pageSize,100,"pageSize");
	topApiCheck.checkMinValue(this.pageSize,1,"pageSize");
};

