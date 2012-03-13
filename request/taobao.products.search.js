
/**
 * TOP API: taobao.products.search request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 商品类目ID.调用taobao.itemcats.get获取.
	 **/
	this.cid;
	
	/** 
	 * 需返回的字段列表.可选值:Product数据结构中的以下字段:product_id,name,pic_url,cid,props,price,tsc;多个字段之间用","分隔.新增字段status(product的当前状态)
	 **/
	this.fields;
	
	/** 
	 * 页码.传入值为1代表第一页,传入值为2代表第二页,依此类推.默认返回的数据是从第一页开始.
	 **/
	this.pageNo;
	
	/** 
	 * 每页条数.每页返回最多返回100条,默认值为40.
	 **/
	this.pageSize;
	
	/** 
	 * 属性,属性值的组合.格式:pid:vid;pid:vid;调用taobao.itemprops.get获取类目属性pid 
,再用taobao.itempropvalues.get取得vid.
	 **/
	this.props;
	
	/** 
	 * 搜索的关键词是用来搜索产品的title以及关键属性值的名称.如:"优衣库 1234",这种用来表示查询优衣库这个品牌下的货号为1234的产品;　注:q,cid和props至少传入一个
	 **/
	this.q;
	
	/** 
	 * 想要获取的产品的状态列表，支持多个状态并列获取，多个状态之间用","分隔，最多同时指定5种状态。例如，只获取小二确认的spu传入"3",只要商家确认的传入"0"，既要小二确认又要商家确认的传入"0,3"。目前只支持者两种类型的状态搜索，输入其他状态无效。
	 **/
	this.status;
	
	/** 
	 * 传入值为：3表示3C表示3C垂直市场产品，4表示鞋城垂直市场产品，8表示网游垂直市场产品。一次只能指定一种垂直市场类型
	 **/
	this.verticalMarket;
	
	this.apiParas = [];
};

request.prototype.setCid = function(cid) {
	this.cid = cid;
	this.apiParas["cid"] = cid;
};

request.prototype.getCid = function() {
	return this.cid;
};

request.prototype.setFields = function(fields) {
	this.fields = fields;
	this.apiParas["fields"] = fields;
};

request.prototype.getFields = function() {
	return this.fields;
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

request.prototype.setStatus = function(status) {
	this.status = status;
	this.apiParas["status"] = status;
};

request.prototype.getStatus = function() {
	return this.status;
};

request.prototype.setVerticalMarket = function(verticalMarket) {
	this.verticalMarket = verticalMarket;
	this.apiParas["vertical_market"] = verticalMarket;
};

request.prototype.getVerticalMarket = function() {
	return this.verticalMarket;
};

request.prototype.getApiMethodName = function() {
	return "taobao.products.search";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.fields,"fields");
	topApiCheck.checkMaxLength(this.status,20,"status");
	topApiCheck.checkMinValue(this.verticalMarket,0,"verticalMarket");
};

