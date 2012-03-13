
/**
 * TOP API: taobao.sellercats.list.add request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 卖家自定义类目名称。不超过20个字符
	 **/
	this.name;
	
	/** 
	 * 父类目编号，如果类目为店铺下的一级类目：值等于0，如果类目为子类目，调用获取taobao.sellercats.list.get父类目编号
	 **/
	this.parentCid;
	
	/** 
	 * 链接图片URL地址。(绝对地址，格式：http://host/image_path)
	 **/
	this.pictUrl;
	
	/** 
	 * 该类目在页面上的排序位置,取值范围:大于零的整数
	 **/
	this.sortOrder;
	
	this.apiParas = [];
};

request.prototype.setName = function(name) {
	this.name = name;
	this.apiParas["name"] = name;
};

request.prototype.getName = function() {
	return this.name;
};

request.prototype.setParentCid = function(parentCid) {
	this.parentCid = parentCid;
	this.apiParas["parent_cid"] = parentCid;
};

request.prototype.getParentCid = function() {
	return this.parentCid;
};

request.prototype.setPictUrl = function(pictUrl) {
	this.pictUrl = pictUrl;
	this.apiParas["pict_url"] = pictUrl;
};

request.prototype.getPictUrl = function() {
	return this.pictUrl;
};

request.prototype.setSortOrder = function(sortOrder) {
	this.sortOrder = sortOrder;
	this.apiParas["sort_order"] = sortOrder;
};

request.prototype.getSortOrder = function() {
	return this.sortOrder;
};

request.prototype.getApiMethodName = function() {
	return "taobao.sellercats.list.add";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.name,"name");
};

