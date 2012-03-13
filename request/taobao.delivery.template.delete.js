
/**
 * TOP API: taobao.delivery.template.delete request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 运费模板ID
	 **/
	this.templateId;
	
	this.apiParas = [];
};

request.prototype.setTemplateId = function(templateId) {
	this.templateId = templateId;
	this.apiParas["template_id"] = templateId;
};

request.prototype.getTemplateId = function() {
	return this.templateId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.delivery.template.delete";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.templateId,"templateId");
};

