
/**
 * TOP API: taobao.hotel.rooms.update request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 多商品房态信息。json encode。每个商品房态参考单商品更新中的room_quota字段。反序列化后入：array(( 'gid'=>1, 'roomQuota'=>array(('date'=>'2011-01-29', 'price'=>100, 'num'=>1),('date'=>'2011-01-30', 'price'=>100, 'num'=>1)),( 'gid'=>2, 'roomQuota'=>array(('date'=>'2011-01-29', 'price'=>100, 'num'=>1),('date'=>'2011-01-30', 'price'=>100, 'num'=>1)))
	 **/
	this.gidRoomQuotaMap;
	
	this.apiParas = [];
};

request.prototype.setGidRoomQuotaMap = function(gidRoomQuotaMap) {
	this.gidRoomQuotaMap = gidRoomQuotaMap;
	this.apiParas["gid_room_quota_map"] = gidRoomQuotaMap;
};

request.prototype.getGidRoomQuotaMap = function() {
	return this.gidRoomQuotaMap;
};

request.prototype.getApiMethodName = function() {
	return "taobao.hotel.rooms.update";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.gidRoomQuotaMap,"gidRoomQuotaMap");
};

