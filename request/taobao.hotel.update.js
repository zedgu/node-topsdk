
/**
 * TOP API: taobao.hotel.update request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 酒店地址。长度不能超过120
	 **/
	this.address;
	
	/** 
	 * 城市编码。参见：http://kezhan.trip.taobao.com/area.html，domestic为false时默认为0
	 **/
	this.city;
	
	/** 
	 * domestic为true时，固定China；
domestic为false时，必须传定义的酒店。参见：http://kezhan.trip.taobao.com/countrys.html
	 **/
	this.country;
	
	/** 
	 * 装修时间。长度不能超过4。
	 **/
	this.decorateTime;
	
	/** 
	 * 酒店介绍。不超过25000个汉字
	 **/
	this.desc;
	
	/** 
	 * 区域（县级市）编码。参见：http://kezhan.trip.taobao.com/area.html
	 **/
	this.district;
	
	/** 
	 * 是否国内酒店。可选值：true，false
	 **/
	this.domestic;
	
	/** 
	 * 酒店id。必须为数字。
	 **/
	this.hid;
	
	/** 
	 * 酒店级别。可选值：A,B,C,D,E,F。代表客栈公寓、经济连锁、二星级/以下、三星级/舒适、四星级/高档、五星级/豪华
	 **/
	this.level;
	
	/** 
	 * 酒店名称。不能超过60字节
	 **/
	this.name;
	
	/** 
	 * 开业时间。长度不能超过4。
	 **/
	this.openingTime;
	
	/** 
	 * 酒店定位。可选值：T,B。代表旅游度假、商务出行
	 **/
	this.orientation;
	
	/** 
	 * 酒店图片。类型:JPG,GIF;最大长度:500K。支持的文件类型：gif,jpg,jpeg,png。
图片没有传，则代表不更新图片，使用原来的图片
	 **/
	this.pic;
	
	/** 
	 * 省份编码。参见：http://kezhan.trip.taobao.com/area.html，domestic为false时默认为0
	 **/
	this.province;
	
	/** 
	 * 房间数。长度不能超过4。
	 **/
	this.rooms;
	
	/** 
	 * 交通距离与设施服务。JSON格式。cityCenterDistance、railwayDistance、airportDistance分别代表距离市中心、距离火车站、距离机场公里数，为不超过3位正整数，默认-1代表无数据。
其他key值true代表有此服务，false代表没有。
parking：停车场，airportShuttle：机场接送，rentCar：租车，meetingRoom：会议室，businessCenter：商务中心，swimmingPool：游泳池，fitnessClub：健身中心，laundry：洗衣服务，morningCall：叫早服务，bankCard：接受银行卡，creditCard：接受信用卡，chineseRestaurant：中餐厅，westernRestaurant：西餐厅，cafe：咖啡厅，bar：酒吧，ktv：KTV。
如： {"airportShuttle":true,"parking":false,"fitnessClub":false,"chineseRestaurant":false,"rentCar":false,"laundry":false,"bankCard":false,"cityCenterDistance":-1,"creditCard":false,"westernRestaurant":false,"ktv":false,"railwayDistance":-1,"swimmingPool":false,"cafe":false,"businessCenter":false,"morningCall":false,"bar":false,"meetingRoom":false,"airportDistance":-1}
	 **/
	this.service;
	
	/** 
	 * 楼层数。长度不能超过4。
	 **/
	this.storeys;
	
	/** 
	 * 酒店电话。格式：国家代码（最长6位）#区号（最长4位）#电话（最长20位）。国家代码提示：中国大陆0086、香港00852、澳门00853、台湾00886
	 **/
	this.tel;
	
	this.apiParas = [];
};

request.prototype.setAddress = function(address) {
	this.address = address;
	this.apiParas["address"] = address;
};

request.prototype.getAddress = function() {
	return this.address;
};

request.prototype.setCity = function(city) {
	this.city = city;
	this.apiParas["city"] = city;
};

request.prototype.getCity = function() {
	return this.city;
};

request.prototype.setCountry = function(country) {
	this.country = country;
	this.apiParas["country"] = country;
};

request.prototype.getCountry = function() {
	return this.country;
};

