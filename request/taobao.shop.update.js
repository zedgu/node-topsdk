
/**
 * TOP API: taobao.shop.update request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 店铺公告。不超过1024个字符
	 **/
	this.bulletin;
	
	/** 
	 * 店铺描述。10～2000个字符以内
	 **/
	this.desc;
	
	/** 
	 * 店铺标题。不超过30个字符；过滤敏感词，如淘咖啡、阿里巴巴等。title, bulletin和desc至少必须传一个
	 **/
	this.title;
	
	this.apiParas = [];
};

request.prototype.setBulletin = function(bulletin) {
	this.bulletin = bulletin;
	this.apiParas["bulletin"] = bulletin;
};

request.prototype.getBulletin = function() {
	return this.bulletin;
};

request.prototype.setDesc = function(desc) {
	this.desc = desc;
	this.apiParas["desc"] = desc;
};

request.prototype.getDesc = function() {
	return this.desc;
};

request.prototype.setTitle = function(title) {
	this.title = title;
	this.apiParas["title"] = title;
};

request.prototype.getTitle = function() {
	return this.title;
};

request.prototype.getApiMethodName = function() {
	return "taobao.shop.update";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
};

