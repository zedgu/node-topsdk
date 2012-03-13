
/**
 * TOP API: taobao.trades.bought.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 查询交易创建时间结束。格式:yyyy-MM-dd HH:mm:ss
	 **/
	this.endCreated;
	
	/** 
	 * 可选值有ershou(二手市场的订单）,service（商城服务子订单）作为扩展类型筛选只能做单个ext_type查询，不能全部查询所有的ext_type类型
	 **/
	this.extType;
	
	/** 
	 * 需要返回的字段。目前支持有：

   1. Trade中可以指定返回的fields：
seller_nick, buyer_nick, title, type, created, sid, tid, seller_rate, buyer_rate, can_rate, status, payment, discount_fee, adjust_fee, post_fee, total_fee, pay_time, end_time, modified, consign_time, buyer_obtain_point_fee, point_fee, real_point_fee, received_payment,  pic_path, num_iid, num, price, cod_fee, cod_status, shipping_type, receiver_name, receiver_state, receiver_city, receiver_district, receiver_address, receiver_zip, receiver_mobile, receiver_phone
   
2. Order中可以指定返回fields：
orders.title, orders.pic_path, orders.price, orders.num, orders.num_iid, orders.sku_id, orders.refund_status, orders.status, orders.oid, orders.total_fee, orders.payment, orders.discount_fee, orders.adjust_fee, orders.sku_properties_name, orders.item_meal_name, orders.buyer_rate, orders.seller_rate, orders.outer_iid, orders.outer_sku_id, orders.refund_id, orders.seller_type                          
  
 3. fields：orders（返回Order的所有内容）
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
	 * 交易是否评价.默认查询所有评价状态的数据，除了默认值外每次只能查询一种状态。
可选值： RATE_UNBUYER(买家未评) RATE_UNSELLER(卖家未评) RATE_BUYER_UNSELLER(买家已评，卖家未评) RATE_UNBUYER_SELLER(买家未评，卖家已评)
	 **/
	this.rateStatus;
	
	/** 
	 * 卖家昵称
	 **/
	this.sellerNick;
	
	/** 
	 * 是否显示订单回收站删除的订单，false不显示true（显示），如果不传入，默认是不显示的
	 **/
	this.showDeleted;
	
	/** 
	 * 查询交易创建时间开始。格式:yyyy-MM-dd HH:mm:ss
	 **/
	this.startCreated;
	
	/** 
	 * 交易状态，默认查询所有交易状态的数据，除了默认值外每次只能查询一种状态。
 交易状态可选值

    TRADE_NO_CREATE_PAY(没有创建支付宝交易)
    WAIT_BUYER_PAY(等待买家付款)
    WAIT_SELLER_SEND_GOODS(等待卖家发货,即:买家已付款)
    WAIT_BUYER_CONFIRM_GOODS(等待买家确认收货,即:卖家已发货)
    TRADE_BUYER_SIGNED(买家已签收,货到付款专用)
    TRADE_FINISHED(交易成功)
    TRADE_CLOSED(交易关闭)
    TRADE_CLOSED_BY_TAOBAO(交易被淘宝关闭)
    ALL_WAIT_PAY(包含：WAIT_BUYER_PAY、TRADE_NO_CREATE_PAY)
    ALL_CLOSED(包含：TRADE_CLOSED、TRADE_CLOSED_BY_TAOBAO)
	 **/
	this.status;
	
	/** 
	 * 交易类型列表，同时查询多种交易类型可用逗号分隔。默认同时查询guarantee_trade, auto_delivery, ec, cod的4种交易类型的数据
交易类型可选值
fixed(一口价)
auction(拍卖)
guarantee_trade(一口价、拍卖)
tmall_service_trade（虚拟服务订单）
independent_simple_trade(旺店入门版交易)
independent_shop_trade(旺店标准版交易)
auto_delivery(自动发货)
ec(直冲)
cod(货到付款)
fenxiao(分销)
game_equipment(游戏装备)
shopex_trade(ShopEX交易)
netcn_trade(万网交易)
external_trade(统一外部交易
instant_trade (即时到账)
b2c_cod(大商家货到付款)
hotel_trade(酒店类型交易)
super_market_trade(商超交易)
super_market_cod_trade(商超货到付款交易)
taohua(桃花网交易类型）waimai(外卖交易类型） nopaid（即时到帐/趣味猜交易类型）
	 **/
	this.type;
	
	this.apiParas = [];
};

request.prototype.setEndCreated = function(endCreated) {
	this.endCreated = endCreated;
	this.apiParas["end_created"] = endCreated;
};

request.prototype.getEndCreated = function() {
	return this.endCreated;
};

request.prototype.setExtType = function(extType) {
	this.extType = extType;
	this.apiParas["ext_type"] = extType;
};

request.prototype.getExtType = function() {
	return this.extType;
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

request.prototype.setRateStatus = function(rateStatus) {
	this.rateStatus = rateStatus;
	this.apiParas["rate_status"] = rateStatus;
};

request.prototype.getRateStatus = function() {
	return this.rateStatus;
};

request.prototype.setSellerNick = function(sellerNick) {
	this.sellerNick = sellerNick;
	this.apiParas["seller_nick"] = sellerNick;
};

request.prototype.getSellerNick = function() {
	return this.sellerNick;
};

request.prototype.setShowDeleted = function(showDeleted) {
	this.showDeleted = showDeleted;
	this.apiParas["show_deleted"] = showDeleted;
};

request.prototype.getShowDeleted = function() {
	return this.showDeleted;
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

request.prototype.setType = function(type) {
	this.type = type;
	this.apiParas["type"] = type;
};

request.prototype.getType = function() {
	return this.type;
};

request.prototype.getApiMethodName = function() {
	return "taobao.trades.bought.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.fields,"fields");
};

