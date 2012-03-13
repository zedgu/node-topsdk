
/**
 * TOP API: taobao.taobaoke.items.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 商品所在地
	 **/
	this.area;
	
	/** 
	 * 是否自动发货
	 **/
	this.autoSend;
	
	/** 
	 * 是否支持抵价券，设置为true表示该商品支持抵价券，设置为false或不设置表示不判断这个属性
	 **/
	this.cashCoupon;
	
	/** 
	 * 是否支持货到付款，设置为true表示该商品是支持货到付款，设置为false或不设置表示不判断这个属性
	 **/
	this.cashOndelivery;
	
	/** 
	 * 商品所属分类id
	 **/
	this.cid;
	
	/** 
	 * 最高累计推广佣金选项
	 **/
	this.endCommissionNum;
	
	/** 
	 * 最高佣金比率选项，如：2345表示23.45%。注：要起始佣金比率和最高佣金比率一起设置才有效。
	 **/
	this.endCommissionRate;
	
	/** 
	 * 可选值和start_credit一样.start_credit的值一定要小于或等于end_credit的值。注：end_credit与start_credit一起使用才生效
	 **/
	this.endCredit;
	
	/** 
	 * 最高价格
	 **/
	this.endPrice;
	
	/** 
	 * 累计推广量范围结束
	 **/
	this.endTotalnum;
	
	/** 
	 * 需返回的字段列表.可选值:num_iid,title,nick,pic_url,price,click_url,commission,commission_rate,commission_num,commission_volume,shop_click_url,seller_credit_score,item_location,volume
;字段之间用","分隔
	 **/
	this.fields;
	
	/** 
	 * 是否查询消保卖家
	 **/
	this.guarantee;
	
	/** 
	 * 标识一个应用是否来在无线或者手机应用,如果是true则会使用其他规则加密点击串.如果不穿值,则默认是false.
	 **/
	this.isMobile;
	
	/** 
	 * 商品标题中包含的关键字. 注意:查询时keyword,cid至少选择其中一个参数
	 **/
	this.keyword;
	
	/** 
	 * 是否商城的商品，设置为true表示该商品是属于淘宝商城的商品，设置为false或不设置表示不判断这个属性
	 **/
	this.mallItem;
	
	/** 
	 * 淘宝用户昵称，注：指的是淘宝的会员登录名.如果昵称错误,那么客户就收不到佣金.每个淘宝昵称都对应于一个pid，在这里输入要结算佣金的淘宝昵称，当推广的商品成功后，佣金会打入此输入的淘宝昵称的账户。具体的信息可以登入阿里妈妈的网站查看.
<font color="red">注意nick和pid至少需要传递一个,如果2个都传了,将以pid为准</font>
	 **/
	this.nick;
	
	/** 
	 * 是否30天维修，设置为true表示该商品是支持30天维修，设置为false或不设置表示不判断这个属性
	 **/
	this.onemonthRepair;
	
	/** 
	 * 自定义输入串.格式:英文和数字组成;长度不能大于12个字符,区分不同的推广渠道,如:bbs,表示bbs为推广渠道;blog,表示blog为推广渠道.
	 **/
	this.outerCode;
	
	/** 
	 * 是否海外商品，设置为true表示该商品是属于海外商品，默认为false
	 **/
	this.overseasItem;
	
	/** 
	 * 结果页数.1~99
	 **/
	this.pageNo;
	
	/** 
	 * 每页返回结果数.最大每页40
	 **/
	this.pageSize;
	
	/** 
	 * 用户的pid,必须是mm_xxxx_0_0这种格式中间的"xxxx".
<font color="red">注意nick和pid至少需要传递一个,如果2个都传了,将以pid为准,且pid的最大长度是20</font>
	 **/
	this.pid;
	
	/** 
	 * 是否如实描述(即:先行赔付)商品，设置为true表示该商品是如实描述的商品，设置为false或不设置表示不判断这个属性
	 **/
	this.realDescribe;
	
	/** 
	 * 是否支持7天退换，设置为true表示该商品支持7天退换，设置为false或不设置表示不判断这个属性
	 **/
	this.sevendaysReturn;
	
	/** 
	 * 默认排序:default

price_desc(价格从高到低) 
price_asc(价格从低到高) 
credit_desc(信用等级从高到低) 
commissionRate_desc(佣金比率从高到低) 
commissionRate_asc(佣金比率从低到高) 
commissionNum_desc(成交量成高到低) 
commissionNum_asc(成交量从低到高) 
commissionVolume_desc(总支出佣金从高到低) 
commissionVolume_asc(总支出佣金从低到高) 
delistTime_desc(商品下架时间从高到低) 
delistTime_asc(商品下架时间从低到高)
	 **/
	this.sort;
	
	/** 
	 * 起始累计推广量佣金.注：返回的数据是30天内累计推广量，具该字段要与最高累计推广量一起使用才生效
	 **/
	this.startCommissionNum;
	
	/** 
	 * 起始佣金比率选项，如：1234表示12.34%
	 **/
	this.startCommissionRate;
	
	/** 
	 * 卖家信用:

1heart(一心) 
2heart (两心) 
3heart(三心) 
4heart(四心) 
5heart(五心) 
1diamond(一钻) 
2diamond(两钻) 
3diamond(三钻) 
4diamond(四钻) 
5diamond(五钻) 
1crown(一冠) 
2crown(两冠) 
3crown(三冠) 
4crown(四冠) 
5crown(五冠) 
1goldencrown(一黄冠) 
2goldencrown(二黄冠) 
3goldencrown(三黄冠) 
4goldencrown(四黄冠) 
5goldencrown(五黄冠)
	 **/
	this.startCredit;
	
	/** 
	 * 起始价格.传入价格参数时,需注意起始价格和最高价格必须一起传入,并且 start_price <= end_price
	 **/
	this.startPrice;
	
	/** 
	 * 累计推广量范围开始
	 **/
	this.startTotalnum;
	
	/** 
	 * 是否支持VIP卡，设置为true表示该商品支持VIP卡，设置为false或不设置表示不判断这个属性
	 **/
	this.vipCard;
	
	this.apiParas = [];
};

