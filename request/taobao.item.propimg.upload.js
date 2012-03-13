
/**
 * TOP API: taobao.item.propimg.upload request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 属性图片ID。如果是新增不需要填写
	 **/
	this.id;
	
	/** 
	 * 属性图片内容。类型:JPG,GIF;最大长度:500K;图片大小不超过:1M
	 **/
	this.image;
	
	/** 
	 * 商品数字ID，必选
	 **/
	this.numIid;
	
	/** 
	 * 图片位置
	 **/
	this.position;
	
	/** 
	 * 属性列表。调用taobao.itemprops.get获取类目属性，属性必须是颜色属性，再用taobao.itempropvalues.get取得vid。格式:pid:vid。
	 **/
	this.properties;
	
	this.apiParas = [];
};

request.prototype.setId = function(id) {
	this.id = id;
	this.apiParas["id"] = id;
};

request.prototype.getId = function() {
	return this.id;
};

request.prototype.setImage = function(image) {
	this.image = image;
	this.apiParas["image"] = image;
};

request.prototype.getImage = function() {
	return this.image;
};

request.prototype.setNumIid = function(numIid) {
	this.numIid = numIid;
	this.apiParas["num_iid"] = numIid;
};

request.prototype.getNumIid = function() {
	return this.numIid;
};

request.prototype.setPosition = function(position) {
	this.position = position;
	this.apiParas["position"] = position;
};

request.prototype.getPosition = function() {
	return this.position;
};

request.prototype.setProperties = function(properties) {
	this.properties = properties;
	this.apiParas["properties"] = properties;
};

request.prototype.getProperties = function() {
	return this.properties;
};

request.prototype.getApiMethodName = function() {
	return "taobao.item.propimg.upload";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.numIid,"numIid");
	topApiCheck.checkMinValue(this.numIid,0,"numIid");
	topApiCheck.checkNotNull(this.properties,"properties");
};

