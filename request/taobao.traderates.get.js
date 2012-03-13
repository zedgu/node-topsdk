
/**
 * TOP API: taobao.traderates.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 评价结束时间。如果只输入结束时间，那么全部返回所有评价数据。
	 **/
	this.endDate;
	
	/** 
	 * 需返回的字段列表。可选值：TradeRate 结构中的所有字段，多个字段之间用“,”分隔
	 **/
	this.fields;
	
	/** 
	 * 页码。取值范围:大于零的整数; 默认值:1
	 **/
	this.pageNo;
	
	/** 
	 * 每页获取条数。默认值40，最小值1，最大值150。相同的查询时间段条件下，最大只能获取总共1500条评价记录。
	 **/
	this.pageSize;
	
	/** 
	 * 评价类型。可选值:get(得到),give(给出)
	 **/
	this.rateType;
	
	/** 
	 * 评价结果。可选值:good(好评),neutral(中评),bad(差评)
	 **/
	this.result;
	
	/** 
	 * 评价者角色即评价的发起方。可选值:seller(卖家),buyer(买家)。 当 give buyer 以买家身份给卖家的评价； 当 get seller 以买家身份得到卖家给的评价； 当 give seller 以卖家身份给买家的评价； 当 get buyer 以卖家身份得到买家给的评价。
	 **/
	this.role;
	
	/** 
	 * 评价开始时。如果只输入开始时间，那么能返回开始时间之后的评价数据。
	 **/
	this.startDate;
	
	/** 
	 * 交易订单id，可以是父订单id号，也可以是子订单id号
	 **/
	this.tid;
	
	/** 
	 * 是否启用has_next的分页方式，如果指定true,则返回的结果中不包含总记录数，但是会新增一个是否存在下一页的的字段，通过此种方式获取评价信息，效率在原有的基础上有80%的提升。
	 **/
	this.useHasNext;
	
	this.apiParas = [];
};

request.prototype.setEndDate = function(endDate) {
	this.endDate = endDate;
	this.apiParas["end_date"] = endDate;
};

request.prototype.getEndDate = function() {
	return this.endDate;
};

request.prototype.setFields = function(fields) {
	this.fields = fields;
	this.apiParas["fields"] = fields;
};

request.prototype.getFields = function() {
	return this.fields;
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

request.prototype.setRateType = function(rateType) {
	this.rateType = rateType;
	this.apiParas["rate_type"] = rateType;
};

request.prototype.getRateType = function() {
	return this.rateType;
};

request.prototype.setResult = function(result) {
	this.result = result;
	this.apiParas["result"] = result;
};

request.prototype.getResult = function() {
	return this.result;
};

request.prototype.setRole = function(role) {
	this.role = role;
	this.apiParas["role"] = role;
};

request.prototype.getRole = function() {
	return this.role;
};

request.prototype.setStartDate = function(startDate) {
	this.startDate = startDate;
	this.apiParas["start_date"] = startDate;
};

request.prototype.getStartDate = function() {
	return this.startDate;
};

request.prototype.setTid = function(tid) {
	this.tid = tid;
	this.apiParas["tid"] = tid;
};

request.prototype.getTid = function() {
	return this.tid;
};

request.prototype.setUseHasNext = function(useHasNext) {
	this.useHasNext = useHasNext;
	this.apiParas["use_has_next"] = useHasNext;
};

request.prototype.getUseHasNext = function() {
	return this.useHasNext;
};

request.prototype.getApiMethodName = function() {
	return "taobao.traderates.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.fields,"fields");
	topApiCheck.checkMaxValue(this.pageSize,150,"pageSize");
	topApiCheck.checkMinValue(this.pageSize,1,"pageSize");
	topApiCheck.checkNotNull(this.rateType,"rateType");
	topApiCheck.checkNotNull(this.role,"role");
};

