
/**
 * TOP API: taobao.picture.delete request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 图片ID字符串,可以一个也可以一组,用英文逗号间隔,如450,120,155
	 **/
	this.pictureIds;
	
	this.apiParas = [];
};

request.prototype.setPictureIds = function(pictureIds) {
	this.pictureIds = pictureIds;
	this.apiParas["picture_ids"] = pictureIds;
};

request.prototype.getPictureIds = function() {
	return this.pictureIds;
};

request.prototype.getApiMethodName = function() {
	return "taobao.picture.delete";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.pictureIds,"pictureIds");
};

