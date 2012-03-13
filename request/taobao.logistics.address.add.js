
/**
 * TOP API: taobao.logistics.address.add request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 详细街道地址，不需要重复填写省/市/区
	 **/
	this.addr;
	
	/** 
	 * 默认退货地址。<br>
<font color='red'>选择此项(true)，将当前地址设为默认退货地址，撤消原默认退货地址</font>
	 **/
	this.cancelDef;
	
	/** 
	 * 所在市
	 **/
	this.city;
	
	/** 
	 * 联系人姓名 <font color='red'>长度不可超过20个字节</font>
	 **/
	this.contactName;
	
	/** 
	 * 区、县
<br><font color='red'>如果所在地区是海外的可以为空，否则为必参</font>
	 **/
	this.country;
	
	/** 
	 * 默认取货地址。<br>
<font color='red'>选择此项(true)，将当前地址设为默认取货地址，撤消原默认取货地址</font>
	 **/
	this.getDef;
	
	/** 
	 * 备注,<br><font color='red'>备注不能超过256字节</font>
	 **/
	this.memo;
	
	/** 
	 * 手机号码，手机与电话必需有一个
<br><font color='red'>手机号码不能超过20位</font>
	 **/
	this.mobilePhone;
	
	/** 
	 * 电话号码,手机与电话必需有一个
	 **/
	this.phone;
	
	/** 
	 * 所在省
	 **/
	this.province;
	
	/** 
	 * 公司名称,<br><font color="red">公司名称长能不能超过20字节</font>
	 **/
	this.sellerCompany;
	
	/** 
	 * 地区邮政编码
<br><font color='red'>如果所在地区是海外的可以为空，否则为必参</font>
	 **/
	this.zipCode;
	
	this.apiParas = [];
};

request.prototype.setAddr = function(addr) {
	this.addr = addr;
	this.apiParas["addr"] = addr;
};

request.prototype.getAddr = function() {
	return this.addr;
};

request.prototype.setCancelDef = function(cancelDef) {
	this.cancelDef = cancelDef;
	this.apiParas["cancel_def"] = cancelDef;
};

request.prototype.getCancelDef = function() {
	return this.cancelDef;
};

request.prototype.setCity = function(city) {
	this.city = city;
	this.apiParas["city"] = city;
};

request.prototype.getCity = function() {
	return this.city;
};

request.prototype.setContactName = function(contactName) {
	this.contactName = contactName;
	this.apiParas["contact_name"] = contactName;
};

request.prototype.getContactName = function() {
	return this.contactName;
};

request.prototype.setCountry = function(country) {
	this.country = country;
	this.apiParas["country"] = country;
};

request.prototype.getCountry = function() {
	return this.country;
};

request.prototype.setGetDef = function(getDef) {
	this.getDef = getDef;
	this.apiParas["get_def"] = getDef;
};

request.prototype.getGetDef = function() {
	return this.getDef;
};

request.prototype.setMemo = function(memo) {
	this.memo = memo;
	this.apiParas["memo"] = memo;
};

request.prototype.getMemo = function() {
	return this.memo;
};

request.prototype.setMobilePhone = function(mobilePhone) {
	this.mobilePhone = mobilePhone;
	this.apiParas["mobile_phone"] = mobilePhone;
};

request.prototype.getMobilePhone = function() {
	return this.mobilePhone;
};

request.prototype.setPhone = function(phone) {
	this.phone = phone;
	this.apiParas["phone"] = phone;
};

request.prototype.getPhone = function() {
	return this.phone;
};

request.prototype.setProvince = function(province) {
	this.province = province;
	this.apiParas["province"] = province;
};

request.prototype.getProvince = function() {
	return this.province;
};

request.prototype.setSellerCompany = function(sellerCompany) {
	this.sellerCompany = sellerCompany;
	this.apiParas["seller_company"] = sellerCompany;
};

request.prototype.getSellerCompany = function() {
	return this.sellerCompany;
};

request.prototype.setZipCode = function(zipCode) {
	this.zipCode = zipCode;
	this.apiParas["zip_code"] = zipCode;
};

request.prototype.getZipCode = function() {
	return this.zipCode;
};

request.prototype.getApiMethodName = function() {
	return "taobao.logistics.address.add";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.addr,"addr");
	topApiCheck.checkNotNull(this.city,"city");
	topApiCheck.checkNotNull(this.contactName,"contactName");
	topApiCheck.checkMaxLength(this.memo,256,"memo");
	topApiCheck.checkNotNull(this.province,"province");
	topApiCheck.checkMaxLength(this.sellerCompany,20,"sellerCompany");
};

