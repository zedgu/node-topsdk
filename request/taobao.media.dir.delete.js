
/**
 * TOP API: taobao.media.dir.delete request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 申请cdn资源的分配的userId
	 **/
	this.cdnUserId;
	
	/** 
	 * 目录id
	 **/
	this.dirId;
	
	this.apiParas = [];
};

request.prototype.setCdnUserId = function(cdnUserId) {
	this.cdnUserId = cdnUserId;
	this.apiParas["cdn_user_id"] = cdnUserId;
};

request.prototype.getCdnUserId = function() {
	return this.cdnUserId;
};

request.prototype.setDirId = function(dirId) {
	this.dirId = dirId;
	this.apiParas["dir_id"] = dirId;
};

request.prototype.getDirId = function() {
	return this.dirId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.media.dir.delete";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.cdnUserId,"cdnUserId");
	topApiCheck.checkMinValue(this.cdnUserId,1,"cdnUserId");
	topApiCheck.checkNotNull(this.dirId,"dirId");
	topApiCheck.checkMinValue(this.dirId,1,"dirId");
};

