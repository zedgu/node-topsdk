
/**
 * TOP API: taobao.traderate.add request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 是否匿名,卖家评不能匿名。可选值:true(匿名),false(非匿名)。注意：输入非可选值将会自动转为false
	 **/
	this.anony;
	
	/** 
	 * 评价内容,最大长度: 500个汉字 .注意：当评价结果为good时就不用输入评价内容.评价内容为neutral/bad的时候需要输入评价内容
	 **/
	this.content;
	
	/** 
	 * 子订单ID
	 **/
	this.oid;
	
	/** 
	 * 评价结果,可选值:good(好评),neutral(中评),bad(差评)
	 **/
	this.result;
	
	/** 
	 * 评价者角色,可选值:seller(卖家),buyer(买家)
	 **/
	this.role;
	
	/** 
	 * 交易ID
	 **/
	this.tid;
	
	this.apiParas = [];
};

request.prototype.setAnony = function(anony) {
	this.anony = anony;
	this.apiParas["anony"] = anony;
};

request.prototype.getAnony = function() {
	return this.anony;
};

request.prototype.setContent = function(content) {
	this.content = content;
	this.apiParas["content"] = content;
};

request.prototype.getContent = function() {
	return this.content;
};

request.prototype.setOid = function(oid) {
	this.oid = oid;
	this.apiParas["oid"] = oid;
};

request.prototype.getOid = function() {
	return this.oid;
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

request.prototype.setTid = function(tid) {
	this.tid = tid;
	this.apiParas["tid"] = tid;
};

request.prototype.getTid = function() {
	return this.tid;
};

request.prototype.getApiMethodName = function() {
	return "taobao.traderate.add";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.result,"result");
	topApiCheck.checkNotNull(this.role,"role");
	topApiCheck.checkNotNull(this.tid,"tid");
};

