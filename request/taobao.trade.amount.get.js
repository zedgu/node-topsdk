
/**
 * TOP API: taobao.trade.amount.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 订单帐务详情需要返回的字段信息，可选值如下：
1. TradeAmount中可指定的fields：
tid,alipay_no,created,pay_time,end_time,total_fee,payment,post_fee,cod_fee,commission_fee,buyer_obtain_point_fee
2. OrderAmount中可指定的fields：order_amounts.oid,order_amounts.title,order_amounts.num_iid,
order_amounts.sku_properties_name,order_amounts.sku_id,order_amounts.num,order_amounts.price,order_amounts.discount_fee,order_amounts.adjust_fee,order_amounts.payment,order_amounts.promotion_name
3. order_amounts(返回OrderAmount的所有内容)
4. promotion_details(指定该值会返回主订单的promotion_details中除id之外的所有字段)
	 **/
	this.fields;
	
	/** 
	 * 订单交易编号
	 **/
	this.tid;
	
	this.apiParas = [];
};

request.prototype.setFields = function(fields) {
	this.fields = fields;
	this.apiParas["fields"] = fields;
};

request.prototype.getFields = function() {
	return this.fields;
};

request.prototype.setTid = function(tid) {
	this.tid = tid;
	this.apiParas["tid"] = tid;
};

request.prototype.getTid = function() {
	return this.tid;
};

request.prototype.getApiMethodName = function() {
	return "taobao.trade.amount.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.fields,"fields");
	topApiCheck.checkNotNull(this.tid,"tid");
	topApiCheck.checkMaxValue(this.tid,9223372036854775807,"tid");
	topApiCheck.checkMinValue(this.tid,-9223372036854775808,"tid");
};

