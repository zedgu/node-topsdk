
/**
 * TOP API: taobao.items.search request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 商品是否为虚拟商品
true：是虚拟商品
false：不是虚拟商品
	 **/
	this.auctionFlag;
	
	/** 
	 * 商品是否为自动发货
true：自动发货
false：非自动发货
	 **/
	this.autoPost;
	
	/** 
	 * 商品所属类目Id。ItemCat中的cid。 可以通过taobao.itemcats.get取到
	 **/
	this.cid;
	
	/** 
	 * 商品最高价格。单位:元。正整数，取值范围:0-100000000
	 **/
	this.endPrice;
	
	/** 
	 * 商品所属卖家的最大信用等级数，1表示1心，2表示2心……，设置此条件表示搜索结果里的商品，所属的卖家信用必须小于等于设置的end_score
	 **/
	this.endScore;
	
	/** 
	 * 商品30天内最大销售数，设置此条件表示搜索结果里的商品，最近成交量必须小于等于设置的end_volume
	 **/
	this.endVolume;
	
	/** 
	 * 需返回的商品结构字段列表。可选值为Item中的以下字段：num_iid,title,nick,pic_url,cid,price,type,delist_time,post_fee；多个字段之间用“,” 分隔。如：iid,title。新增字段location（卖家地址，可以分别获取location.city,location.state）；score(卖家信用等级数),volume(最近成交量)
新增字段：has_discount, num, is_prepay, promoted_service, ww_status, list_time
	 **/
	this.fields;
	
	/** 
	 * 是否正品保障商品(既是如实描述，又是7天无理由退换货的商品，设置了这个属性时：is_prepay和promoted_service不能再行设置)，设置为true表示该商品是正品保障的商品，设置为false或不设置表示不判断这个属性
	 **/
	this.genuineSecurity;
	
	/** 
	 * 商品是否对会员打折
	 **/
	this.hasDiscount;
	
	/** 
	 * 是否是3D淘宝的商品,置为false或为空表示不对是否3D商品进行判断
	 **/
	this.is3D;
	
	/** 
	 * 是否支持货到付款，设置为true表示支持货到付款，设置为false或不设置表示不判断这个属性
	 **/
	this.isCod;
	
	/** 
	 * 表示是否搜索商城的商品这一搜索条件。 值含义：true：搜索商城商品，false：搜素集市商品，若为null，则搜索全部的商品（默认值）
	 **/
	this.isMall;
	
	/** 
	 * 是否如实描述(即:先行赔付)商品，设置为true表示该商品是如实描述的商品，设置为false或不设置表示不判断这个属性
	 **/
	this.isPrepay;
	
	/** 
	 * 表示是否新品这一搜索条件。 值含义：true-是新品，false-无限制，不输入(null)-无限制
	 **/
	this.isXinpin;
	
	/** 
	 * 所在市。如：杭州
	 **/
	this.locationCity;
	
	/** 
	 * 所在省。如：浙江
	 **/
	this.locationState;
	
	/** 
	 * 卖家昵称列表。多个之间用“,”分隔；最多支持5个卖家昵称。如:nick1,nick2,nick3。
	 **/
	this.nicks;
	
	/** 
	 * 是否淘1站代购商品，设置为true表示淘1站商品，设置为false或不设置表示不判断这个属性
	 **/
	this.oneStation;
	
	/** 
	 * 排序方式。格式为column:asc/desc,column可选值为: price, delist_time, seller_credit；如按价格升序排列表示为：price:asc。新增排序字段：volume（最近成交量）；新增排序字段：popularity(商品的人气值)
	 **/
	this.orderBy;
	
	/** 
	 * 页码。取值范围:大于零的整数。默认值为1,即默认返回第一页数据。用此接口获取数据时，当翻页获取的条数（page_no*page_size）超过10240,为了保护后台搜索引擎，接口将报错。所以请大家尽可能的细化自己的搜索条件，例如根据修改时间分段获取商品
	 **/
	this.pageNo;
	
	/** 
	 * 每页条数。取值范围:大于零的整数;最大值：200；默认值：40
	 **/
	this.pageSize;
	
	/** 
	 * 免运费（不设置或设置为false为包含所有邮费状态，设置为true结果只有卖家包邮的商品）不能单独使用，要和其他条件一起用才行。
	 **/
	this.postFree;
	
	/** 
	 * 可以根据产品Id搜索属于这个spu的商品。这个字段可以通过查询 taobao.products.get 取到
	 **/
	this.productId;
	
	/** 
	 * 是否提供保障服务的商品。可选入参有：2、4。设置为2表示该商品是“假一赔三”的商品，设置为4表示该商品是“7天无理由退换货”的商品
	 **/
	this.promotedService;
	
	/** 
	 * 商品属性。商品属性。可以搜到拥有和输入属性一样的商品列表。字段格式为：pid1:vid1;pid2:vid2.属性的pid调用 taobao.itemprops.get.v2取得，属性值的vid用taobao.itempropvalues.get取得vid。
	 **/
	this.props;
	
	/** 
	 * 搜索字段。 用来搜索商品的title以及对应产品的title。
	 **/
	this.q;
	
	/** 
	 * 商品最低价格。单位:元。正整数，取值范围:0-100000000。
	 **/
	this.startPrice;
	
	/** 
	 * 商品所属卖家的最小信用等级数，1表示1心，2表示2心……，设置此条件表示搜索结果里的商品，所属的卖家信用必须大于等于设置的 start_score。
	 **/
	this.startScore;
	
	/** 
	 * 商品30天内最小销售数，设置此条件表示搜索结果里的商品，最近成交量必须大于等于设置的start_volume。
	 **/
	this.startVolume;
	
	/** 
	 * 商品的新旧状态。可选入参有：new、second、unused 。设置为new表示该商品是全新的商品，设置为second表示该商品是二手的商品，设置为unused表示该商品是闲置的商品
	 **/
	this.stuffStatus;
	
	/** 
	 * 旺旺在线状态（不设置结果包含所有状态，设置为true结果只有旺旺在线卖家的商品）不能单独使用，要和其他条件一起用才行。
	 **/
	this.wwStatus;
	
	this.apiParas = [];
};

