
/**
 * TOP API: taobao.product.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 商品类目id.调用taobao.itemcats.get获取;必须是叶子类目id,如果没有传product_id,那么cid和props必须要传.
	 **/
	this.cid;
	
	/** 
	 * 需返回的字段列表.可选值:Product数据结构中的所有字段;多个字段之间用","分隔.
	 **/
	this.fields;
	
	/** 
	 * Product的id.两种方式来查看一个产品:1.传入product_id来查询 2.传入cid和props来查询
	 **/
	this.productId;
	
	/** 
	 * 比如:诺基亚N73这个产品的关键属性列表就是:品牌:诺基亚;型号:N73,对应的PV值就是10005:10027;10006:29729.
	 **/
	this.props;
	
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

request.prototype.setProductId = function(productId) {
	this.productId = productId;
	this.apiParas["product_id"] = productId;
};

request.prototype.getProductId = function() {
	return this.productId;
};

request.prototype.setProps = function(props) {
	this.props = props;
	this.apiParas["props"] = props;
};

request.prototype.getProps = function() {
	return this.props;
};

request.prototype.getApiMethodName = function() {
	return "taobao.product.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.fields,"fields");
};

