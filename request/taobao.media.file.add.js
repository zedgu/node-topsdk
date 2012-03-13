
/**
 * TOP API: taobao.media.file.add request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * cdn申请的isv编号
	 **/
	this.cdnUserId;
	
	/** 
	 * 文件属于的那个目录的目录编号
	 **/
	this.dirId;
	
	/** 
	 * 额外信息
	 **/
	this.ext;
	
	/** 
	 * 文件上传的内容
	 **/
	this.img;
	
	/** 
	 * 上传文件的名称
	 **/
	this.name;
	
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

request.prototype.setExt = function(ext) {
	this.ext = ext;
	this.apiParas["ext"] = ext;
};

request.prototype.getExt = function() {
	return this.ext;
};

request.prototype.setImg = function(img) {
	this.img = img;
	this.apiParas["img"] = img;
};

request.prototype.getImg = function() {
	return this.img;
};

request.prototype.setName = function(name) {
	this.name = name;
	this.apiParas["name"] = name;
};

request.prototype.getName = function() {
	return this.name;
};

request.prototype.getApiMethodName = function() {
	return "taobao.media.file.add";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.cdnUserId,"cdnUserId");
	topApiCheck.checkMinValue(this.cdnUserId,1,"cdnUserId");
	topApiCheck.checkNotNull(this.dirId,"dirId");
	topApiCheck.checkMinValue(this.dirId,0,"dirId");
	topApiCheck.checkNotNull(this.img,"img");
	topApiCheck.checkNotNull(this.name,"name");
	topApiCheck.checkMaxLength(this.name,50,"name");
};

