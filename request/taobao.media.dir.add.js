
/**
 * TOP API: taobao.media.dir.add request
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
	 * 额外参数
	 **/
	this.ext;
	
	/** 
	 * 目录的名称
	 **/
	this.name;
	
	/** 
	 * 目录的所属目录的id，根目录id为0
	 **/
	this.parentId;
	
	this.apiParas = [];
};

request.prototype.setCdnUserId = function(cdnUserId) {
	this.cdnUserId = cdnUserId;
	this.apiParas["cdn_user_id"] = cdnUserId;
};

request.prototype.getCdnUserId = function() {
	return this.cdnUserId;
};

request.prototype.setExt = function(ext) {
	this.ext = ext;
	this.apiParas["ext"] = ext;
};

request.prototype.getExt = function() {
	return this.ext;
};

request.prototype.setName = function(name) {
	this.name = name;
	this.apiParas["name"] = name;
};

request.prototype.getName = function() {
	return this.name;
};

request.prototype.setParentId = function(parentId) {
	this.parentId = parentId;
	this.apiParas["parent_id"] = parentId;
};

request.prototype.getParentId = function() {
	return this.parentId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.media.dir.add";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.cdnUserId,"cdnUserId");
	topApiCheck.checkMinValue(this.cdnUserId,1,"cdnUserId");
	topApiCheck.checkNotNull(this.name,"name");
	topApiCheck.checkMaxLength(this.name,50,"name");
	topApiCheck.checkNotNull(this.parentId,"parentId");
	topApiCheck.checkMinValue(this.parentId,0,"parentId");
};

