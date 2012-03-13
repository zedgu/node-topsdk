
/**
 * TOP API: taobao.hotel.room.get request
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
	 * 是否需要返回该商品的酒店信息。可选值：true，false。
	 **/
	this.needHotel;
	
	/** 
	 * 是否需要返回该商品的宝贝描述。可选值：true，false。
	 **/
	this.needRoomDesc;
	
	/** 
	 * 是否需要返回该商品的房态列表。可选值：true，false。
	 **/
	this.needRoomQuotas;
	
	/** 
	 * 是否需要返回该商品的房型信息。可选值：true，false。
	 **/
	this.needRoomType;
	
	this.apiParas = [];
};

request.prototype.setGid = function(gid) {
	this.gid = gid;
	this.apiParas["gid"] = gid;
};

request.prototype.getGid = function() {
	return this.gid;
};

request.prototype.setNeedHotel = function(needHotel) {
	this.needHotel = needHotel;
	this.apiParas["need_hotel"] = needHotel;
};

request.prototype.getNeedHotel = function() {
	return this.needHotel;
};

request.prototype.setNeedRoomDesc = function(needRoomDesc) {
	this.needRoomDesc = needRoomDesc;
	this.apiParas["need_room_desc"] = needRoomDesc;
};

request.prototype.getNeedRoomDesc = function() {
	return this.needRoomDesc;
};

request.prototype.setNeedRoomQuotas = function(needRoomQuotas) {
	this.needRoomQuotas = needRoomQuotas;
	this.apiParas["need_room_quotas"] = needRoomQuotas;
};

request.prototype.getNeedRoomQuotas = function() {
	return this.needRoomQuotas;
};

request.prototype.setNeedRoomType = function(needRoomType) {
	this.needRoomType = needRoomType;
	this.apiParas["need_room_type"] = needRoomType;
};

request.prototype.getNeedRoomType = function() {
	return this.needRoomType;
};

request.prototype.getApiMethodName = function() {
	return "taobao.hotel.room.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.gid,"gid");
};

