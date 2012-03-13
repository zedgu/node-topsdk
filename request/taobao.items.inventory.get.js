
/**
 * TOP API: taobao.items.inventory.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 分类字段。可选值:

regular_shelved(定时上架)
never_on_shelf(从未上架)
sold_out(全部卖完)
off_shelf(我下架的)
for_shelved(等待所有上架)
violation_off_shelf(违规下架的)
默认查询的是for_shelved(等待所有上架)这个状态的商品
	 **/
	this.banner;
	
	/** 
	 * 商品类目ID。ItemCat中的cid字段。可以通过taobao.itemcats.get取到
	 **/
	this.cid;
	
	/** 
	 * 商品结束修改时间
	 **/
	this.endModified;
	
	/** 
	 * 需返回的字段列表。可选值：Item商品结构体中的以下字段： 
approve_status,num_iid,title,nick,type,cid,pic_url,num,props,valid_thru, 

list_time,price,has_discount,has_invoice,has_warranty,has_showcase, 

modified,delist_time,postage_id,seller_cids,outer_id；字段之间用“,”分隔。 

不支持其他字段，如果需要获取其他字段数据，调用taobao.item.get。
	 **/
	this.fields;
	
	/** 
	 * 是否参与会员折扣。可选值：true，false。默认不过滤该条件
	 **/
	this.hasDiscount;
	
	/** 
	 * 商品是否在外部网店显示
	 **/
	this.isEx;
	
	/** 
	 * 商品是否在淘宝显示
	 **/
	this.isTaobao;
	
	/** 
	 * 排序方式。格式为column:asc/desc ，column可选值:list_time(上架时间),delist_time(下架时间),num(商品数量)，modified(最近修改时间);默认上架时间降序(即最新上架排在前面)。如按照上架时间降序排序方式为list_time:desc
	 **/
	this.orderBy;
	
	/** 
	 * 页码。取值范围:大于零小于等于101的整数;默认值为1，即返回第一页数据。用此接口获取数据，当翻页获取的条数（page_no*page_size）超过10万条,为了保护后台搜索引擎，接口将报错。请大家尽可能的细化自己的搜索条件，例如根据修改时间分段获取商品
	 **/
	this.pageNo;
	
	/** 
	 * 每页条数。取值范围:大于零的整数;最大值：200；默认值：40。
	 **/
	this.pageSize;
	
	/** 
	 * 搜索字段。搜索商品的title。
	 **/
	this.q;
	
	/** 
	 * 卖家店铺内自定义类目ID。多个之间用“,”分隔。可以根据taobao.sellercats.list.get获得.(<font color="red">注：目前最多支持32个ID号传入</font>)
	 **/
	this.sellerCids;
	
	/** 
	 * 商品起始修改时间
	 **/
	this.startModified;
	
	this.apiParas = [];
};

request.prototype.setBanner = function(banner) {
	this.banner = banner;
	this.apiParas["banner"] = banner;
};

request.prototype.getBanner = function() {
	return this.banner;
};

request.prototype.setCid = function(cid) {
	this.cid = cid;
	this.apiParas["cid"] = cid;
};

request.prototype.getCid = function() {
	return this.cid;
};

request.prototype.setEndModified = function(endModified) {
	this.endModified = endModified;
	this.apiParas["end_modified"] = endModified;
};

request.prototype.getEndModified = function() {
	return this.endModified;
};

request.prototype.setFields = function(fields) {
	this.fields = fields;
	this.apiParas["fields"] = fields;
};

request.prototype.getFields = function() {
	return this.fields;
};

request.prototype.setHasDiscount = function(hasDiscount) {
	this.hasDiscount = hasDiscount;
	this.apiParas["has_discount"] = hasDiscount;
};

request.prototype.getHasDiscount = function() {
	return this.hasDiscount;
};

request.prototype.setIsEx = function(isEx) {
	this.isEx = isEx;
	this.apiParas["is_ex"] = isEx;
};

request.prototype.getIsEx = function() {
	return this.isEx;
};

request.prototype.setIsTaobao = function(isTaobao) {
	this.isTaobao = isTaobao;
	this.apiParas["is_taobao"] = isTaobao;
};

request.prototype.getIsTaobao = function() {
	return this.isTaobao;
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

request.prototype.setQ = function(q) {
	this.q = q;
	this.apiParas["q"] = q;
};

request.prototype.getQ = function() {
	return this.q;
};

request.prototype.setSellerCids = function(sellerCids) {
	this.sellerCids = sellerCids;
	this.apiParas["seller_cids"] = sellerCids;
};

request.prototype.getSellerCids = function() {
	return this.sellerCids;
};

request.prototype.setStartModified = function(startModified) {
	this.startModified = startModified;
	this.apiParas["start_modified"] = startModified;
};

request.prototype.getStartModified = function() {
	return this.startModified;
};

request.prototype.getApiMethodName = function() {
	return "taobao.items.inventory.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkMinValue(this.cid,0,"cid");
	topApiCheck.checkNotNull(this.fields,"fields");
	topApiCheck.checkMaxListSize(this.sellerCids,32,"sellerCids");
};

