
/**
 * TOP API: taobao.picture.update request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 新的图片名，最大长度50字符，不能为空
	 **/
	this.newName;
	
	/** 
	 * 要更改名字的图片的id
	 **/
	this.pictureId;
	
	this.apiParas = [];
};

request.prototype.setNewName = function(newName) {
	this.newName = newName;
	this.apiParas["new_name"] = newName;
};

request.prototype.getNewName = function() {
	return this.newName;
};

request.prototype.setPictureId = function(pictureId) {
	this.pictureId = pictureId;
	this.apiParas["picture_id"] = pictureId;
};

request.prototype.getPictureId = function() {
	return this.pictureId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.picture.update";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.newName,"newName");
	topApiCheck.checkMaxLength(this.newName,50,"newName");
	topApiCheck.checkNotNull(this.pictureId,"pictureId");
};

