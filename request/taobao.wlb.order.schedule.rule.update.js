
/**
 * TOP API: taobao.wlb.order.schedule.rule.update request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 备用发货仓库id
	 **/
	this.backupStoreId;
	
	/** 
	 * 默认发货仓库id
	 **/
	this.defaultStoreId;
	
	/** 
	 * 订单调度规则的额外规则设置： REMARK_STOP--有订单留言不自动下发 COD_STOP--货到付款订单不自动下发 CHECK_WAREHOUSE_DELIVER--检查仓库的配送范围
	 **/
	this.option;
	
	/** 
	 * 国家地区标准编码列表
	 **/
	this.provAreaIds;
	
	/** 
	 * 要修改的订单调度规则明细id
	 **/
	this.scheduleRuleId;
	
	this.apiParas = [];
};

request.prototype.setBackupStoreId = function(backupStoreId) {
	this.backupStoreId = backupStoreId;
	this.apiParas["backup_store_id"] = backupStoreId;
};

request.prototype.getBackupStoreId = function() {
	return this.backupStoreId;
};

request.prototype.setDefaultStoreId = function(defaultStoreId) {
	this.defaultStoreId = defaultStoreId;
	this.apiParas["default_store_id"] = defaultStoreId;
};

request.prototype.getDefaultStoreId = function() {
	return this.defaultStoreId;
};

request.prototype.setOption = function(option) {
	this.option = option;
	this.apiParas["option"] = option;
};

request.prototype.getOption = function() {
	return this.option;
};

request.prototype.setProvAreaIds = function(provAreaIds) {
	this.provAreaIds = provAreaIds;
	this.apiParas["prov_area_ids"] = provAreaIds;
};

request.prototype.getProvAreaIds = function() {
	return this.provAreaIds;
};

request.prototype.setScheduleRuleId = function(scheduleRuleId) {
	this.scheduleRuleId = scheduleRuleId;
	this.apiParas["schedule_rule_id"] = scheduleRuleId;
};

request.prototype.getScheduleRuleId = function() {
	return this.scheduleRuleId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.wlb.order.schedule.rule.update";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.scheduleRuleId,"scheduleRuleId");
};

