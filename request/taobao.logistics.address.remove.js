
/**
 * TOP API: taobao.logistics.address.remove request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 地址库ID
	 **/
	this.contactId;
	
	this.apiParas = [];
};

request.prototype.setContactId = function(contactId) {
	this.contactId = contactId;
	this.apiParas["contact_id"] = contactId;
};

request.prototype.getContactId = function() {
	return this.contactId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.logistics.address.remove";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.contactId,"contactId");
};

