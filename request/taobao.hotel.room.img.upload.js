
/**
 * TOP API: taobao.hotel.room.img.upload request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 酒店房间商品gid。必须为数字。
	 **/
	this.gid;
	
	/** 
	 * 酒店商品图片。类型:JPG,GIF;最大长度:500K。支持的文件类型：gif,jpg,jpeg,png。
如果原图片少于5张，若没传序号或序号大于原图片个数，则在原图片最后添加，否则按序号插入到原图片中去，自动后移。
如果原图片大于5张，若没传序号，则替换最后一张图片，否则在序号位置插入，图片向后移，最后一张被删除。
	 **/
	this.pic;
	
	/** 
	 * 图片序号，可选值：1，2，3，4，5
	 **/
	this.position;
	
	this.apiParas = [];
};

request.prototype.setGid = function(gid) {
	this.gid = gid;
	this.apiParas["gid"] = gid;
};

request.prototype.getGid = function() {
	return this.gid;
};

request.prototype.setPic = function(pic) {
	this.pic = pic;
	this.apiParas["pic"] = pic;
};

request.prototype.getPic = function() {
	return this.pic;
};

request.prototype.setPosition = function(position) {
	this.position = position;
	this.apiParas["position"] = position;
};

request.prototype.getPosition = function() {
	return this.position;
};

request.prototype.getApiMethodName = function() {
	return "taobao.hotel.room.img.upload";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.gid,"gid");
	topApiCheck.checkNotNull(this.pic,"pic");
};

