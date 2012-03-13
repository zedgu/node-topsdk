
/**
 * TOP API: taobao.wangwang.eservice.evals.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 结束时间
	 **/
	this.endDate;
	
	/** 
	 * 想要查询的账号列表
	 **/
	this.serviceStaffId;
	
	/** 
	 * 开始时间
	 **/
	this.startDate;
	
	this.apiParas = [];
};

request.prototype.setEndDate = function(endDate) {
	this.endDate = endDate;
	this.apiParas["end_date"] = endDate;
};

request.prototype.getEndDate = function() {
	return this.endDate;
};

request.prototype.setServiceStaffId = function(serviceStaffId) {
	this.serviceStaffId = serviceStaffId;
	this.apiParas["service_staff_id"] = serviceStaffId;
};

request.prototype.getServiceStaffId = function() {
	return this.serviceStaffId;
};

request.prototype.setStartDate = function(startDate) {
	this.startDate = startDate;
	this.apiParas["start_date"] = startDate;
};

request.prototype.getStartDate = function() {
	return this.startDate;
};

request.prototype.getApiMethodName = function() {
	return "taobao.wangwang.eservice.evals.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.endDate,"endDate");
	topApiCheck.checkNotNull(this.serviceStaffId,"serviceStaffId");
	topApiCheck.checkMaxListSize(this.serviceStaffId,30,"serviceStaffId");
	topApiCheck.checkNotNull(this.startDate,"startDate");
};