request.prototype.setDecorateTime = function(decorateTime) {
	this.decorateTime = decorateTime;
	this.apiParas["decorate_time"] = decorateTime;
};

request.prototype.getDecorateTime = function() {
	return this.decorateTime;
};

request.prototype.setDesc = function(desc) {
	this.desc = desc;
	this.apiParas["desc"] = desc;
};

request.prototype.getDesc = function() {
	return this.desc;
};

request.prototype.setDistrict = function(district) {
	this.district = district;
	this.apiParas["district"] = district;
};

request.prototype.getDistrict = function() {
	return this.district;
};

request.prototype.setDomestic = function(domestic) {
	this.domestic = domestic;
	this.apiParas["domestic"] = domestic;
};

request.prototype.getDomestic = function() {
	return this.domestic;
};

request.prototype.setHid = function(hid) {
	this.hid = hid;
	this.apiParas["hid"] = hid;
};

request.prototype.getHid = function() {
	return this.hid;
};

request.prototype.setLevel = function(level) {
	this.level = level;
	this.apiParas["level"] = level;
};

request.prototype.getLevel = function() {
	return this.level;
};

request.prototype.setName = function(name) {
	this.name = name;
	this.apiParas["name"] = name;
};

request.prototype.getName = function() {
	return this.name;
};

request.prototype.setOpeningTime = function(openingTime) {
	this.openingTime = openingTime;
	this.apiParas["opening_time"] = openingTime;
};

request.prototype.getOpeningTime = function() {
	return this.openingTime;
};

request.prototype.setOrientation = function(orientation) {
	this.orientation = orientation;
	this.apiParas["orientation"] = orientation;
};

request.prototype.getOrientation = function() {
	return this.orientation;
};

request.prototype.setPic = function(pic) {
	this.pic = pic;
	this.apiParas["pic"] = pic;
};

request.prototype.getPic = function() {
	return this.pic;
};

request.prototype.setProvince = function(province) {
	this.province = province;
	this.apiParas["province"] = province;
};

request.prototype.getProvince = function() {
	return this.province;
};

request.prototype.setRooms = function(rooms) {
	this.rooms = rooms;
	this.apiParas["rooms"] = rooms;
};

request.prototype.getRooms = function() {
	return this.rooms;
};

request.prototype.setService = function(service) {
	this.service = service;
	this.apiParas["service"] = service;
};

request.prototype.getService = function() {
	return this.service;
};

request.prototype.setStoreys = function(storeys) {
	this.storeys = storeys;
	this.apiParas["storeys"] = storeys;
};

request.prototype.getStoreys = function() {
	return this.storeys;
};

request.prototype.setTel = function(tel) {
	this.tel = tel;
	this.apiParas["tel"] = tel;
};

request.prototype.getTel = function() {
	return this.tel;
};

request.prototype.getApiMethodName = function() {
	return "taobao.hotel.update";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkMaxLength(this.address,120,"address");
	topApiCheck.checkMaxValue(this.city,999999,"city");
	topApiCheck.checkMinValue(this.city,0,"city");
	topApiCheck.checkMaxLength(this.decorateTime,4,"decorateTime");
	topApiCheck.checkMaxLength(this.desc,50000,"desc");
	topApiCheck.checkMaxValue(this.district,999999,"district");
	topApiCheck.checkMinValue(this.district,0,"district");
	topApiCheck.checkNotNull(this.hid,"hid");
	topApiCheck.checkMaxLength(this.level,1,"level");
	topApiCheck.checkMaxLength(this.name,60,"name");
	topApiCheck.checkMaxLength(this.openingTime,4,"openingTime");
	topApiCheck.checkMaxLength(this.orientation,1,"orientation");
	topApiCheck.checkMaxValue(this.province,999999,"province");
	topApiCheck.checkMinValue(this.province,0,"province");
	topApiCheck.checkMaxValue(this.rooms,9999,"rooms");
	topApiCheck.checkMinValue(this.rooms,0,"rooms");
	topApiCheck.checkMaxValue(this.storeys,9999,"storeys");
	topApiCheck.checkMinValue(this.storeys,0,"storeys");
	topApiCheck.checkMaxLength(this.tel,32,"tel");
};

