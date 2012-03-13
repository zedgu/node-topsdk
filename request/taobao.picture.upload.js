
/**
 * TOP API: taobao.picture.upload request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 包括后缀名的图片标题,不能为空，如Bule.jpg,有些卖家希望图片上传后取图片文件的默认名
	 **/
	this.imageInputTitle;
	
	/** 
	 * 图片二进制文件流,不能为空,允许png、jpg、gif图片格式
	 **/
	this.img;
	
	/** 
	 * 图片分类ID，设置具体某个分类ID或设置0上传到默认分类，只能传入一个分类
	 **/
	this.pictureCategoryId;
	
	/** 
	 * 图片标题,如果为空,传的图片标题就取去掉后缀名的image_input_title,超过50字符长度会截取50字符,重名会在标题末尾加"(1)";标题末尾已经有"(数字)"了，则数字加1
	 **/
	this.title;
	
	this.apiParas = [];
};

request.prototype.setImageInputTitle = function(imageInputTitle) {
	this.imageInputTitle = imageInputTitle;
	this.apiParas["image_input_title"] = imageInputTitle;
};

request.prototype.getImageInputTitle = function() {
	return this.imageInputTitle;
};

request.prototype.setImg = function(img) {
	this.img = img;
	this.apiParas["img"] = img;
};

request.prototype.getImg = function() {
	return this.img;
};

request.prototype.setPictureCategoryId = function(pictureCategoryId) {
	this.pictureCategoryId = pictureCategoryId;
	this.apiParas["picture_category_id"] = pictureCategoryId;
};

request.prototype.getPictureCategoryId = function() {
	return this.pictureCategoryId;
};

request.prototype.setTitle = function(title) {
	this.title = title;
	this.apiParas["title"] = title;
};

request.prototype.getTitle = function() {
	return this.title;
};

request.prototype.getApiMethodName = function() {
	return "taobao.picture.upload";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.imageInputTitle,"imageInputTitle");
	topApiCheck.checkNotNull(this.img,"img");
	topApiCheck.checkNotNull(this.pictureCategoryId,"pictureCategoryId");
};

