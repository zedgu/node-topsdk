
/**
 * TOP API: taobao.hotel.room.update request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 面积。可选值：A,B,C,D。分别代表：
A：15平米以下，B：16－30平米，C：31－50平米，D：50平米以上
	 **/
	this.area;
	
	/** 
	 * 宽带服务。A,B,C,D。分别代表：
A：无宽带，B：免费宽带，C：收费宽带，D：部分收费宽带
	 **/
	this.bbn;
	
	/** 
	 * 床型。可选值：A,B,C,D,E,F,G,H,I。分别代表：A：单人床，B：大床，C：双床，D：双床/大床，E：子母床，F：上下床，G：圆形床，H：多床，I：其他床型
	 **/
	this.bedType;
	
	/** 
	 * 早餐。A,B,C,D,E。分别代表：
A：无早，B：单早，C：双早，D：三早，E：多早
	 **/
	this.breakfast;
	
	/** 
	 * 订金。0～99999900的正整数。在payment_type为订金时必须输入，存储的单位是分。不能带角分。
	 **/
	this.deposit;
	
	/** 
	 * 商品描述。不能超过25000个汉字（50000个字符）。
	 **/
	this.desc;
	
	/** 
	 * 手续费。0～99999900的正整数。在payment_type为手续费或手续费/间夜时必须输入，存储的单位是分。不能带角分。
	 **/
	this.fee;
	
	/** 
	 * 酒店房间商品gid。必须为数字。
	 **/
	this.gid;
	
	/** 
	 * 购买须知。不能超过4000个汉字（8000个字符）。
	 **/
	this.guide;
	
	/** 
	 * 支付类型。可选值：A,B,C,D。分别代表：
A：全额支付，B：手续费，C：订金，D：手续费/间夜
	 **/
	this.paymentType;
	
	/** 
	 * 酒店商品图片。类型:JPG,GIF;最大长度:500K。支持的文件类型：gif,jpg,jpeg,png。更新的时候只能更新一张图片，此图片覆盖原有所有图片。如果不传则使用原有所有图片。
如需再发图片，需要调用商品图片上传接口，1个商品最多5张图片。
	 **/
	this.pic;
	
	/** 
	 * 商品主图需要关联的图片空间的相对url。这个url所对应的图片必须要属于当前用户。pic_path和image只需要传入一个,如果两个都传，默认选择pic_path
	 **/
	this.picPath;
	
	/** 
	 * 房态信息。可以传今天开始90天内的房态信息。日期必须连续。JSON格式传递。
date：代表房态日期，格式为YYYY-MM-DD，
price：代表当天房价，0～99999900，存储的单位是分，不能带角分
num：代表当天可售间数，0～999。
如：
[ {"date":2011-01-28,"price":10000, "num":10}, {"date":2011-01-29,"price":12000,"num":10}]
	 **/
	this.roomQuotas;
	
	/** 
	 * 设施服务。JSON格式。
value值true有此服务，false没有。
bar：吧台，catv：有线电视，ddd：国内长途电话，idd：国际长途电话，toilet：独立卫生间，pubtoliet：公共卫生间。
如： {"bar":false,"catv":false,"ddd":false,"idd":false,"pubtoilet":false,"toilet":false}
	 **/
	this.service;
	
	/** 
	 * 床宽。可选值：A,B,C,D,E,F,G,H。分别代表：A：1米及以下，B：1.1米，C：1.2米，D：1.35米，E：1.5米，F：1.8米，G：2米，H：2.2米及以上
	 **/
	this.size;
	
	/** 
	 * 状态。可选值1，2，3。1：上架。2：下架。3：删除。传入相应状态代表去执行相应的操作。
	 **/
	this.status;
	
	/** 
	 * 楼层。长度不超过8
	 **/
	this.storey;
	
	/** 
	 * 酒店商品名称。不能超过60字节
	 **/
	this.title;
	
	this.apiParas = [];
};

request.prototype.setArea = function(area) {
	this.area = area;
	this.apiParas["area"] = area;
};

request.prototype.getArea = function() {
	return this.area;
};

request.prototype.setBbn = function(bbn) {
	this.bbn = bbn;
	this.apiParas["bbn"] = bbn;
};

