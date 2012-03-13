
/**
 * TOP API: taobao.product.add request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 非关键属性结构:pid:vid;pid:vid.非关键属性不包含关键属性、销售属性、用户自定义属性、商品属性;调用taobao.itemprops.get获取pid,调用taobao.itempropvalues.get获取vid.<br><font color=red>注:支持最大长度为512字节</font>
	 **/
	this.binds;
	
	/** 
	 * 商品类目ID.调用taobao.itemcats.get获取;注意:必须是叶子类目 id.
	 **/
	this.cid;
	
	/** 
	 * 用户自定义属性,结构：pid1:value1;pid2:value2，如果有型号，系列,货号等用: 隔开 例如：“20000:优衣库:型号:001:632501:1234”，表示“品牌:优衣库:型号:001:货号:1234”
	 **/
	this.customerProps;
	
	/** 
	 * 产品描述.最大25000个字节
	 **/
	this.desc;
	
	/** 
	 * 产品主图片.最大1M,目前仅支持GIF,JPG.
	 **/
	this.image;
	
	/** 
	 * 是不是主图
	 **/
	this.major;
	
	/** 
	 * 上市时间。目前只支持鞋城类目传入此参数
	 **/
	this.marketTime;
	
	/** 
	 * 产品名称,最大60个字节.
	 **/
	this.name;
	
	/** 
	 * 外部产品ID
	 **/
	this.outerId;
	
	/** 
	 * 产品市场价.精确到2位小数;单位为元.如：200.07
	 **/
	this.price;
	
	/** 
	 * 销售属性值别名。格式为pid1:vid1:alias1;pid1:vid2:alia2。只有少数销售属性值支持传入别名，比如颜色和尺寸
	 **/
	this.propertyAlias;
	
	/** 
	 * 关键属性 结构:pid:vid;pid:vid.调用taobao.itemprops.get获取pid,调用taobao.itempropvalues.get获取vid;如果碰到用户自定义属性,请用customer_props.
	 **/
	this.props;
	
	/** 
	 * 销售属性结构:pid:vid;pid:vid.调用taobao.itemprops.get获取is_sale_prop＝true的pid,调用taobao.itempropvalues.get获取vid.
	 **/
	this.saleProps;
	
	this.apiParas = [];
};

request.prototype.setBinds = function(binds) {
	this.binds = binds;
	this.apiParas["binds"] = binds;
};

request.prototype.getBinds = function() {
	return this.binds;
};

request.prototype.setCid = function(cid) {
	this.cid = cid;
	this.apiParas["cid"] = cid;
};

request.prototype.getCid = function() {
	return this.cid;
};

request.prototype.setCustomerProps = function(customerProps) {
	this.customerProps = customerProps;
	this.apiParas["customer_props"] = customerProps;
};

request.prototype.getCustomerProps = function() {
	return this.customerProps;
};

request.prototype.setDesc = function(desc) {
	this.desc = desc;
	this.apiParas["desc"] = desc;
};

request.prototype.getDesc = function() {
	return this.desc;
};

request.prototype.setImage = function(image) {
	this.image = image;
	this.apiParas["image"] = image;
};

request.prototype.getImage = function() {
	return this.image;
};

request.prototype.setMajor = function(major) {
	this.major = major;
	this.apiParas["major"] = major;
};

request.prototype.getMajor = function() {
	return this.major;
};

request.prototype.setMarketTime = function(marketTime) {
	this.marketTime = marketTime;
	this.apiParas["market_time"] = marketTime;
};

request.prototype.getMarketTime = function() {
	return this.marketTime;
};

request.prototype.setName = function(name) {
	this.name = name;
	this.apiParas["name"] = name;
};

request.prototype.getName = function() {
	return this.name;
};

request.prototype.setOuterId = function(outerId) {
	this.outerId = outerId;
	this.apiParas["outer_id"] = outerId;
};

request.prototype.getOuterId = function() {
	return this.outerId;
};

request.prototype.setPrice = function(price) {
	this.price = price;
	this.apiParas["price"] = price;
};

request.prototype.getPrice = function() {
	return this.price;
};

request.prototype.setPropertyAlias = function(propertyAlias) {
	this.propertyAlias = propertyAlias;
	this.apiParas["property_alias"] = propertyAlias;
};

request.prototype.getPropertyAlias = function() {
	return this.propertyAlias;
};

request.prototype.setProps = function(props) {
	this.props = props;
	this.apiParas["props"] = props;
};

request.prototype.getProps = function() {
	return this.props;
};

request.prototype.setSaleProps = function(saleProps) {
	this.saleProps = saleProps;
	this.apiParas["sale_props"] = saleProps;
};

request.prototype.getSaleProps = function() {
	return this.saleProps;
};

request.prototype.getApiMethodName = function() {
	return "taobao.product.add";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkMaxLength(this.binds,512,"binds");
	topApiCheck.checkNotNull(this.cid,"cid");
	topApiCheck.checkNotNull(this.image,"image");
	topApiCheck.checkNotNull(this.name,"name");
	topApiCheck.checkNotNull(this.price,"price");
};

