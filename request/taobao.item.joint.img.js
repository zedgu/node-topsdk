
/**
 * TOP API: taobao.item.joint.img request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 商品图片id(如果是更新图片，则需要传该参数)
	 **/
	this.id;
	
	/** 
	 * 上传的图片是否关联为商品主图
	 **/
	this.isMajor;
	
	/** 
	 * 商品数字ID，必选
	 **/
	this.numIid;
	
	/** 
	 * 图片URL,图片空间图片的相对地址
	 **/
	this.picPath;
	
	/** 
	 * 图片序号
	 **/
	this.position;
	
	this.apiParas = [];
};

request.prototype.setId = function(id) {
	this.id = id;
	this.apiParas["id"] = id;
};

request.prototype.getId = function() {
	return this.id;
};

request.prototype.setIsMajor = function(isMajor) {
	this.isMajor = isMajor;
	this.apiParas["is_major"] = isMajor;
};

request.prototype.getIsMajor = function() {
	return this.isMajor;
};

request.prototype.setNumIid = function(numIid) {
	this.numIid = numIid;
	this.apiParas["num_iid"] = numIid;
};

request.prototype.getNumIid = function() {
	return this.numIid;
};

request.prototype.setPicPath = function(picPath) {
	this.picPath = picPath;
	this.apiParas["pic_path"] = picPath;
};

request.prototype.getPicPath = function() {
	return this.picPath;
};

request.prototype.setPosition = function(position) {
	this.position = position;
	this.apiParas["position"] = position;
};

request.prototype.getPosition = function() {
	return this.position;
};

request.prototype.getApiMethodName = function() {
	return "taobao.item.joint.img";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.numIid,"numIid");
	topApiCheck.checkMinValue(this.numIid,0,"numIid");
	topApiCheck.checkNotNull(this.picPath,"picPath");
};

