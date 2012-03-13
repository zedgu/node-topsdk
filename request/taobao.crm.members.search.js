
/**
 * TOP API: taobao.crm.members.search request
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
	 * 城市
	 **/
	this.city;
	
	/** 
	 * 显示第几页的会员，如果输入的页码大于总共的页码数，例如总共10页，但是current_page的值为11，则返回空白页，最小页数为1
	 **/
	this.currentPage;
	
	/** 
	 * 会员等级，1：普通客户，2：高级会员，3：VIP会员, 4：至尊VIP会员           
注：grade=0通过relation_source=2查询
	 **/
	this.grade;
	
	/** 
	 * 分组id
	 **/
	this.groupId;
	
	/** 
	 * 最大平均客单价，单位为元
	 **/
	this.maxAvgPrice;
	
	/** 
	 * 最大交易关闭笔数
	 **/
	this.maxCloseTradeNum;
	
	/** 
	 * 最大交易宝贝件数
	 **/
	this.maxItemNum;
	
	/** 
	 * 最迟上次交易时间
	 **/
	this.maxLastTradeTime;
	
	/** 
	 * 最大交易额，单位为元
	 **/
	this.maxTradeAmount;
	
	/** 
	 * 最大交易量
	 **/
	this.maxTradeCount;
	
	/** 
	 * 最少平均客单价，单位为元
	 **/
	this.minAvgPrice;
	
	/** 
	 * 最小交易关闭的笔数
	 **/
	this.minCloseTradeNum;
	
	/** 
	 * 最小交易宝贝件数
	 **/
	this.minItemNum;
	
	/** 
	 * 最早上次交易时间
	 **/
	this.minLastTradeTime;
	
	/** 
	 * 最小交易额，单位为元
	 **/
	this.minTradeAmount;
	
	/** 
	 * 最小交易量
	 **/
	this.minTradeCount;
	
	/** 
	 * 指定按哪个字段排序，目前可排序的字段为：relation，trade_count，trade_amount，avg_price，lastest_time
	 **/
	this.order;
	
	/** 
	 * 每页显示的会员数量，page_size的最大值不能超过100，最小值不能小于1
	 **/
	this.pageSize;
	
	/** 
	 * 北京=1,天津=2,河北省=3,山西省=4,内蒙古自治区=5,辽宁省=6,吉林省=7,黑龙江省=8,上海=9,江苏省=10,浙江省=11,安徽省=12,福建省=13,江西省=14,山东省=15,河南省=16,湖北省=17,湖南省=18, 广东省=19,广西壮族自治区=20,海南省=21,重庆=22,四川省=23,贵州省=24,云南省=25,西藏自治区26,陕西省=27,甘肃省=28,青海省=29,宁夏回族自治区=30,新疆维吾尔自治区=31,台湾省=32,香港特别行政区=33,澳门特别行政区=34,海外=35
	 **/
	this.province;
	
	/** 
	 * 关系来源，1交易成功，2未成交(grade=0)
	 **/
	this.relationSource;
	
	/** 
	 * 用于描述是按升序还是降序排列结果
	 **/
	this.sort;
	
	this.apiParas = [];
};

request.prototype.setBuyerNick = function(buyerNick) {
	this.buyerNick = buyerNick;
	this.apiParas["buyer_nick"] = buyerNick;
};

request.prototype.getBuyerNick = function() {
	return this.buyerNick;
};

request.prototype.setCity = function(city) {
	this.city = city;
	this.apiParas["city"] = city;
};

request.prototype.getCity = function() {
	return this.city;
};

request.prototype.setCurrentPage = function(currentPage) {
	this.currentPage = currentPage;
	this.apiParas["current_page"] = currentPage;
};

request.prototype.getCurrentPage = function() {
	return this.currentPage;
};

request.prototype.setGrade = function(grade) {
	this.grade = grade;
	this.apiParas["grade"] = grade;
};

request.prototype.getGrade = function() {
	return this.grade;
};

request.prototype.setGroupId = function(groupId) {
	this.groupId = groupId;
	this.apiParas["group_id"] = groupId;
};

request.prototype.getGroupId = function() {
	return this.groupId;
};

request.prototype.setMaxAvgPrice = function(maxAvgPrice) {
	this.maxAvgPrice = maxAvgPrice;
	this.apiParas["max_avg_price"] = maxAvgPrice;
};

request.prototype.getMaxAvgPrice = function() {
	return this.maxAvgPrice;
};

request.prototype.setMaxCloseTradeNum = function(maxCloseTradeNum) {
	this.maxCloseTradeNum = maxCloseTradeNum;
	this.apiParas["max_close_trade_num"] = maxCloseTradeNum;
};

request.prototype.getMaxCloseTradeNum = function() {
	return this.maxCloseTradeNum;
};

request.prototype.setMaxItemNum = function(maxItemNum) {
	this.maxItemNum = maxItemNum;
	this.apiParas["max_item_num"] = maxItemNum;
};

request.prototype.getMaxItemNum = function() {
	return this.maxItemNum;
};