request.prototype.setAuctionFlag = function(auctionFlag) {
	this.auctionFlag = auctionFlag;
	this.apiParas["auction_flag"] = auctionFlag;
};

request.prototype.getAuctionFlag = function() {
	return this.auctionFlag;
};

request.prototype.setAutoPost = function(autoPost) {
	this.autoPost = autoPost;
	this.apiParas["auto_post"] = autoPost;
};

request.prototype.getAutoPost = function() {
	return this.autoPost;
};

request.prototype.setCid = function(cid) {
	this.cid = cid;
	this.apiParas["cid"] = cid;
};

request.prototype.getCid = function() {
	return this.cid;
};

request.prototype.setEndPrice = function(endPrice) {
	this.endPrice = endPrice;
	this.apiParas["end_price"] = endPrice;
};

request.prototype.getEndPrice = function() {
	return this.endPrice;
};

request.prototype.setEndScore = function(endScore) {
	this.endScore = endScore;
	this.apiParas["end_score"] = endScore;
};

request.prototype.getEndScore = function() {
	return this.endScore;
};

request.prototype.setEndVolume = function(endVolume) {
	this.endVolume = endVolume;
	this.apiParas["end_volume"] = endVolume;
};

request.prototype.getEndVolume = function() {
	return this.endVolume;
};

request.prototype.setFields = function(fields) {
	this.fields = fields;
	this.apiParas["fields"] = fields;
};

request.prototype.getFields = function() {
	return this.fields;
};

request.prototype.setGenuineSecurity = function(genuineSecurity) {
	this.genuineSecurity = genuineSecurity;
	this.apiParas["genuine_security"] = genuineSecurity;
};

request.prototype.getGenuineSecurity = function() {
	return this.genuineSecurity;
};

request.prototype.setHasDiscount = function(hasDiscount) {
	this.hasDiscount = hasDiscount;
	this.apiParas["has_discount"] = hasDiscount;
};

request.prototype.getHasDiscount = function() {
	return this.hasDiscount;
};

request.prototype.setIs3D = function(is3D) {
	this.is3D = is3D;
	this.apiParas["is_3D"] = is3D;
};

request.prototype.getIs3D = function() {
	return this.is3D;
};

request.prototype.setIsCod = function(isCod) {
	this.isCod = isCod;
	this.apiParas["is_cod"] = isCod;
};

request.prototype.getIsCod = function() {
	return this.isCod;
};

request.prototype.setIsMall = function(isMall) {
	this.isMall = isMall;
	this.apiParas["is_mall"] = isMall;
};