request.prototype.setArea = function(area) {
	this.area = area;
	this.apiParas["area"] = area;
};

request.prototype.getArea = function() {
	return this.area;
};

request.prototype.setAutoSend = function(autoSend) {
	this.autoSend = autoSend;
	this.apiParas["auto_send"] = autoSend;
};

request.prototype.getAutoSend = function() {
	return this.autoSend;
};

request.prototype.setCashCoupon = function(cashCoupon) {
	this.cashCoupon = cashCoupon;
	this.apiParas["cash_coupon"] = cashCoupon;
};

request.prototype.getCashCoupon = function() {
	return this.cashCoupon;
};

request.prototype.setCashOndelivery = function(cashOndelivery) {
	this.cashOndelivery = cashOndelivery;
	this.apiParas["cash_ondelivery"] = cashOndelivery;
};

request.prototype.getCashOndelivery = function() {
	return this.cashOndelivery;
};

request.prototype.setCid = function(cid) {
	this.cid = cid;
	this.apiParas["cid"] = cid;
};

request.prototype.getCid = function() {
	return this.cid;
};

request.prototype.setEndCommissionNum = function(endCommissionNum) {
	this.endCommissionNum = endCommissionNum;
	this.apiParas["end_commissionNum"] = endCommissionNum;
};

request.prototype.getEndCommissionNum = function() {
	return this.endCommissionNum;
};

request.prototype.setEndCommissionRate = function(endCommissionRate) {
	this.endCommissionRate = endCommissionRate;
	this.apiParas["end_commissionRate"] = endCommissionRate;
};

request.prototype.getEndCommissionRate = function() {
	return this.endCommissionRate;
};

request.prototype.setEndCredit = function(endCredit) {
	this.endCredit = endCredit;
	this.apiParas["end_credit"] = endCredit;
};

request.prototype.getEndCredit = function() {
	return this.endCredit;
};

request.prototype.setEndPrice = function(endPrice) {
	this.endPrice = endPrice;
	this.apiParas["end_price"] = endPrice;
};

request.prototype.getEndPrice = function() {
	return this.endPrice;
};

request.prototype.setEndTotalnum = function(endTotalnum) {
	this.endTotalnum = endTotalnum;
	this.apiParas["end_totalnum"] = endTotalnum;
};

request.prototype.getEndTotalnum = function() {
	return this.endTotalnum;
};

request.prototype.setFields = function(fields) {
	this.fields = fields;
	this.apiParas["fields"] = fields;
};

request.prototype.getFields = function() {
	return this.fields;
};

