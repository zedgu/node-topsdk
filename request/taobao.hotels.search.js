
/**
 * TOP API: taobao.hotels.search request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 城市编码。参见：http://kezhan.trip.taobao.com/area.html。
domestic为true时，province,city,district不能同时为空或为0
	 **/
	this.city;
	
	/** 
	 * domestic为true时，固定China；
domestic为false时，必须传定义的海外国家编码值，是必填项。参见：http://kezhan.trip.taobao.com/countrys.html
	 **/
	this.country;
	
	/** 
	 * 区域（县级市）编码。参见：http://kezhan.trip.taobao.com/area.html。
domestic为true时，province,city,district不能同时为空或为0
	 **/
	this.district;
	
	/** 
	 * 是否国内酒店。可选值：true，false
	 **/
	this.domestic;
	
	/** 
	 * 酒店名称。不能超过60字节
	 **/
	this.name;
	
	/** 
	 * 分页页码。取值范围，大于零的整数，默认值1，即返回第一页的数据。页面大小为20
	 **/
	this.pageNo;
	
	/** 
	 * 省份编码。参见：http://kezhan.trip.taobao.com/area.html。
domestic为true时，province,city,district不能同时为空或为0
	 **/
	this.province;
	
	this.apiParas = [];
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

request.prototype.setName = function(name) {
	this.name = name;
	this.apiParas["name"] = name;
};

request.prototype.getName = function() {
	return this.name;
};

request.prototype.setPageNo = function(pageNo) {
	this.pageNo = pageNo;
	this.apiParas["page_no"] = pageNo;
};

request.prototype.getPageNo = function() {
	return this.pageNo;
};

request.prototype.setProvince = function(province) {
	this.province = province;
	this.apiParas["province"] = province;
};

request.prototype.getProvince = function() {
	return this.province;
};

request.prototype.getApiMethodName = function() {
	return "taobao.hotels.search";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.domestic,"domestic");
	topApiCheck.checkMaxLength(this.name,60,"name");
};

