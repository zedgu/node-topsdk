
/**
 * TOP API: taobao.itemprops.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 类目子属性路径,由该子属性上层的类目属性和类目属性值组成,格式pid:vid;pid:vid.取类目子属性需要传child_path,cid
	 **/
	this.childPath;
	
	/** 
	 * 叶子类目ID，如果只传cid，则只返回一级属性,通过taobao.itemcats.get获得叶子类目ID
	 **/
	this.cid;
	
	/** 
	 * 需要返回的字段列表，见：ItemProp，默认返回：pid, name, must, multi, prop_values
	 **/
	this.fields;
	
	/** 
	 * 是否颜色属性。可选值:true(是),false(否) (删除的属性不会匹配和返回这个条件)
	 **/
	this.isColorProp;
	
	/** 
	 * 是否枚举属性。可选值:true(是),false(否) (删除的属性不会匹配和返回这个条件)。如果返回true，属性值是下拉框选择输入，如果返回false，属性值是用户自行手工输入。
	 **/
	this.isEnumProp;
	
	/** 
	 * 在is_enum_prop是true的前提下，是否是卖家可以自行输入的属性（注：如果is_enum_prop返回false，该参数统一返回false）。可选值:true(是),false(否) (删除的属性不会匹配和返回这个条件)
	 **/
	this.isInputProp;
	
	/** 
	 * 是否商品属性，这个属性只能放于发布商品时使用。可选值:true(是),false(否)
	 **/
	this.isItemProp;
	
	/** 
	 * 是否关键属性。可选值:true(是),false(否)
	 **/
	this.isKeyProp;
	
	/** 
	 * 是否销售属性。可选值:true(是),false(否)
	 **/
	this.isSaleProp;
	
	/** 
	 * 父属性ID
	 **/
	this.parentPid;
	
	/** 
	 * 属性id (取类目属性时，传pid，不用同时传PID和parent_pid)
	 **/
	this.pid;
	
	this.apiParas = [];
};

request.prototype.setChildPath = function(childPath) {
	this.childPath = childPath;
	this.apiParas["child_path"] = childPath;
};

request.prototype.getChildPath = function() {
	return this.childPath;
};

request.prototype.setCid = function(cid) {
	this.cid = cid;
	this.apiParas["cid"] = cid;
};

request.prototype.getCid = function() {
	return this.cid;
};

request.prototype.setFields = function(fields) {
	this.fields = fields;
	this.apiParas["fields"] = fields;
};

request.prototype.getFields = function() {
	return this.fields;
};

request.prototype.setIsColorProp = function(isColorProp) {
	this.isColorProp = isColorProp;
	this.apiParas["is_color_prop"] = isColorProp;
};

request.prototype.getIsColorProp = function() {
	return this.isColorProp;
};

request.prototype.setIsEnumProp = function(isEnumProp) {
	this.isEnumProp = isEnumProp;
	this.apiParas["is_enum_prop"] = isEnumProp;
};

request.prototype.getIsEnumProp = function() {
	return this.isEnumProp;
};

request.prototype.setIsInputProp = function(isInputProp) {
	this.isInputProp = isInputProp;
	this.apiParas["is_input_prop"] = isInputProp;
};

request.prototype.getIsInputProp = function() {
	return this.isInputProp;
};

request.prototype.setIsItemProp = function(isItemProp) {
	this.isItemProp = isItemProp;
	this.apiParas["is_item_prop"] = isItemProp;
};

request.prototype.getIsItemProp = function() {
	return this.isItemProp;
};

request.prototype.setIsKeyProp = function(isKeyProp) {
	this.isKeyProp = isKeyProp;
	this.apiParas["is_key_prop"] = isKeyProp;
};

request.prototype.getIsKeyProp = function() {
	return this.isKeyProp;
};

request.prototype.setIsSaleProp = function(isSaleProp) {
	this.isSaleProp = isSaleProp;
	this.apiParas["is_sale_prop"] = isSaleProp;
};

request.prototype.getIsSaleProp = function() {
	return this.isSaleProp;
};

request.prototype.setParentPid = function(parentPid) {
	this.parentPid = parentPid;
	this.apiParas["parent_pid"] = parentPid;
};

request.prototype.getParentPid = function() {
	return this.parentPid;
};

request.prototype.setPid = function(pid) {
	this.pid = pid;
	this.apiParas["pid"] = pid;
};

request.prototype.getPid = function() {
	return this.pid;
};

request.prototype.getApiMethodName = function() {
	return "taobao.itemprops.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.cid,"cid");
};

