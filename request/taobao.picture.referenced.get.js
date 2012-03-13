
/**
 * TOP API: taobao.picture.referenced.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 图片id
	 **/
	this.pictureId;
	
	this.apiParas = [];
};

request.prototype.setPictureId = function(pictureId) {
	this.pictureId = pictureId;
	this.apiParas["picture_id"] = pictureId;
};

request.prototype.getPictureId = function() {
	return this.pictureId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.picture.referenced.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.pictureId,"pictureId");
};