request.prototype.getIsMall = function() {
	return this.isMall;
};

request.prototype.setIsPrepay = function(isPrepay) {
	this.isPrepay = isPrepay;
	this.apiParas["is_prepay"] = isPrepay;
};

request.prototype.getIsPrepay = function() {
	return this.isPrepay;
};

request.prototype.setIsXinpin = function(isXinpin) {
	this.isXinpin = isXinpin;
	this.apiParas["is_xinpin"] = isXinpin;
};

request.prototype.getIsXinpin = function() {
	return this.isXinpin;
};

request.prototype.setLocationCity = function(locationCity) {
	this.locationCity = locationCity;
	this.apiParas["location.city"] = locationCity;
};

request.prototype.getLocationCity = function() {
	return this.locationCity;
};

request.prototype.setLocationState = function(locationState) {
	this.locationState = locationState;
	this.apiParas["location.state"] = locationState;
};

request.prototype.getLocationState = function() {
	return this.locationState;
};

request.prototype.setNicks = function(nicks) {
	this.nicks = nicks;
	this.apiParas["nicks"] = nicks;
};

request.prototype.getNicks = function() {
	return this.nicks;
};

request.prototype.setOneStation = function(oneStation) {
	this.oneStation = oneStation;
	this.apiParas["one_station"] = oneStation;
};

request.prototype.getOneStation = function() {
	return this.oneStation;
};

request.prototype.setOrderBy = function(orderBy) {
	this.orderBy = orderBy;
	this.apiParas["order_by"] = orderBy;
};

request.prototype.getOrderBy = function() {
	return this.orderBy;
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

request.prototype.setPostFree = function(postFree) {
	this.postFree = postFree;
	this.apiParas["post_free"] = postFree;
};

request.prototype.getPostFree = function() {
	return this.postFree;
};

request.prototype.setProductId = function(productId) {
	this.productId = productId;
	this.apiParas["product_id"] = productId;
};

request.prototype.getProductId = function() {
	return this.productId;
};

request.prototype.setPromotedService = function(promotedService) {
	this.promotedService = promotedService;
	this.apiParas["promoted_service"] = promotedService;
};

request.prototype.getPromotedService = function() {
	return this.promotedService;
};

request.prototype.setProps = function(props) {
	this.props = props;
	this.apiParas["props"] = props;
};

request.prototype.getProps = function() {
	return this.props;
};

request.prototype.setQ = function(q) {
	this.q = q;
	this.apiParas["q"] = q;
};

request.prototype.getQ = function() {
	return this.q;
};

request.prototype.setStartPrice = function(startPrice) {
	this.startPrice = startPrice;
	this.apiParas["start_price"] = startPrice;
};

request.prototype.getStartPrice = function() {
	return this.startPrice;
};

request.prototype.setStartScore = function(startScore) {
	this.startScore = startScore;
	this.apiParas["start_score"] = startScore;
};

request.prototype.getStartScore = function() {
	return this.startScore;
};

request.prototype.setStartVolume = function(startVolume) {
	this.startVolume = startVolume;
	this.apiParas["start_volume"] = startVolume;
};

request.prototype.getStartVolume = function() {
	return this.startVolume;
};

request.prototype.setStuffStatus = function(stuffStatus) {
	this.stuffStatus = stuffStatus;
	this.apiParas["stuff_status"] = stuffStatus;
};

request.prototype.getStuffStatus = function() {
	return this.stuffStatus;
};

request.prototype.setWwStatus = function(wwStatus) {
	this.wwStatus = wwStatus;
	this.apiParas["ww_status"] = wwStatus;
};

request.prototype.getWwStatus = function() {
	return this.wwStatus;
};

request.prototype.getApiMethodName = function() {
	return "taobao.items.search";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkMinValue(this.cid,0,"cid");
	topApiCheck.checkMinValue(this.endPrice,0,"endPrice");
	topApiCheck.checkMinValue(this.endScore,0,"endScore");
	topApiCheck.checkMinValue(this.endVolume,0,"endVolume");
	topApiCheck.checkNotNull(this.fields,"fields");
	topApiCheck.checkMinValue(this.productId,0,"productId");
	topApiCheck.checkMinValue(this.startPrice,0,"startPrice");
	topApiCheck.checkMinValue(this.startScore,0,"startScore");
	topApiCheck.checkMinValue(this.startVolume,0,"startVolume");
};

