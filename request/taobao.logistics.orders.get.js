
/**
 * TOP API: taobao.logistics.orders.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 买家昵称
	 **/
	this.buyerNick;
	
	/** 
	 * 创建时间结束
	 **/
	this.endCreated;
	
	/** 
	 * 需返回的字段列表.可选值:Shipping 物流数据结构中的以下字段: 
tid,seller_nick,buyer_nick,delivery_start, delivery_end,out_sid,item_title,receiver_name, created,modified,status,type,freight_payer,seller_confirm,company_name；多个字段之间用","分隔。如tid,seller_nick,buyer_nick,delivery_start。
	 **/
	this.fields;
	
	/** 
	 * 谁承担运费.可选值:buyer(买家),seller(卖家).如:buyer
	 **/
	this.freightPayer;
	
	/** 
	 * 页码.该字段没传 或 值<1 ,则默认page_no为1
	 **/
	this.pageNo;
	
	/** 
	 * 每页条数.该字段没传 或 值<1 ,则默认page_size为40
	 **/
	this.pageSize;
	
	/** 
	 * 收货人姓名
	 **/
	this.receiverName;
	
	/** 
	 * 卖家是否发货.可选值:yes(是),no(否).如:yes
	 **/
	this.sellerConfirm;
	
	/** 
	 * 创建时间开始
	 **/
	this.startCreated;
	
	/** 
	 * 物流状态.查看数据结构 Shipping 中的status字段.
	 **/
	this.status;
	
	/** 
	 * 交易ID.如果加入tid参数的话,不用传其他的参数,但是仅会返回一条物流订单信息.
	 **/
	this.tid;
	
	/** 
	 * 物流方式.可选值:post(平邮),express(快递),ems(EMS).如:post
	 **/
	this.type;
	
	this.apiParas = [];
};

request.prototype.setBuyerNick = function(buyerNick) {
	this.buyerNick = buyerNick;
	this.apiParas["buyer_nick"] = buyerNick;
};

request.prototype.getBuyerNick = function() {
	return this.buyerNick;
};

request.prototype.setEndCreated = function(endCreated) {
	this.endCreated = endCreated;
	this.apiParas["end_created"] = endCreated;
};

request.prototype.getEndCreated = function() {
	return this.endCreated;
};

request.prototype.setFields = function(fields) {
	this.fields = fields;
	this.apiParas["fields"] = fields;
};

request.prototype.getFields = function() {
	return this.fields;
};

request.prototype.setFreightPayer = function(freightPayer) {
	this.freightPayer = freightPayer;
	this.apiParas["freight_payer"] = freightPayer;
};

request.prototype.getFreightPayer = function() {
	return this.freightPayer;
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

request.prototype.setReceiverName = function(receiverName) {
	this.receiverName = receiverName;
	this.apiParas["receiver_name"] = receiverName;
};

request.prototype.getReceiverName = function() {
	return this.receiverName;
};

request.prototype.setSellerConfirm = function(sellerConfirm) {
	this.sellerConfirm = sellerConfirm;
	this.apiParas["seller_confirm"] = sellerConfirm;
};

request.prototype.getSellerConfirm = function() {
	return this.sellerConfirm;
};

request.prototype.setStartCreated = function(startCreated) {
	this.startCreated = startCreated;
	this.apiParas["start_created"] = startCreated;
};

request.prototype.getStartCreated = function() {
	return this.startCreated;
};

request.prototype.setStatus = function(status) {
	this.status = status;
	this.apiParas["status"] = status;
};

request.prototype.getStatus = function() {
	return this.status;
};

request.prototype.setTid = function(tid) {
	this.tid = tid;
	this.apiParas["tid"] = tid;
};

request.prototype.getTid = function() {
	return this.tid;
};

request.prototype.setType = function(type) {
	this.type = type;
	this.apiParas["type"] = type;
};

request.prototype.getType = function() {
	return this.type;
};

request.prototype.getApiMethodName = function() {
	return "taobao.logistics.orders.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.fields,"fields");
	topApiCheck.checkMaxValue(this.pageSize,100,"pageSize");
};

