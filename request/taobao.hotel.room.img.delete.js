
/**
 * TOP API: taobao.hotel.room.img.delete request
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
	 * 图片序号，可选值：1，2，3，4，5。
如果原图片个数小于等于1，则报错，不能删除图片。
如果原图片个数小于待删除的图片序号，则报错，图片序号错误。
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

request.prototype.setPosition = function(position) {
	this.position = position;
	this.apiParas["position"] = position;
};

request.prototype.getPosition = function() {
	return this.position;
};

request.prototype.getApiMethodName = function() {
	return "taobao.hotel.room.img.delete";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.gid,"gid");
	topApiCheck.checkNotNull(this.position,"position");
};

