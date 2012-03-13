
/**
 * TOP API: taobao.picture.category.add request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 图片分类的父分类,一级分类的parent_id为0,二级分类的则为其父分类的picture_category_id
	 **/
	this.parentId;
	
	/** 
	 * 图片分类名称，最大长度20字符，中英文都算一字符，不能为空
	 **/
	this.pictureCategoryName;
	
	this.apiParas = [];
};

request.prototype.setParentId = function(parentId) {
	this.parentId = parentId;
	this.apiParas["parent_id"] = parentId;
};

request.prototype.getParentId = function() {
	return this.parentId;
};

request.prototype.setPictureCategoryName = function(pictureCategoryName) {
	this.pictureCategoryName = pictureCategoryName;
	this.apiParas["picture_category_name"] = pictureCategoryName;
};

request.prototype.getPictureCategoryName = function() {
	return this.pictureCategoryName;
};

request.prototype.getApiMethodName = function() {
	return "taobao.picture.category.add";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.pictureCategoryName,"pictureCategoryName");
};

