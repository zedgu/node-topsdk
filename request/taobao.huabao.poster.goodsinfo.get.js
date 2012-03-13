
/**
 * TOP API: taobao.huabao.poster.goodsinfo.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 画报的ID
	 **/
	this.posterId;
	
	this.apiParas = [];
};

request.prototype.setPosterId = function(posterId) {
	this.posterId = posterId;
	this.apiParas["poster_id"] = posterId;
};

request.prototype.getPosterId = function() {
	return this.posterId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.huabao.poster.goodsinfo.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.posterId,"posterId");
};

