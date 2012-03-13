
/**
 * TOP API: taobao.wlb.item.query request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 是否是最小库存单元，只有最小库存单元的商品才可以有库存,值只能给"true","false"来表示;
若值不在范围内，则按true处理
	 **/
	this.isSku;
	
	/** 
	 * 商家编码
	 **/
	this.itemCode;
	
	/** 
	 * ITEM类型(只允许输入以下英文或空)
NORMAL  0:普通商品; 
COMBINE  1:是否是组合商品 
DISTRIBUTION  2:是否是分销商品(货主是别人)
若值不在范围内，则按NORMAL处理
	 **/
	this.itemType;
	
	/** 
	 * 商品名称
	 **/
	this.name;
	
	/** 
	 * 当前页
	 **/
	this.pageNo;
	
	/** 
	 * 分页记录个数，如果用户输入的记录数大于50，则一页显示50条记录
	 **/
	this.pageSize;
	
	/** 
	 * 父ID,只有is_sku=1时才能有父ID，商品也可以没有付商品
	 **/
	this.parentId;
	
	/** 
	 * 只能输入以下值或空：
ITEM_STATUS_VALID -- 1 表示 有效；
ITEM_STATUS_LOCK  -- 2 表示锁住。
若值不在范围内，按ITEM_STATUS_VALID处理
	 **/
	this.status;
	
	/** 
	 * 商品前台销售名字
	 **/
	this.title;
	
	this.apiParas = [];
};

request.prototype.setIsSku = function(isSku) {
	this.isSku = isSku;
	this.apiParas["is_sku"] = isSku;
};

request.prototype.getIsSku = function() {
	return this.isSku;
};

request.prototype.setItemCode = function(itemCode) {
	this.itemCode = itemCode;
	this.apiParas["item_code"] = itemCode;
};

request.prototype.getItemCode = function() {
	return this.itemCode;
};

request.prototype.setItemType = function(itemType) {
	this.itemType = itemType;
	this.apiParas["item_type"] = itemType;
};

request.prototype.getItemType = function() {
	return this.itemType;
};

request.prototype.setName = function(name) {
	this.name = name;
	this.apiParas["name"] = name;
};

request.prototype.getName = function() {
	return this.name;
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

request.prototype.setParentId = function(parentId) {
	this.parentId = parentId;
	this.apiParas["parent_id"] = parentId;
};

request.prototype.getParentId = function() {
	return this.parentId;
};

request.prototype.setStatus = function(status) {
	this.status = status;
	this.apiParas["status"] = status;
};

request.prototype.getStatus = function() {
	return this.status;
};

request.prototype.setTitle = function(title) {
	this.title = title;
	this.apiParas["title"] = title;
};

request.prototype.getTitle = function() {
	return this.title;
};

request.prototype.getApiMethodName = function() {
	return "taobao.wlb.item.query";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkMaxLength(this.itemCode,64,"itemCode");
	topApiCheck.checkMinValue(this.pageNo,1,"pageNo");
	topApiCheck.checkMaxValue(this.pageSize,50,"pageSize");
	topApiCheck.checkMinValue(this.pageSize,1,"pageSize");
	topApiCheck.checkMaxLength(this.title,255,"title");
};

