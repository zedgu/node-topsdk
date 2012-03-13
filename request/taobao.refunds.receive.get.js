
/**
 * TOP API: taobao.refunds.receive.get request
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
	 * 查询修改时间结束。格式: yyyy-MM-dd HH:mm:ss
	 **/
	this.endModified;
	
	/** 
	 * 需要返回的字段。目前支持有：refund_id, tid, title, buyer_nick, seller_nick, total_fee, status, created, refund_fee, oid, good_status, company_name, sid, payment, reason, desc, has_good_return, modified, order_status
	 **/
	this.fields;
	
	/** 
	 * 页码。取值范围:大于零的整数; 默认值:1
	 **/
	this.pageNo;
	
	/** 
	 * 每页条数。取值范围:大于零的整数; 默认值:40;最大值:100
	 **/
	this.pageSize;
	
	/** 
	 * 查询修改时间开始。格式: yyyy-MM-dd HH:mm:ss
	 **/
	this.startModified;
	
	/** 
	 * 退款状态，默认查询所有退款状态的数据，除了默认值外每次只能查询一种状态。
WAIT_SELLER_AGREE(买家已经申请退款，等待卖家同意) 
WAIT_BUYER_RETURN_GOODS(卖家已经同意退款，等待买家退货) 
WAIT_SELLER_CONFIRM_GOODS(买家已经退货，等待卖家确认收货) 
SELLER_REFUSE_BUYER(卖家拒绝退款) 
CLOSED(退款关闭) 
SUCCESS(退款成功)
	 **/
	this.status;
	
	/** 
	 * 交易类型列表，一次查询多种类型可用半角逗号分隔，默认同时查询guarantee_trade, auto_delivery的2种类型的数据。
fixed(一口价) 
auction(拍卖) 
guarantee_trade(一口价、拍卖) 
independent_simple_trade(旺店入门版交易) 
independent_shop_trade(旺店标准版交易) 
auto_delivery(自动发货) 
ec(直冲) 
cod(货到付款) 
fenxiao(分销) 
game_equipment(游戏装备) 
shopex_trade(ShopEX交易) 
netcn_trade(万网交易) 
external_trade(统一外部交易)
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

request.prototype.setEndModified = function(endModified) {
	this.endModified = endModified;
	this.apiParas["end_modified"] = endModified;
};

request.prototype.getEndModified = function() {
	return this.endModified;
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

request.prototype.setStartModified = function(startModified) {
	this.startModified = startModified;
	this.apiParas["start_modified"] = startModified;
};

request.prototype.getStartModified = function() {
	return this.startModified;
};

request.prototype.setStatus = function(status) {
	this.status = status;
	this.apiParas["status"] = status;
};

request.prototype.getStatus = function() {
	return this.status;
};

request.prototype.setType = function(type) {
	this.type = type;
	this.apiParas["type"] = type;
};

request.prototype.getType = function() {
	return this.type;
};

request.prototype.getApiMethodName = function() {
	return "taobao.refunds.receive.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.fields,"fields");
	topApiCheck.checkMinValue(this.pageNo,1,"pageNo");
	topApiCheck.checkMaxValue(this.pageSize,100,"pageSize");
	topApiCheck.checkMinValue(this.pageSize,1,"pageSize");
};

