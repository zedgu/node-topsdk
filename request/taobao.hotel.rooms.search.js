
/**
 * TOP API: taobao.hotel.rooms.search request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 酒店房间商品gid列表，多个gid用英文逗号隔开，一次不超过20个。gids，hids，rids三项必须传一项，同时传递的情况下，作为查询条件的优先级由高到低依次为gids，hids，rids。
	 **/
	this.gids;
	
	/** 
	 * 酒店hid列表，多个hid用英文逗号隔开，一次不超过5个。gids，hids，rids三项必须传一项，同时传递的情况下，作为查询条件的优先级由高到低依次为gids，hids，rids。
	 **/
	this.hids;
	
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
	
	/** 
	 * 分页页码。取值范围，大于零的整数，默认值1，即返回第一页的数据。页面大小为20
	 **/
	this.pageNo;
	
	/** 
	 * 房型rid列表，多个rid用英文逗号隔开，一次不超过20个。gids，hids，rids三项必须传一项，同时传递的情况下，作为查询条件的优先级由高到低依次为gids，hids，rids。
	 **/
	this.rids;
	
	this.apiParas = [];
};

request.prototype.setGids = function(gids) {
	this.gids = gids;
	this.apiParas["gids"] = gids;
};

request.prototype.getGids = function() {
	return this.gids;
};

request.prototype.setHids = function(hids) {
	this.hids = hids;
	this.apiParas["hids"] = hids;
};

request.prototype.getHids = function() {
	return this.hids;
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

request.prototype.setPageNo = function(pageNo) {
	this.pageNo = pageNo;
	this.apiParas["page_no"] = pageNo;
};

request.prototype.getPageNo = function() {
	return this.pageNo;
};

request.prototype.setRids = function(rids) {
	this.rids = rids;
	this.apiParas["rids"] = rids;
};

request.prototype.getRids = function() {
	return this.rids;
};

request.prototype.getApiMethodName = function() {
	return "taobao.hotel.rooms.search";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
};

