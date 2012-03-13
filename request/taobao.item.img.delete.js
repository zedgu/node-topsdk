
/**
 * TOP API: taobao.item.img.delete request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 商品图片ID
	 **/
	this.id;
	
	/** 
	 * 商品数字ID，必选
	 **/
	this.numIid;
	
	this.apiParas = [];
};

request.prototype.setId = function(id) {
	this.id = id;
	this.apiParas["id"] = id;
};

request.prototype.getId = function() {
	return this.id;
};

request.prototype.setNumIid = function(numIid) {
	this.numIid = numIid;
	this.apiParas["num_iid"] = numIid;
};

request.prototype.getNumIid = function() {
	return this.numIid;
};

request.prototype.getApiMethodName = function() {
	return "taobao.item.img.delete";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.id,"id");
	topApiCheck.checkNotNull(this.numIid,"numIid");
	topApiCheck.checkMinValue(this.numIid,0,"numIid");
};

