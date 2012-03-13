
/**
 * TOP API: taobao.promotion.limitdiscount.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 限时打折结束时间。输入的时间会被截取，年月日有效，时分秒忽略。
	 **/
	this.endTime;
	
	/** 
	 * 限时打折ID。这个针对查询唯一限时打折情况。若此字段不为空，则说明操作为单条限时打折记录查询，其他字段忽略。若想分页按条件查询，这个字段置为空。
	 **/
	this.limitDiscountId;
	
	/** 
	 * 分页页号。默认1。当页数大于最大页数时，结果为最大页数的数据。
	 **/
	this.pageNumber;
	
	/** 
	 * 限时打折开始时间。输入的时间会被截取，年月日有效，时分秒忽略。
	 **/
	this.startTime;
	
	/** 
	 * 限时打折活动状态。ALL:全部状态;OVER:已结束;DOING:进行中;PROPARE:未开始(只支持大写)。当limit_discount_id为空时，为空时，默认为全部的状态。
	 **/
	this.status;
	
	this.apiParas = [];
};

request.prototype.setEndTime = function(endTime) {
	this.endTime = endTime;
	this.apiParas["end_time"] = endTime;
};

request.prototype.getEndTime = function() {
	return this.endTime;
};

request.prototype.setLimitDiscountId = function(limitDiscountId) {
	this.limitDiscountId = limitDiscountId;
	this.apiParas["limit_discount_id"] = limitDiscountId;
};

request.prototype.getLimitDiscountId = function() {
	return this.limitDiscountId;
};

request.prototype.setPageNumber = function(pageNumber) {
	this.pageNumber = pageNumber;
	this.apiParas["page_number"] = pageNumber;
};

request.prototype.getPageNumber = function() {
	return this.pageNumber;
};

request.prototype.setStartTime = function(startTime) {
	this.startTime = startTime;
	this.apiParas["start_time"] = startTime;
};

request.prototype.getStartTime = function() {
	return this.startTime;
};

request.prototype.setStatus = function(status) {
	this.status = status;
	this.apiParas["status"] = status;
};

request.prototype.getStatus = function() {
	return this.status;
};

request.prototype.getApiMethodName = function() {
	return "taobao.promotion.limitdiscount.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
};

