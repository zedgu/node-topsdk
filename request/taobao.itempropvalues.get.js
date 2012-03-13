
/**
 * TOP API: taobao.itempropvalues.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 叶子类目ID ,通过taobao.itemcats.get获得叶子类目ID
	 **/
	this.cid;
	
	/** 
	 * 需要返回的字段。目前支持有：cid,pid,prop_name,vid,name,name_alias,status,sort_order
	 **/
	this.fields;
	
	/** 
	 * 属性和属性值 id串，格式例如(pid1;pid2)或(pid1:vid1;pid2:vid2)或(pid1;pid2:vid2)
	 **/
	this.pvs;
	
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

request.prototype.setPvs = function(pvs) {
	this.pvs = pvs;
	this.apiParas["pvs"] = pvs;
};

request.prototype.getPvs = function() {
	return this.pvs;
};

request.prototype.getApiMethodName = function() {
	return "taobao.itempropvalues.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.cid,"cid");
	topApiCheck.checkNotNull(this.fields,"fields");
};

