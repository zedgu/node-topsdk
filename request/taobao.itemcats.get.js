
/**
 * TOP API: taobao.itemcats.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 商品所属类目ID列表，用半角逗号(,)分隔 例如:(18957,19562,) (cids、parent_cid至少传一个)
	 **/
	this.cids;
	
	/** 
	 * 需要返回的字段列表，见ItemCat，默认返回：cid,parent_cid,name,is_parent
	 **/
	this.fields;
	
	/** 
	 * 父商品类目 id，0表示根节点, 传输该参数返回所有子类目。 (cids、parent_cid至少传一个)
	 **/
	this.parentCid;
	
	this.apiParas = [];
};

request.prototype.setCids = function(cids) {
	this.cids = cids;
	this.apiParas["cids"] = cids;
};

request.prototype.getCids = function() {
	return this.cids;
};

request.prototype.setFields = function(fields) {
	this.fields = fields;
	this.apiParas["fields"] = fields;
};

request.prototype.getFields = function() {
	return this.fields;
};

request.prototype.setParentCid = function(parentCid) {
	this.parentCid = parentCid;
	this.apiParas["parent_cid"] = parentCid;
};

request.prototype.getParentCid = function() {
	return this.parentCid;
};

request.prototype.getApiMethodName = function() {
	return "taobao.itemcats.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkMaxListSize(this.cids,1000,"cids");
};

