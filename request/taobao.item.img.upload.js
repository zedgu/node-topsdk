
/**
 * TOP API: taobao.item.img.upload request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 商品图片id(如果是更新图片，则需要传该参数)
	 **/
	this.id;
	
	/** 
	 * 商品图片内容类型:JPG,GIF;最大长度:500K 。支持的文件类型：gif,jpg,jpeg,png
	 **/
	this.image;
	
	/** 
	 * 是否将该图片设为主图,可选值:true,false;默认值:false(非主图)
	 **/
	this.isMajor;
	
	/** 
	 * 商品数字ID，该参数必须
	 **/
	this.numIid;
	
	/** 
	 * 图片序号
	 **/
	this.position;
	
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

request.prototype.setIsMajor = function(isMajor) {
	this.isMajor = isMajor;
	this.apiParas["is_major"] = isMajor;
};

request.prototype.getIsMajor = function() {
	return this.isMajor;
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

request.prototype.getApiMethodName = function() {
	return "taobao.item.img.upload";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.numIid,"numIid");
	topApiCheck.checkMinValue(this.numIid,0,"numIid");
};

