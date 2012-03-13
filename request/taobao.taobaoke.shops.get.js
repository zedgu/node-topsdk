
/**
 * TOP API: taobao.taobaoke.shops.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 前台类目id
	 **/
	this.cid;
	
	/** 
	 * 店铺商品数查询结束值
	 **/
	this.endAuctioncount;
	
	/** 
	 * 店铺佣金比例查询结束值
	 **/
	this.endCommissionrate;
	
	/** 
	 * 店铺掌柜信用等级查询结束
店铺的信用等级总共为20级 1-5:1heart-5heart;6-10:1diamond-5diamond;11-15:1crown-5crown;16-20:1goldencrown-5goldencrown
	 **/
	this.endCredit;
	
	/** 
	 * 店铺累计推广数查询结束值
	 **/
	this.endTotalaction;
	
	/** 
	 * 需要返回的字段，目前包括如下字段 user_id click_url shop_title commission_rate seller_credit shop_type auction_count total_auction
	 **/
	this.fields;
	
	/** 
	 * 店铺主题关键字查询
	 **/
	this.keyword;
	
	/** 
	 * 淘宝用户昵称，注：指的是淘宝的会员登录名.如果昵称错误,那么客户就收不到佣金.每个淘宝昵称都对应于一个pid，在这里输入要结算佣金的淘宝昵称，当推广的商品成功后，佣金会打入此输入的淘宝昵称的账户。具体的信息可以登入阿里妈妈的网站查看
	 **/
	this.nick;
	
	/** 
	 * 是否只显示商城店铺
	 **/
	this.onlyMall;
	
	/** 
	 * 自定义输入串.格式:英文和数字组成;长度不能大于12个字符,区分不同的推广渠道,如:bbs,表示bbs为推广渠道;blog,表示blog为推广渠道.
	 **/
	this.outerCode;
	
	/** 
	 * 页码.结果页1~99
	 **/
	this.pageNo;
	
	/** 
	 * 每页条数.最大每页40
	 **/
	this.pageSize;
	
	/** 
	 * 淘客用户的pid,用于生成点击串.nick和pid都传入的话,以pid为准
	 **/
	this.pid;
	
	/** 
	 * 店铺宝贝数查询开始值
	 **/
	this.startAuctioncount;
	
	/** 
	 * 店铺佣金比例查询开始值，注意佣金比例是x10000的整数.50表示0.5%
	 **/
	this.startCommissionrate;
	
	/** 
	 * 店铺掌柜信用等级起始
店铺的信用等级总共为20级 1-5:1heart-5heart;6-10:1diamond-5diamond;11-15:1crown-5crown;16-20:1goldencrown-5goldencrown
	 **/
	this.startCredit;
	
	/** 
	 * 店铺累计推广量开始值
	 **/
	this.startTotalaction;
	
	this.apiParas = [];
};

request.prototype.setCid = function(cid) {
	this.cid = cid;
	this.apiParas["cid"] = cid;
};

request.prototype.getCid = function() {
	return this.cid;
};

request.prototype.setEndAuctioncount = function(endAuctioncount) {
	this.endAuctioncount = endAuctioncount;
	this.apiParas["end_auctioncount"] = endAuctioncount;
};

request.prototype.getEndAuctioncount = function() {
	return this.endAuctioncount;
};

request.prototype.setEndCommissionrate = function(endCommissionrate) {
	this.endCommissionrate = endCommissionrate;
	this.apiParas["end_commissionrate"] = endCommissionrate;
};

request.prototype.getEndCommissionrate = function() {
	return this.endCommissionrate;
};

request.prototype.setEndCredit = function(endCredit) {
	this.endCredit = endCredit;
	this.apiParas["end_credit"] = endCredit;
};

request.prototype.getEndCredit = function() {
	return this.endCredit;
};

request.prototype.setEndTotalaction = function(endTotalaction) {
	this.endTotalaction = endTotalaction;
	this.apiParas["end_totalaction"] = endTotalaction;
};

request.prototype.getEndTotalaction = function() {
	return this.endTotalaction;
};

request.prototype.setFields = function(fields) {
	this.fields = fields;
	this.apiParas["fields"] = fields;
};

request.prototype.getFields = function() {
	return this.fields;
};

request.prototype.setKeyword = function(keyword) {
	this.keyword = keyword;
	this.apiParas["keyword"] = keyword;
};

request.prototype.getKeyword = function() {
	return this.keyword;
};

request.prototype.setNick = function(nick) {
	this.nick = nick;
	this.apiParas["nick"] = nick;
};

request.prototype.getNick = function() {
	return this.nick;
};

request.prototype.setOnlyMall = function(onlyMall) {
	this.onlyMall = onlyMall;
	this.apiParas["only_mall"] = onlyMall;
};

request.prototype.getOnlyMall = function() {
	return this.onlyMall;
};

request.prototype.setOuterCode = function(outerCode) {
	this.outerCode = outerCode;
	this.apiParas["outer_code"] = outerCode;
};

request.prototype.getOuterCode = function() {
	return this.outerCode;
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

request.prototype.setPid = function(pid) {
	this.pid = pid;
	this.apiParas["pid"] = pid;
};

request.prototype.getPid = function() {
	return this.pid;
};

request.prototype.setStartAuctioncount = function(startAuctioncount) {
	this.startAuctioncount = startAuctioncount;
	this.apiParas["start_auctioncount"] = startAuctioncount;
};

request.prototype.getStartAuctioncount = function() {
	return this.startAuctioncount;
};

request.prototype.setStartCommissionrate = function(startCommissionrate) {
	this.startCommissionrate = startCommissionrate;
	this.apiParas["start_commissionrate"] = startCommissionrate;
};

request.prototype.getStartCommissionrate = function() {
	return this.startCommissionrate;
};

request.prototype.setStartCredit = function(startCredit) {
	this.startCredit = startCredit;
	this.apiParas["start_credit"] = startCredit;
};

request.prototype.getStartCredit = function() {
	return this.startCredit;
};

request.prototype.setStartTotalaction = function(startTotalaction) {
	this.startTotalaction = startTotalaction;
	this.apiParas["start_totalaction"] = startTotalaction;
};

request.prototype.getStartTotalaction = function() {
	return this.startTotalaction;
};

request.prototype.getApiMethodName = function() {
	return "taobao.taobaoke.shops.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.fields,"fields");
};

