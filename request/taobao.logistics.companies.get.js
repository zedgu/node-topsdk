
/**
 * TOP API: taobao.logistics.companies.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 需返回的字段列表。可选值:LogisticCompany 结构中的所有字段;多个字段间用","逗号隔开.
如:id,code,name,reg_mail_no
<br><font color='red'>说明：</font>
<br>id：物流公司ID
<br>code：物流公司code
<br>name：物流公司名称
<br>reg_mail_no：物流公司对应的运单规则
	 **/
	this.fields;
	
	/** 
	 * 是否查询推荐物流公司.可选值:true,false.如果不提供此参数,将会返回所有支持电话联系的物流公司.
	 **/
	this.isRecommended;
	
	/** 
	 * 推荐物流公司的下单方式.可选值:offline(电话联系/自己联系),online(在线下单),all(即电话联系又在线下单). 此参数仅仅用于is_recommended 为ture时。就是说对于推荐物流公司才可用.如果不选择此参数将会返回推荐物流中支持电话联系的物流公司.
	 **/
	this.orderMode;
	
	this.apiParas = [];
};

request.prototype.setFields = function(fields) {
	this.fields = fields;
	this.apiParas["fields"] = fields;
};

request.prototype.getFields = function() {
	return this.fields;
};

request.prototype.setIsRecommended = function(isRecommended) {
	this.isRecommended = isRecommended;
	this.apiParas["is_recommended"] = isRecommended;
};

request.prototype.getIsRecommended = function() {
	return this.isRecommended;
};

request.prototype.setOrderMode = function(orderMode) {
	this.orderMode = orderMode;
	this.apiParas["order_mode"] = orderMode;
};

request.prototype.getOrderMode = function() {
	return this.orderMode;
};

request.prototype.getApiMethodName = function() {
	return "taobao.logistics.companies.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.fields,"fields");
};

