
/**
 * TOP API: taobao.taohua.itemcomment.add request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 对商品的评论内容
	 **/
	this.comment;
	
	/** 
	 * 商品ID
	 **/
	this.itemId;
	
	this.apiParas = [];
};

request.prototype.setComment = function(comment) {
	this.comment = comment;
	this.apiParas["comment"] = comment;
};

request.prototype.getComment = function() {
	return this.comment;
};

request.prototype.setItemId = function(itemId) {
	this.itemId = itemId;
	this.apiParas["item_id"] = itemId;
};

request.prototype.getItemId = function() {
	return this.itemId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.taohua.itemcomment.add";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.comment,"comment");
	topApiCheck.checkMaxLength(this.comment,4000,"comment");
	topApiCheck.checkNotNull(this.itemId,"itemId");
};

