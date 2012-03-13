
/**
 * TOP API: taobao.picture.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 是否删除,unfroze代表没有删除
	 **/
	this.deleted;
	
	/** 
	 * 查询上传结束时间点,格式:yyyy-MM-dd HH:mm:ss
	 **/
	this.endDate;
	
	/** 
	 * 图片被修改的时间点，格式:yyyy-MM-dd HH:mm:ss。查询此修改时间点之后到目前的图片。
	 **/
	this.modifiedTime;
	
	/** 
	 * 图片查询结果排序,time:desc按上传时间从晚到早(默认), time:asc按上传时间从早到晚,sizes:desc按图片从大到小，sizes:asc按图片从小到大,默认time:desc
	 **/
	this.orderBy;
	
	/** 
	 * 页码.传入值为1代表第一页,传入值为2代表第二页,依此类推,默认值为1
	 **/
	this.pageNo;
	
	/** 
	 * 每页条数.每页返回最多返回100条,默认值40
	 **/
	this.pageSize;
	
	/** 
	 * 图片分类ID
	 **/
	this.pictureCategoryId;
	
	/** 
	 * 图片ID
	 **/
	this.pictureId;
	
	/** 
	 * 查询上传开始时间点,格式:yyyy-MM-dd HH:mm:ss
	 **/
	this.startDate;
	
	/** 
	 * 图片标题,最大长度50字符,中英文都算一字符
	 **/
	this.title;
	
	this.apiParas = [];
};

request.prototype.setDeleted = function(deleted) {
	this.deleted = deleted;
	this.apiParas["deleted"] = deleted;
};

request.prototype.getDeleted = function() {
	return this.deleted;
};

request.prototype.setEndDate = function(endDate) {
	this.endDate = endDate;
	this.apiParas["end_date"] = endDate;
};

request.prototype.getEndDate = function() {
	return this.endDate;
};

request.prototype.setModifiedTime = function(modifiedTime) {
	this.modifiedTime = modifiedTime;
	this.apiParas["modified_time"] = modifiedTime;
};

request.prototype.getModifiedTime = function() {
	return this.modifiedTime;
};

request.prototype.setOrderBy = function(orderBy) {
	this.orderBy = orderBy;
	this.apiParas["order_by"] = orderBy;
};

request.prototype.getOrderBy = function() {
	return this.orderBy;
};

request.prototype.setPageNo = function(pageNo) {
	this.pageNo = pageNo;
	this.apiParas["page_no"] = pageNo;
};

request.prototype.getPageNo = function() {
	return this.pageNo;
};

request.prototype.setPageSize = function(pageSize) {
	this.pageSize = pageSize;
	this.apiParas["page_size"] = pageSize;
};

request.prototype.getPageSize = function() {
	return this.pageSize;
};

request.prototype.setPictureCategoryId = function(pictureCategoryId) {
	this.pictureCategoryId = pictureCategoryId;
	this.apiParas["picture_category_id"] = pictureCategoryId;
};

request.prototype.getPictureCategoryId = function() {
	return this.pictureCategoryId;
};

request.prototype.setPictureId = function(pictureId) {
	this.pictureId = pictureId;
	this.apiParas["picture_id"] = pictureId;
};

request.prototype.getPictureId = function() {
	return this.pictureId;
};

request.prototype.setStartDate = function(startDate) {
	this.startDate = startDate;
	this.apiParas["start_date"] = startDate;
};

request.prototype.getStartDate = function() {
	return this.startDate;
};

request.prototype.setTitle = function(title) {
	this.title = title;
	this.apiParas["title"] = title;
};

request.prototype.getTitle = function() {
	return this.title;
};

request.prototype.getApiMethodName = function() {
	return "taobao.picture.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
};

