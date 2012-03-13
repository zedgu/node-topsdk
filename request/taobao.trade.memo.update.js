
/**
 * TOP API: taobao.trade.memo.update request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 交易备注旗帜，可选值为：0(灰色), 1(红色), 2(黄色), 3(绿色), 4(蓝色), 5(粉红色)，默认值为0
	 **/
	this.flag;
	
	/** 
	 * 交易备注。最大长度: 1000个字节
	 **/
	this.memo;
	
	/** 
	 * 是否对memo的值置空
若为true，则不管传入的memo字段的值是否为空，都将会对已有的memo值清空，慎用；
若用false，则会根据memo是否为空来修改memo的值：若memo为空则忽略对已有memo字段的修改，若memo非空，则使用新传入的memo覆盖已有的memo的值
	 **/
	this.reset;
	
	/** 
	 * 交易编号
	 **/
	this.tid;
	
	this.apiParas = [];
};

request.prototype.setFlag = function(flag) {
	this.flag = flag;
	this.apiParas["flag"] = flag;
};

request.prototype.getFlag = function() {
	return this.flag;
};

request.prototype.setMemo = function(memo) {
	this.memo = memo;
	this.apiParas["memo"] = memo;
};

request.prototype.getMemo = function() {
	return this.memo;
};

request.prototype.setReset = function(reset) {
	this.reset = reset;
	this.apiParas["reset"] = reset;
};

request.prototype.getReset = function() {
	return this.reset;
};

request.prototype.setTid = function(tid) {
	this.tid = tid;
	this.apiParas["tid"] = tid;
};

request.prototype.getTid = function() {
	return this.tid;
};

request.prototype.getApiMethodName = function() {
	return "taobao.trade.memo.update";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkMaxValue(this.flag,5,"flag");
	topApiCheck.checkMinValue(this.flag,0,"flag");
	topApiCheck.checkNotNull(this.tid,"tid");
};

