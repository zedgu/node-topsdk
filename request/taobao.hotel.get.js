
/**
 * TOP API: taobao.hotel.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 要查询的酒店id。必须为数字
	 **/
	this.hid;
	
	/** 
	 * 是否需要返回该酒店的房型列表。可选值：true，false。
	 **/
	this.needRoomType;
	
	this.apiParas = [];
};

request.prototype.setHid = function(hid) {
	this.hid = hid;
	this.apiParas["hid"] = hid;
};

request.prototype.getHid = function() {
	return this.hid;
};

request.prototype.setNeedRoomType = function(needRoomType) {
	this.needRoomType = needRoomType;
	this.apiParas["need_room_type"] = needRoomType;
};

request.prototype.getNeedRoomType = function() {
	return this.needRoomType;
};

request.prototype.getApiMethodName = function() {
	return "taobao.hotel.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.hid,"hid");
};

