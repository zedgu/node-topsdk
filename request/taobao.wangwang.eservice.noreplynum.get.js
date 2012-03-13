
/**
 * TOP API: taobao.wangwang.eservice.noreplynum.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 结束日期
	 **/
	this.endDate;
	
	/** 
	 * 客服人员id：cntaobao+淘宝nick，例如cntaobaotest
	 **/
	this.serviceStaffId;
	
	/** 
	 * 开始日期
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
	return "taobao.wangwang.eservice.noreplynum.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.endDate,"endDate");
	topApiCheck.checkNotNull(this.serviceStaffId,"serviceStaffId");
	topApiCheck.checkMaxLength(this.serviceStaffId,1900,"serviceStaffId");
	topApiCheck.checkNotNull(this.startDate,"startDate");
};

