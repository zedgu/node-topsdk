
/**
 * TOP API: taobao.hotel.orders.search request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 入住时间查询结束时间，格式为：yyyy-MM-dd。不能早于checkin_date_start，间隔不能大于30
	 **/
	this.checkinDateEnd;
	
	/** 
	 * 入住时间查询起始时间，格式为：yyyy-MM-dd
	 **/
	this.checkinDateStart;
	
	/** 
	 * 离店时间查询结束时间，格式为：yyyy-MM-dd。不能早于checkout_date_start，间隔不能大于30
	 **/
	this.checkoutDateEnd;
	
	/** 
	 * 离店时间查询起始时间，格式为：yyyy-MM-dd
	 **/
	this.checkoutDateStart;
	
	/** 
	 * 订单创建时间查询结束时间，格式为：yyyy-MM-dd。不能早于created_start，间隔不能大于30
	 **/
	this.createdEnd;
	
	/** 
	 * 订单创建时间查询起始时间，格式为：yyyy-MM-dd
	 **/
	this.createdStart;
	
	/** 
	 * 商品gid列表，多个gid用英文逗号隔开，一次不超过5个
	 **/
	this.gids;
	
	/** 
	 * 酒店hid列表，多个hid用英文逗号隔开，一次不超过5个
	 **/
	this.hids;
	
	/** 
	 * 是否需要返回该订单的入住人列表。可选值：true，false。
	 **/
	this.needGuest;
	
	/** 
	 * 是否显示买家留言，可选值true、false
	 **/
	this.needMessage;
	
	/** 
	 * 酒店订单oids列表，多个oid用英文逗号隔开，一次不超过20个。oids，tids，hids，rids，gids，（checkin_date_start，checkin_date_end），（checkout_date_start，checkout_date_end），（created_start，created_end）必须传入一项，括号表示需同时存在才做为查询条件。
oids，tids，hids，rids，gids同时出现时，优先级按此顺序由高到低只取一项。其他同时出现时，并列使用。
	 **/
	this.oids;
	
	/** 
	 * 分页页码。取值范围，大于零的整数，默认值1，即返回第一页的数据。页面大小为20
	 **/
	this.pageNo;
	
	/** 
	 * 房型rid列表，多个rid用英文逗号隔开，一次不超过5个
	 **/
	this.rids;
	
	/** 
	 * 订单状态。A：等待买家付款。B：买家已付款待卖家发货。C：卖家已发货待买家确认。D：交易成功。E：交易关闭
	 **/
	this.status;
	
	/** 
	 * 淘宝订单tid列表，多个tid用英文逗号隔开，一次不超过20个。
	 **/
	this.tids;
	
	this.apiParas = [];
};

request.prototype.setCheckinDateEnd = function(checkinDateEnd) {
	this.checkinDateEnd = checkinDateEnd;
	this.apiParas["checkin_date_end"] = checkinDateEnd;
};

request.prototype.getCheckinDateEnd = function() {
	return this.checkinDateEnd;
};

request.prototype.setCheckinDateStart = function(checkinDateStart) {
	this.checkinDateStart = checkinDateStart;
	this.apiParas["checkin_date_start"] = checkinDateStart;
};

request.prototype.getCheckinDateStart = function() {
	return this.checkinDateStart;
};

request.prototype.setCheckoutDateEnd = function(checkoutDateEnd) {
	this.checkoutDateEnd = checkoutDateEnd;
	this.apiParas["checkout_date_end"] = checkoutDateEnd;
};

request.prototype.getCheckoutDateEnd = function() {
	return this.checkoutDateEnd;
};

request.prototype.setCheckoutDateStart = function(checkoutDateStart) {
	this.checkoutDateStart = checkoutDateStart;
	this.apiParas["checkout_date_start"] = checkoutDateStart;
};

request.prototype.getCheckoutDateStart = function() {
	return this.checkoutDateStart;
};

request.prototype.setCreatedEnd = function(createdEnd) {
	this.createdEnd = createdEnd;
	this.apiParas["created_end"] = createdEnd;
};

request.prototype.getCreatedEnd = function() {
	return this.createdEnd;
};

request.prototype.setCreatedStart = function(createdStart) {
	this.createdStart = createdStart;
	this.apiParas["created_start"] = createdStart;
};

request.prototype.getCreatedStart = function() {
	return this.createdStart;
};

request.prototype.setGids = function(gids) {
	this.gids = gids;
	this.apiParas["gids"] = gids;
};

request.prototype.getGids = function() {
	return this.gids;
};

request.prototype.setHids = function(hids) {
	this.hids = hids;
	this.apiParas["hids"] = hids;
};

request.prototype.getHids = function() {
	return this.hids;
};

request.prototype.setNeedGuest = function(needGuest) {
	this.needGuest = needGuest;
	this.apiParas["need_guest"] = needGuest;
};

request.prototype.getNeedGuest = function() {
	return this.needGuest;
};

request.prototype.setNeedMessage = function(needMessage) {
	this.needMessage = needMessage;
	this.apiParas["need_message"] = needMessage;
};

request.prototype.getNeedMessage = function() {
	return this.needMessage;
};

request.prototype.setOids = function(oids) {
	this.oids = oids;
	this.apiParas["oids"] = oids;
};

request.prototype.getOids = function() {
	return this.oids;
};

request.prototype.setPageNo = function(pageNo) {
	this.pageNo = pageNo;
	this.apiParas["page_no"] = pageNo;
};

request.prototype.getPageNo = function() {
	return this.pageNo;
};

request.prototype.setRids = function(rids) {
	this.rids = rids;
	this.apiParas["rids"] = rids;
};

request.prototype.getRids = function() {
	return this.rids;
};

request.prototype.setStatus = function(status) {
	this.status = status;
	this.apiParas["status"] = status;
};

request.prototype.getStatus = function() {
	return this.status;
};

request.prototype.setTids = function(tids) {
	this.tids = tids;
	this.apiParas["tids"] = tids;
};

request.prototype.getTids = function() {
	return this.tids;
};

request.prototype.getApiMethodName = function() {
	return "taobao.hotel.orders.search";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkMaxLength(this.status,1,"status");
};

