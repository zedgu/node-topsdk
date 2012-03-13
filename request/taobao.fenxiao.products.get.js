
/**
 * TOP API: taobao.fenxiao.products.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 结束修改时间
	 **/
	this.endModified;
	
	/** 
	 * 指定查询额外的信息，可选值：skus（sku数据）、images（多图），多个可选值用逗号分割。
	 **/
	this.fields;
	
	/** 
	 * 查询产品列表时，查询入参“是否需要授权”
yes:需要授权 
no:不需要授权
	 **/
	this.isAuthz;
	
	/** 
	 * 商家编码
	 **/
	this.outerId;
	
	/** 
	 * 页码（大于0的整数，默认1）
	 **/
	this.pageNo;
	
	/** 
	 * 每页记录数（默认20，最大50）
	 **/
	this.pageSize;
	
	/** 
	 * 产品ID列表（最大限制30），用逗号分割，例如：“1001,1002,1003,1004,1005”
	 **/
	this.pids;
	
	/** 
	 * 产品线ID
	 **/
	this.productcatId;
	
	/** 
	 * sku商家编码
	 **/
	this.skuNumber;
	
	/** 
	 * 开始修改时间
	 **/
	this.startModified;
	
	/** 
	 * 产品状态，可选值：up（上架）、down（下架），不传默认查询所有
	 **/
	this.status;
	
	this.apiParas = [];
};

request.prototype.setEndModified = function(endModified) {
	this.endModified = endModified;
	this.apiParas["end_modified"] = endModified;
};

request.prototype.getEndModified = function() {
	return this.endModified;
};

request.prototype.setFields = function(fields) {
	this.fields = fields;
	this.apiParas["fields"] = fields;
};

request.prototype.getFields = function() {
	return this.fields;
};

request.prototype.setIsAuthz = function(isAuthz) {
	this.isAuthz = isAuthz;
	this.apiParas["is_authz"] = isAuthz;
};

request.prototype.getIsAuthz = function() {
	return this.isAuthz;
};

request.prototype.setOuterId = function(outerId) {
	this.outerId = outerId;
	this.apiParas["outer_id"] = outerId;
};

request.prototype.getOuterId = function() {
	return this.outerId;
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

request.prototype.setPids = function(pids) {
	this.pids = pids;
	this.apiParas["pids"] = pids;
};

request.prototype.getPids = function() {
	return this.pids;
};

request.prototype.setProductcatId = function(productcatId) {
	this.productcatId = productcatId;
	this.apiParas["productcat_id"] = productcatId;
};

request.prototype.getProductcatId = function() {
	return this.productcatId;
};

request.prototype.setSkuNumber = function(skuNumber) {
	this.skuNumber = skuNumber;
	this.apiParas["sku_number"] = skuNumber;
};

request.prototype.getSkuNumber = function() {
	return this.skuNumber;
};

request.prototype.setStartModified = function(startModified) {
	this.startModified = startModified;
	this.apiParas["start_modified"] = startModified;
};

request.prototype.getStartModified = function() {
	return this.startModified;
};

request.prototype.setStatus = function(status) {
	this.status = status;
	this.apiParas["status"] = status;
};

request.prototype.getStatus = function() {
	return this.status;
};

request.prototype.getApiMethodName = function() {
	return "taobao.fenxiao.products.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
};

