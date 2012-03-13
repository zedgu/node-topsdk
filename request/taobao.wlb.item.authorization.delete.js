
/**
 * TOP API: taobao.wlb.item.authorization.delete request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 授权关系ID
	 **/
	this.authorizeId;
	
	this.apiParas = [];
};

request.prototype.setAuthorizeId = function(authorizeId) {
	this.authorizeId = authorizeId;
	this.apiParas["authorize_id"] = authorizeId;
};

request.prototype.getAuthorizeId = function() {
	return this.authorizeId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.wlb.item.authorization.delete";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.authorizeId,"authorizeId");
};