request.prototype.setGuarantee = function(guarantee) {
	this.guarantee = guarantee;
	this.apiParas["guarantee"] = guarantee;
};

request.prototype.getGuarantee = function() {
	return this.guarantee;
};

request.prototype.setIsMobile = function(isMobile) {
	this.isMobile = isMobile;
	this.apiParas["is_mobile"] = isMobile;
};

request.prototype.getIsMobile = function() {
	return this.isMobile;
};

request.prototype.setKeyword = function(keyword) {
	this.keyword = keyword;
	this.apiParas["keyword"] = keyword;
};

request.prototype.getKeyword = function() {
	return this.keyword;
};

request.prototype.setMallItem = function(mallItem) {
	this.mallItem = mallItem;
	this.apiParas["mall_item"] = mallItem;
};

request.prototype.getMallItem = function() {
	return this.mallItem;
};

request.prototype.setNick = function(nick) {
	this.nick = nick;
	this.apiParas["nick"] = nick;
};

request.prototype.getNick = function() {
	return this.nick;
};

request.prototype.setOnemonthRepair = function(onemonthRepair) {
	this.onemonthRepair = onemonthRepair;
	this.apiParas["onemonth_repair"] = onemonthRepair;
};

request.prototype.getOnemonthRepair = function() {
	return this.onemonthRepair;
};

request.prototype.setOuterCode = function(outerCode) {
	this.outerCode = outerCode;
	this.apiParas["outer_code"] = outerCode;
};

request.prototype.getOuterCode = function() {
	return this.outerCode;
};

request.prototype.setOverseasItem = function(overseasItem) {
	this.overseasItem = overseasItem;
	this.apiParas["overseas_item"] = overseasItem;
};

request.prototype.getOverseasItem = function() {
	return this.overseasItem;
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

request.prototype.setRealDescribe = function(realDescribe) {
	this.realDescribe = realDescribe;
	this.apiParas["real_describe"] = realDescribe;
};

request.prototype.getRealDescribe = function() {
	return this.realDescribe;
};

request.prototype.setSevendaysReturn = function(sevendaysReturn) {
	this.sevendaysReturn = sevendaysReturn;
	this.apiParas["sevendays_return"] = sevendaysReturn;
};

request.prototype.getSevendaysReturn = function() {
	return this.sevendaysReturn;
};

request.prototype.setSort = function(sort) {
	this.sort = sort;
	this.apiParas["sort"] = sort;
};

request.prototype.getSort = function() {
	return this.sort;
};

request.prototype.setStartCommissionNum = function(startCommissionNum) {
	this.startCommissionNum = startCommissionNum;
	this.apiParas["start_commissionNum"] = startCommissionNum;
};

request.prototype.getStartCommissionNum = function() {
	return this.startCommissionNum;
};

request.prototype.setStartCommissionRate = function(startCommissionRate) {
	this.startCommissionRate = startCommissionRate;
	this.apiParas["start_commissionRate"] = startCommissionRate;
};

request.prototype.getStartCommissionRate = function() {
	return this.startCommissionRate;
};

request.prototype.setStartCredit = function(startCredit) {
	this.startCredit = startCredit;
	this.apiParas["start_credit"] = startCredit;
};

request.prototype.getStartCredit = function() {
	return this.startCredit;
};

request.prototype.setStartPrice = function(startPrice) {
	this.startPrice = startPrice;
	this.apiParas["start_price"] = startPrice;
};

request.prototype.getStartPrice = function() {
	return this.startPrice;
};

request.prototype.setStartTotalnum = function(startTotalnum) {
	this.startTotalnum = startTotalnum;
	this.apiParas["start_totalnum"] = startTotalnum;
};

request.prototype.getStartTotalnum = function() {
	return this.startTotalnum;
};

request.prototype.setVipCard = function(vipCard) {
	this.vipCard = vipCard;
	this.apiParas["vip_card"] = vipCard;
};

request.prototype.getVipCard = function() {
	return this.vipCard;
};

request.prototype.getApiMethodName = function() {
	return "taobao.taobaoke.items.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkMaxValue(this.cid,2147483647,"cid");
	topApiCheck.checkNotNull(this.fields,"fields");
	topApiCheck.checkMaxValue(this.pageNo,1000000,"pageNo");
	topApiCheck.checkMaxValue(this.pageSize,400,"pageSize");
	topApiCheck.checkMaxLength(this.pid,20,"pid");
};

