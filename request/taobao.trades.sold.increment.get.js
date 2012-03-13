
/**
 * TOP API: taobao.trades.sold.increment.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 查询修改结束时间，必须大于修改开始时间(修改时间跨度不能大于一天)，格式:yyyy-MM-dd HH:mm:ss。<span style="color:red;font-weight: bold;">建议使用30分钟以内的时间跨度，能大大提高响应速度和成功率</span>。
	 **/
	this.endModified;
	
	/** 
	 * 可选值有ershou(二手市场的订单）,service（商城服务子订单）作为扩展类型筛选只能做单个ext_type查询，不能全部查询所有的ext_type类型
	 **/
	this.extType;
	
	/** 
	 * 需要返回的字段。目前支持有：
1.Trade中可以指定返回的fields:seller_nick, buyer_nick, title, type, created, tid, seller_rate, buyer_rate, status, payment, discount_fee, adjust_fee, post_fee, total_fee, pay_time, end_time, modified, consign_time, buyer_obtain_point_fee, point_fee, real_point_fee, received_payment, commission_fee, pic_path, num_iid, num, price, cod_fee, cod_status, shipping_type, receiver_name, receiver_state, receiver_city, receiver_district, receiver_address, receiver_zip, receiver_mobile, receiver_phone 
2.Order中可以指定返回fields：
orders.title, orders.pic_path, orders.price, orders.num, orders.num_iid, orders.sku_id, orders.refund_status, orders.status, orders.oid, orders.total_fee, orders.payment, orders.discount_fee, orders.adjust_fee, orders.sku_properties_name, orders.item_meal_name, orders.buyer_rate, orders.seller_rate, orders.outer_iid, orders.outer_sku_id, orders.refund_id, orders.seller_type 
3.fields：orders（返回Order的所有内容）
	 **/
	this.fields;
	
	/** 
	 * 如果为true则查询模糊订单列表，为false则查询正常的订单。可通过模糊订单列表中的buyer_nick字段和Acookie数据中的第12列数值进行关联，从而得到订单的访问来源等数据。
	 **/
	this.isAcookie;
	
	/** 
	 * 页码。取值范围:大于零的整数;默认值:1
	 **/
	this.pageNo;
	
	/** 
	 * 每页条数。取值范围：1~100，默认值：40。<span style="color:red;font-weight: bold;">建议使用40~50，可以提高成功率，减少超时数量</span>。
	 **/
	this.pageSize;
	
	/** 
	 * 查询修改开始时间(修改时间跨度不能大于一天)。格式:yyyy-MM-dd HH:mm:ss
	 **/
	this.startModified;
	
	/** 
	 * 交易状态，默认查询所有交易状态的数据，除了默认值外每次只能查询一种状态。 可选值 TRADE_NO_CREATE_PAY(没有创建支付宝交易) WAIT_BUYER_PAY(等待买家付款) WAIT_SELLER_SEND_GOODS(等待卖家发货,即:买家已付款) WAIT_BUYER_CONFIRM_GOODS(等待买家确认收货,即:卖家已发货) TRADE_BUYER_SIGNED(买家已签收,货到付款专用) TRADE_FINISHED(交易成功) TRADE_CLOSED(交易关闭) TRADE_CLOSED_BY_TAOBAO(交易被淘宝关闭) ALL_WAIT_PAY(包含：WAIT_BUYER_PAY、TRADE_NO_CREATE_PAY) ALL_CLOSED(包含：TRADE_CLOSED、TRADE_CLOSED_BY_TAOBAO)
	 **/
	this.status;
	
	/** 
	 * 卖家对交易的自定义分组标签，目前可选值为：time_card（点卡软件代充），fee_card（话费软件代充）
	 **/
	this.tag;
	
	/** 
	 * 交易类型列表，同时查询多种交易类型可用逗号分隔。默认同时查询guarantee_trade, auto_delivery, ec, cod的4种交易类型的数据 。
可选值：
fixed(一口价)
auction(拍卖)
guarantee_trade(一口价、拍卖)
independent_simple_trade(旺店入门版交易)
independent_shop_trade(旺店标准版交易)
auto_delivery(自动发货)
ec(直冲) cod(货到付款)
fenxiao(分销)
game_equipment(游戏装备)
shopex_trade(ShopEX交易)
netcn_trade(万网交易)
external_trade(统一外部交易)
instant_trade (即时到账)
b2c_cod(大商家货到付款)
hotel_trade(酒店类型交易)
super_market_trade(商超交易),
super_market_cod_trade(商超货到付款交易)
taohua(桃花网交易类型）
waimai(外卖交易类型）
nopaid（即时到帐/趣味猜交易类型）
注：guarantee_trade是一个组合查询条件，并不是一种交易类型，获取批量或单个订单中不会返回此种类型的订单。
	 **/
	this.type;
	
	/** 
	 * 是否启用has_next的分页方式，如果指定true,则返回的结果中不包含总记录数，但是会新增一个是否存在下一页的的字段，<span style="color:red;font-weight: bold;">通过此种方式获取增量交易，效率在原有的基础上有80%的提升</span>。
	 **/
	this.useHasNext;
	
	this.apiParas = [];
};

request.prototype.setEndModified = function(endModified) {
	this.endModified = endModified;
	this.apiParas["end_modified"] = endModified;
};

request.prototype.getEndModified = function() {
	return this.endModified;
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

request.prototype.setIsAcookie = function(isAcookie) {
	this.isAcookie = isAcookie;
	this.apiParas["is_acookie"] = isAcookie;
};

request.prototype.getIsAcookie = function() {
	return this.isAcookie;
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

request.prototype.setTag = function(tag) {
	this.tag = tag;
	this.apiParas["tag"] = tag;
};

request.prototype.getTag = function() {
	return this.tag;
};

request.prototype.setType = function(type) {
	this.type = type;
	this.apiParas["type"] = type;
};

request.prototype.getType = function() {
	return this.type;
};

request.prototype.setUseHasNext = function(useHasNext) {
	this.useHasNext = useHasNext;
	this.apiParas["use_has_next"] = useHasNext;
};

request.prototype.getUseHasNext = function() {
	return this.useHasNext;
};

request.prototype.getApiMethodName = function() {
	return "taobao.trades.sold.increment.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.endModified,"endModified");
	topApiCheck.checkNotNull(this.fields,"fields");
	topApiCheck.checkNotNull(this.startModified,"startModified");
};