request.prototype.getBbn = function() {
	return this.bbn;
};

request.prototype.setBedType = function(bedType) {
	this.bedType = bedType;
	this.apiParas["bed_type"] = bedType;
};

request.prototype.getBedType = function() {
	return this.bedType;
};

request.prototype.setBreakfast = function(breakfast) {
	this.breakfast = breakfast;
	this.apiParas["breakfast"] = breakfast;
};

request.prototype.getBreakfast = function() {
	return this.breakfast;
};

request.prototype.setDeposit = function(deposit) {
	this.deposit = deposit;
	this.apiParas["deposit"] = deposit;
};

request.prototype.getDeposit = function() {
	return this.deposit;
};

request.prototype.setDesc = function(desc) {
	this.desc = desc;
	this.apiParas["desc"] = desc;
};

request.prototype.getDesc = function() {
	return this.desc;
};

request.prototype.setFee = function(fee) {
	this.fee = fee;
	this.apiParas["fee"] = fee;
};

request.prototype.getFee = function() {
	return this.fee;
};

request.prototype.setGid = function(gid) {
	this.gid = gid;
	this.apiParas["gid"] = gid;
};

request.prototype.getGid = function() {
	return this.gid;
};

request.prototype.setGuide = function(guide) {
	this.guide = guide;
	this.apiParas["guide"] = guide;
};

request.prototype.getGuide = function() {
	return this.guide;
};

request.prototype.setPaymentType = function(paymentType) {
	this.paymentType = paymentType;
	this.apiParas["payment_type"] = paymentType;
};

request.prototype.getPaymentType = function() {
	return this.paymentType;
};

request.prototype.setPic = function(pic) {
	this.pic = pic;
	this.apiParas["pic"] = pic;
};

request.prototype.getPic = function() {
	return this.pic;
};

request.prototype.setPicPath = function(picPath) {
	this.picPath = picPath;
	this.apiParas["pic_path"] = picPath;
};

request.prototype.getPicPath = function() {
	return this.picPath;
};

request.prototype.setRoomQuotas = function(roomQuotas) {
	this.roomQuotas = roomQuotas;
	this.apiParas["room_quotas"] = roomQuotas;
};

request.prototype.getRoomQuotas = function() {
	return this.roomQuotas;
};

request.prototype.setService = function(service) {
	this.service = service;
	this.apiParas["service"] = service;
};

request.prototype.getService = function() {
	return this.service;
};

request.prototype.setSize = function(size) {
	this.size = size;
	this.apiParas["size"] = size;
};

request.prototype.getSize = function() {
	return this.size;
};

request.prototype.setStatus = function(status) {
	this.status = status;
	this.apiParas["status"] = status;
};

request.prototype.getStatus = function() {
	return this.status;
};

request.prototype.setStorey = function(storey) {
	this.storey = storey;
	this.apiParas["storey"] = storey;
};

request.prototype.getStorey = function() {
	return this.storey;
};

request.prototype.setTitle = function(title) {
	this.title = title;
	this.apiParas["title"] = title;
};

request.prototype.getTitle = function() {
	return this.title;
};

request.prototype.getApiMethodName = function() {
	return "taobao.hotel.room.update";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkMaxLength(this.area,1,"area");
	topApiCheck.checkMaxLength(this.bbn,1,"bbn");
	topApiCheck.checkMaxLength(this.bedType,1,"bedType");
	topApiCheck.checkMaxLength(this.breakfast,1,"breakfast");
	topApiCheck.checkMaxValue(this.deposit,99999900,"deposit");
	topApiCheck.checkMinValue(this.deposit,0,"deposit");
	topApiCheck.checkMaxLength(this.desc,50000,"desc");
	topApiCheck.checkMaxValue(this.fee,99999900,"fee");
	topApiCheck.checkMinValue(this.fee,0,"fee");
	topApiCheck.checkNotNull(this.gid,"gid");
	topApiCheck.checkMaxLength(this.guide,8000,"guide");
	topApiCheck.checkMaxLength(this.paymentType,1,"paymentType");
	topApiCheck.checkMaxLength(this.size,1,"size");
	topApiCheck.checkMaxLength(this.storey,8,"storey");
	topApiCheck.checkMaxLength(this.title,60,"title");
};

