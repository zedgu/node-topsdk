
/**
 * TOP API: taobao.media.file.delete request
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
	 * 文件ID字符串,可以一个也可以一组,用英文逗号间隔,如450,120,155
	 **/
	this.fileIds;
	
	this.apiParas = [];
};

request.prototype.setCdnUserId = function(cdnUserId) {
	this.cdnUserId = cdnUserId;
	this.apiParas["cdn_user_id"] = cdnUserId;
};

request.prototype.getCdnUserId = function() {
	return this.cdnUserId;
};

request.prototype.setFileIds = function(fileIds) {
	this.fileIds = fileIds;
	this.apiParas["file_ids"] = fileIds;
};

request.prototype.getFileIds = function() {
	return this.fileIds;
};

request.prototype.getApiMethodName = function() {
	return "taobao.media.file.delete";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.cdnUserId,"cdnUserId");
	topApiCheck.checkMinValue(this.cdnUserId,0,"cdnUserId");
	topApiCheck.checkNotNull(this.fileIds,"fileIds");
	topApiCheck.checkMaxListSize(this.fileIds,50,"fileIds");
};