request.prototype.setMaxLastTradeTime = function(maxLastTradeTime) {
	this.maxLastTradeTime = maxLastTradeTime;
	this.apiParas["max_last_trade_time"] = maxLastTradeTime;
};

request.prototype.getMaxLastTradeTime = function() {
	return this.maxLastTradeTime;
};

request.prototype.setMaxTradeAmount = function(maxTradeAmount) {
	this.maxTradeAmount = maxTradeAmount;
	this.apiParas["max_trade_amount"] = maxTradeAmount;
};

request.prototype.getMaxTradeAmount = function() {
	return this.maxTradeAmount;
};

request.prototype.setMaxTradeCount = function(maxTradeCount) {
	this.maxTradeCount = maxTradeCount;
	this.apiParas["max_trade_count"] = maxTradeCount;
};

request.prototype.getMaxTradeCount = function() {
	return this.maxTradeCount;
};

request.prototype.setMinAvgPrice = function(minAvgPrice) {
	this.minAvgPrice = minAvgPrice;
	this.apiParas["min_avg_price"] = minAvgPrice;
};

request.prototype.getMinAvgPrice = function() {
	return this.minAvgPrice;
};

request.prototype.setMinCloseTradeNum = function(minCloseTradeNum) {
	this.minCloseTradeNum = minCloseTradeNum;
	this.apiParas["min_close_trade_num"] = minCloseTradeNum;
};

request.prototype.getMinCloseTradeNum = function() {
	return this.minCloseTradeNum;
};

request.prototype.setMinItemNum = function(minItemNum) {
	this.minItemNum = minItemNum;
	this.apiParas["min_item_num"] = minItemNum;
};

request.prototype.getMinItemNum = function() {
	return this.minItemNum;
};

request.prototype.setMinLastTradeTime = function(minLastTradeTime) {
	this.minLastTradeTime = minLastTradeTime;
	this.apiParas["min_last_trade_time"] = minLastTradeTime;
};

request.prototype.getMinLastTradeTime = function() {
	return this.minLastTradeTime;
};

request.prototype.setMinTradeAmount = function(minTradeAmount) {
	this.minTradeAmount = minTradeAmount;
	this.apiParas["min_trade_amount"] = minTradeAmount;
};

request.prototype.getMinTradeAmount = function() {
	return this.minTradeAmount;
};

request.prototype.setMinTradeCount = function(minTradeCount) {
	this.minTradeCount = minTradeCount;
	this.apiParas["min_trade_count"] = minTradeCount;
};

request.prototype.getMinTradeCount = function() {
	return this.minTradeCount;
};

request.prototype.setOrder = function(order) {
	this.order = order;
	this.apiParas["order"] = order;
};

request.prototype.getOrder = function() {
	return this.order;
};

request.prototype.setPageSize = function(pageSize) {
	this.pageSize = pageSize;
	this.apiParas["page_size"] = pageSize;
};

request.prototype.getPageSize = function() {
	return this.pageSize;
};

request.prototype.setProvince = function(province) {
	this.province = province;
	this.apiParas["province"] = province;
};

request.prototype.getProvince = function() {
	return this.province;
};

request.prototype.setRelationSource = function(relationSource) {
	this.relationSource = relationSource;
	this.apiParas["relation_source"] = relationSource;
};

request.prototype.getRelationSource = function() {
	return this.relationSource;
};

request.prototype.setSort = function(sort) {
	this.sort = sort;
	this.apiParas["sort"] = sort;
};

request.prototype.getSort = function() {
	return this.sort;
};

request.prototype.getApiMethodName = function() {
	return "taobao.crm.members.search";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkMaxLength(this.buyerNick,32,"buyerNick");
	topApiCheck.checkNotNull(this.currentPage,"currentPage");
	topApiCheck.checkMaxValue(this.currentPage,1000000,"currentPage");
	topApiCheck.checkMinValue(this.currentPage,1,"currentPage");
	topApiCheck.checkMaxValue(this.grade,4,"grade");
	topApiCheck.checkMinValue(this.grade,1,"grade");
	topApiCheck.checkMinValue(this.maxCloseTradeNum,0,"maxCloseTradeNum");
	topApiCheck.checkMinValue(this.maxItemNum,0,"maxItemNum");
	topApiCheck.checkMinValue(this.maxTradeCount,0,"maxTradeCount");
	topApiCheck.checkMinValue(this.minCloseTradeNum,0,"minCloseTradeNum");
	topApiCheck.checkMinValue(this.minItemNum,0,"minItemNum");
	topApiCheck.checkMinValue(this.minTradeCount,0,"minTradeCount");
	topApiCheck.checkMaxValue(this.pageSize,100,"pageSize");
	topApiCheck.checkMinValue(this.pageSize,1,"pageSize");
	topApiCheck.checkMaxValue(this.province,35,"province");
	topApiCheck.checkMinValue(this.province,1,"province");
	topApiCheck.checkMaxValue(this.relationSource,2,"relationSource");
	topApiCheck.checkMinValue(this.relationSource,1,"relationSource");
};

