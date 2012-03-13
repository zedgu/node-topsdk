
/**
 * TOP API: taobao.wlb.inventorylog.query request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 结束修改时间,小于等于该时间
	 **/
	this.gmtEnd;
	
	/** 
	 * 起始修改时间,大于等于该时间
	 **/
	this.gmtStart;
	
	/** 
	 * 商品ID
	 **/
	this.itemId;
	
	/** 
	 * 库存操作作类型(可以为空)
CHU_KU 1-出库
RU_KU 2-入库
FREEZE 3-冻结
THAW 4-解冻
CHECK_FREEZE 5-冻结确认
CHANGE_KU 6-库存类型变更
若值不在范围内，则按CHU_KU处理
	 **/
	this.opType;
	
	/** 
	 * 可指定授权的用户来查询
	 **/
	this.opUserId;
	
	/** 
	 * 单号
	 **/
	this.orderCode;
	
	/** 
	 * 当前页
	 **/
	this.pageNo;
	
	/** 
	 * 分页记录个数
	 **/
	this.pageSize;
	
	/** 
	 * 仓库编码
	 **/
	this.storeCode;
	
	this.apiParas = [];
};

request.prototype.setGmtEnd = function(gmtEnd) {
	this.gmtEnd = gmtEnd;
	this.apiParas["gmt_end"] = gmtEnd;
};

request.prototype.getGmtEnd = function() {
	return this.gmtEnd;
};

request.prototype.setGmtStart = function(gmtStart) {
	this.gmtStart = gmtStart;
	this.apiParas["gmt_start"] = gmtStart;
};

request.prototype.getGmtStart = function() {
	return this.gmtStart;
};

request.prototype.setItemId = function(itemId) {
	this.itemId = itemId;
	this.apiParas["item_id"] = itemId;
};

request.prototype.getItemId = function() {
	return this.itemId;
};

request.prototype.setOpType = function(opType) {
	this.opType = opType;
	this.apiParas["op_type"] = opType;
};

request.prototype.getOpType = function() {
	return this.opType;
};

request.prototype.setOpUserId = function(opUserId) {
	this.opUserId = opUserId;
	this.apiParas["op_user_id"] = opUserId;
};

request.prototype.getOpUserId = function() {
	return this.opUserId;
};

request.prototype.setOrderCode = function(orderCode) {
	this.orderCode = orderCode;
	this.apiParas["order_code"] = orderCode;
};

request.prototype.getOrderCode = function() {
	return this.orderCode;
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

request.prototype.setStoreCode = function(storeCode) {
	this.storeCode = storeCode;
	this.apiParas["store_code"] = storeCode;
};

request.prototype.getStoreCode = function() {
	return this.storeCode;
};

request.prototype.getApiMethodName = function() {
	return "taobao.wlb.inventorylog.query";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
};

