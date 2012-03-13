
/**
 * TOP API: taobao.taobaoke.items.convert request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 需返回的字段列表.可选值:num_iid,title,nick,pic_url,price,click_url,commission,ommission_rate,commission_num,commission_volume,shop_click_url,seller_credit_score,item_location,volume
;字段之间用","分隔.
	 **/
	this.fields;
	
	/** 
	 * 标识一个应用是否来在无线或者手机应用,如果是true则会使用其他规则加密点击串.如果不穿值,则默认是false.
	 **/
	this.isMobile;
	
	/** 
	 * 推广者的淘宝会员昵称.注：指的是淘宝的会员登录名
	 **/
	this.nick;
	
	/** 
	 * 淘宝客商品数字id串.最大输入40个.格式如:"value1,value2,value3" 用" , "号分隔商品数字id
	 **/
	this.numIids;
	
	/** 
	 * 自定义输入串.格式:英文和数字组成;长度不能大于12个字符,区分不同的推广渠道,如:bbs,表示bbs为推广渠道;blog,表示blog为推广渠道.
	 **/
	this.outerCode;
	
	/** 
	 * 淘客用户的pid,用于生成点击串.nick和pid都传入的话,以pid为准
	 **/
	this.pid;
	
	this.apiParas = [];
};

request.prototype.setFields = function(fields) {
	this.fields = fields;
	this.apiParas["fields"] = fields;
};

request.prototype.getFields = function() {
	return this.fields;
};

request.prototype.setIsMobile = function(isMobile) {
	this.isMobile = isMobile;
	this.apiParas["is_mobile"] = isMobile;
};

request.prototype.getIsMobile = function() {
	return this.isMobile;
};

request.prototype.setNick = function(nick) {
	this.nick = nick;
	this.apiParas["nick"] = nick;
};

request.prototype.getNick = function() {
	return this.nick;
};

request.prototype.setNumIids = function(numIids) {
	this.numIids = numIids;
	this.apiParas["num_iids"] = numIids;
};

request.prototype.getNumIids = function() {
	return this.numIids;
};

request.prototype.setOuterCode = function(outerCode) {
	this.outerCode = outerCode;
	this.apiParas["outer_code"] = outerCode;
};

request.prototype.getOuterCode = function() {
	return this.outerCode;
};

request.prototype.setPid = function(pid) {
	this.pid = pid;
	this.apiParas["pid"] = pid;
};

request.prototype.getPid = function() {
	return this.pid;
};

request.prototype.getApiMethodName = function() {
	return "taobao.taobaoke.items.convert";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.fields,"fields");
	topApiCheck.checkNotNull(this.numIids,"numIids");
	topApiCheck.checkMaxListSize(this.numIids,50,"numIids");
};

