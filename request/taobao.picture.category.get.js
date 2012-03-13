
/**
 * TOP API: taobao.picture.category.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 图片分类的修改时间点，格式:yyyy-MM-dd HH:mm:ss。查询此修改时间点之后到目前的图片分类。
	 **/
	this.modifiedTime;
	
	/** 
	 * 取二级分类时设置为对应父分类id
取一级分类时父分类id设为0
取全部分类的时候不设或设为-1
	 **/
	this.parentId;
	
	/** 
	 * 图片分类ID
	 **/
	this.pictureCategoryId;
	
	/** 
	 * 图片分类名，不支持模糊查询
	 **/
	this.pictureCategoryName;
	
	/** 
	 * 分类类型,fixed代表店铺装修分类类别，auction代表宝贝分类类别，user-define代表用户自定义分类类别
	 **/
	this.type;
	
	this.apiParas = [];
};

request.prototype.setModifiedTime = function(modifiedTime) {
	this.modifiedTime = modifiedTime;
	this.apiParas["modified_time"] = modifiedTime;
};

request.prototype.getModifiedTime = function() {
	return this.modifiedTime;
};

request.prototype.setParentId = function(parentId) {
	this.parentId = parentId;
	this.apiParas["parent_id"] = parentId;
};

request.prototype.getParentId = function() {
	return this.parentId;
};

request.prototype.setPictureCategoryId = function(pictureCategoryId) {
	this.pictureCategoryId = pictureCategoryId;
	this.apiParas["picture_category_id"] = pictureCategoryId;
};

request.prototype.getPictureCategoryId = function() {
	return this.pictureCategoryId;
};

request.prototype.setPictureCategoryName = function(pictureCategoryName) {
	this.pictureCategoryName = pictureCategoryName;
	this.apiParas["picture_category_name"] = pictureCategoryName;
};

request.prototype.getPictureCategoryName = function() {
	return this.pictureCategoryName;
};

request.prototype.setType = function(type) {
	this.type = type;
	this.apiParas["type"] = type;
};

request.prototype.getType = function() {
	return this.type;
};

request.prototype.getApiMethodName = function() {
	return "taobao.picture.category.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
};

