
/**
 * TOP API: taobao.favorite.add request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * ITEM表示宝贝，SHOP表示店铺，只能传入这两者之一
	 **/
	this.collectType;
	
	/** 
	 * 如果收藏的是商品，就传num_iid，如果是店铺，就传入sid
	 **/
	this.itemNumid;
	
	/** 
	 * 该收藏是否公开
	 **/
	this.shared;
	
	this.apiParas = [];
};

request.prototype.setCollectType = function(collectType) {
	this.collectType = collectType;
	this.apiParas["collect_type"] = collectType;
};

request.prototype.getCollectType = function() {
	return this.collectType;
};

request.prototype.setItemNumid = function(itemNumid) {
	this.itemNumid = itemNumid;
	this.apiParas["item_numid"] = itemNumid;
};

request.prototype.getItemNumid = function() {
	return this.itemNumid;
};

request.prototype.setShared = function(shared) {
	this.shared = shared;
	this.apiParas["shared"] = shared;
};

request.prototype.getShared = function() {
	return this.shared;
};

request.prototype.getApiMethodName = function() {
	return "taobao.favorite.add";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.collectType,"collectType");
	topApiCheck.checkNotNull(this.itemNumid,"itemNumid");
	topApiCheck.checkMinValue(this.itemNumid,1,"itemNumid");
};

