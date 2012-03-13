
/**
 * TOP API: taobao.picture.category.update request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 要更新的图片分类的id
	 **/
	this.categoryId;
	
	/** 
	 * 图片分类的新名字，最大长度20字符，不能为空
	 **/
	this.categoryName;
	
	/** 
	 * 图片分类的新父分类id
	 **/
	this.parentId;
	
	this.apiParas = [];
};

request.prototype.setCategoryId = function(categoryId) {
	this.categoryId = categoryId;
	this.apiParas["category_id"] = categoryId;
};

request.prototype.getCategoryId = function() {
	return this.categoryId;
};

request.prototype.setCategoryName = function(categoryName) {
	this.categoryName = categoryName;
	this.apiParas["category_name"] = categoryName;
};

request.prototype.getCategoryName = function() {
	return this.categoryName;
};

request.prototype.setParentId = function(parentId) {
	this.parentId = parentId;
	this.apiParas["parent_id"] = parentId;
};

request.prototype.getParentId = function() {
	return this.parentId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.picture.category.update";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.categoryId,"categoryId");
	topApiCheck.checkMaxLength(this.categoryName,20,"categoryName");
};

