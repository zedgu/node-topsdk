
/**
 * TOP API: taobao.picture.replace request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 图片二进制文件流,不能为空,允许png、jpg、gif图片格式
	 **/
	this.imageData;
	
	/** 
	 * 要替换的图片的id，必须大于0
	 **/
	this.pictureId;
	
	this.apiParas = [];
};

request.prototype.setImageData = function(imageData) {
	this.imageData = imageData;
	this.apiParas["image_data"] = imageData;
};

request.prototype.getImageData = function() {
	return this.imageData;
};

request.prototype.setPictureId = function(pictureId) {
	this.pictureId = pictureId;
	this.apiParas["picture_id"] = pictureId;
};

request.prototype.getPictureId = function() {
	return this.pictureId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.picture.replace";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.imageData,"imageData");
	topApiCheck.checkNotNull(this.pictureId,"pictureId");
};

