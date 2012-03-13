
/**
 * TOP API: taobao.logistics.address.search request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 可选，参数列表如下：<br><font color='red'>
no_def:查询非默认地址<br>
get_def:查询默认取货地址<br>
cancel_def:查询默认退货地址<br>
缺省此参数时，查询所有当前用户的地址库
</font>
	 **/
	this.rdef;
	
	this.apiParas = [];
};

request.prototype.setRdef = function(rdef) {
	this.rdef = rdef;
	this.apiParas["rdef"] = rdef;
};

request.prototype.getRdef = function() {
	return this.rdef;
};

request.prototype.getApiMethodName = function() {
	return "taobao.logistics.address.search";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
};

