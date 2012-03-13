
/**
 * TOP API: taobao.promotion.meal.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 搭配套餐id
	 **/
	this.mealId;
	
	/** 
	 * 套餐状态。有效：VALID;失效：INVALID(有效套餐为可使用的套餐,无效套餐为套餐中有商品下架或库存为0时)。默认时两种情况都会查询。
	 **/
	this.status;
	
	this.apiParas = [];
};

request.prototype.setMealId = function(mealId) {
	this.mealId = mealId;
	this.apiParas["meal_id"] = mealId;
};

request.prototype.getMealId = function() {
	return this.mealId;
};

request.prototype.setStatus = function(status) {
	this.status = status;
	this.apiParas["status"] = status;
};

request.prototype.getStatus = function() {
	return this.status;
};

request.prototype.getApiMethodName = function() {
	return "taobao.promotion.meal.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
};

