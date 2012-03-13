
/**
 * TOP API: taobao.item.add request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 售后说明模板id
	 **/
	this.afterSaleId;
	
	/** 
	 * 商品上传后的状态。可选值:onsale(出售中),instock(仓库中);默认值:onsale
	 **/
	this.approveStatus;
	
	/** 
	 * 商品的积分返点比例。如:5,表示:返点比例0.5%. 注意：返点比例必须是>0的整数，而且最大是90,即为9%.B商家在发布非虚拟商品时，返点必须是 5的倍数，即0.5%的倍数。其它是1的倍数，即0.1%的倍数。无名良品商家发布商品时，复用该字段记录积分宝返点比例，返点必须是对应类目的返点步长的整数倍，默认是5，即0.5%。注意此时该字段值依旧必须是>0的整数，最高值不超过500，即50%
	 **/
	this.auctionPoint;
	
	/** 
	 * 代充商品类型。在代充商品的类目下，不传表示不标记商品类型（交易搜索中就不能通过标记搜到相关的交易了）。可选类型： 
no_mark(不做类型标记) 
time_card(点卡软件代充) 
fee_card(话费软件代充)
	 **/
	this.autoFill;
	
	/** 
	 * 叶子类目id
	 **/
	this.cid;
	
	/** 
	 * 此为货到付款运费模板的ID，对应的JAVA类型是long,如果COD卖家应用了货到付款运费模板，此值要进行设置。
	 **/
	this.codPostageId;
	
	/** 
	 * 宝贝描述。字数要大于5个字符，小于25000个字符，受违禁词控制
	 **/
	this.desc;
	
	/** 
	 * ems费用。取值范围:0.01-999.00;精确到2位小数;单位:元。如:25.07，表示:25元7分
	 **/
	this.emsFee;
	
	/** 
	 * 快递费用。取值范围:0.01-999.00;精确到2位小数;单位:元。如:15.07，表示:15元7分
	 **/
	this.expressFee;
	
	/** 
	 * 运费承担方式。可选值:seller（卖家承担）,buyer(买家承担);默认值:seller。卖家承担不用设置邮费和postage_id.买家承担的时候，必填邮费和postage_id 
如果用户设置了运费模板会优先使用运费模板，否则要同步设置邮费（post_fee,express_fee,ems_fee）
	 **/
	this.freightPayer;
	
	/** 
	 * 支持会员打折。可选值:true,false;默认值:false(不打折)
	 **/
	this.hasDiscount;
	
	/** 
	 * 是否有发票。可选值:true,false (商城卖家此字段必须为true);默认值:false(无发票)
	 **/
	this.hasInvoice;
	
	/** 
	 * 橱窗推荐。可选值:true,false;默认值:false(不推荐)
	 **/
	this.hasShowcase;
	
	/** 
	 * 是否有保修。可选值:true,false;默认值:false(不保修)
	 **/
	this.hasWarranty;
	
	/** 
	 * 商品主图片。类型:JPG,GIF;最大长度:500K
	 **/
	this.image;
	
	/** 
	 * 加价幅度。如果为0，代表系统代理幅度
	 **/
	this.increment;
	
	/** 
	 * 用户自行输入的类目属性ID串。结构："pid1,pid2,pid3"，如："20000"（表示品牌） 注：通常一个类目下用户可输入的关键属性不超过1个。
	 **/
	this.inputPids;
	
	/** 
	 * 用户自行输入的子属性名和属性值，结构:"父属性值;一级子属性名;一级子属性值;二级子属性名;自定义输入值,....",如：“耐克;耐克系列;科比系列;科比系列;2K5,Nike乔丹鞋;乔丹系列;乔丹鞋系列;乔丹鞋系列;json5”，多个自定义属性用','分割，input_str需要与input_pids一一对应，注：通常一个类目下用户可输入的关键属性不超过1个。所有属性别名加起来不能超过3999字节
	 **/
	this.inputStr;
	
	/** 
	 * 是否是3D
	 **/
	this.is3D;
	
	/** 
	 * 是否在外店显示
	 **/
	this.isEx;
	
	/** 
	 * 实物闪电发货
	 **/
	this.isLightningConsignment;
	
	/** 
	 * 是否在淘宝上显示
	 **/
	this.isTaobao;
	
	/** 
	 * 商品是否为新品。只有在当前类目开通新品,并且当前用户拥有该类目下发布新品权限时才能设置is_xinpin为true，否则设置true后会返回错误码:isv.invalid-permission:add-xinpin。同时只有一口价全新的宝贝才能设置为新品，否则会返回错误码：isv.invalid-parameter:xinpin。不设置该参数值或设置为false效果一致。
	 **/
	this.isXinpin;
	
	/** 
	 * 商品文字的字符集。繁体传入"zh_HK"，简体传入"zh_CN"，不传默认为简体
	 **/
	this.lang;
	
	/** 
	 * 定时上架时间。(时间格式：yyyy-MM-dd HH:mm:ss)
	 **/
	this.listTime;
	
	/** 
	 * 所在地城市。如杭州 。可以通过http://dl.open.taobao.com/sdk/商品城市列表.rar查询
	 **/
	this.locationCity;
	
	/** 
	 * 所在地省份。如浙江，具体可以下载http://dl.open.taobao.com/sdk/商品城市列表.rar  取到
	 **/
	this.locationState;
	
	/** 
	 * 商品数量，取值范围:0-999999的整数。且需要等于Sku所有数量的和
	 **/
	this.num;
	
	/** 
	 * 商家编码，该字段的最大长度是512个字节
	 **/
	this.outerId;
	
	/** 
	 * 商品主图需要关联的图片空间的相对url。这个url所对应的图片必须要属于当前用户。pic_path和image只需要传入一个,如果两个都传，默认选择pic_path
	 **/
	this.picPath;
	
	/** 
	 * 平邮费用。取值范围:0.01-999.00;精确到2位小数;单位:元。如:5.07，表示:5元7分. 注:post_fee,express_fee,ems_fee需要一起填写
	 **/
	this.postFee;
	
	/** 
	 * 宝贝所属的运费模板ID。取值范围：整数且必须是该卖家的运费模板的ID（可通过taobao.postages.get获得当前会话用户的所有邮费模板）
	 **/
	this.postageId;
	
	/** 
	 * 商品价格。取值范围:0-100000000;精确到2位小数;单位:元。如:200.07，表示:200元7分。需要在正确的价格区间内。
	 **/
	this.price;
	
	/** 
	 * 商品所属的产品ID(B商家发布商品需要用)
	 **/
	this.productId;
	
	/** 
	 * 属性值别名。如pid:vid:别名;pid1:vid1:别名1 ，其中：pid是属性id vid是属性值id。总长度不超过511字节
	 **/
	this.propertyAlias;
	
	/** 
	 * 商品属性列表。格式:pid:vid;pid:vid。属性的pid调用taobao.itemprops.get取得，属性值的vid用taobao.itempropvalues.get取得vid。 如果该类目下面没有属性，可以不用填写。如果有属性，必选属性必填，其他非必选属性可以选择不填写.属性不能超过35对。所有属性加起来包括分割符不能超过549字节，单个属性没有限制。 如果有属性是可输入的话，则用字段input_str填入属性的值
	 **/
	this.props;
	
	/** 
	 * 是否承诺退换货服务!虚拟商品无须设置此项!
	 **/
	this.sellPromise;
	
	/** 
	 * 商品所属的店铺类目列表。按逗号分隔。结构:",cid1,cid2,...,"，如果店铺类目存在二级类目，必须传入子类目cids。
	 **/
	this.sellerCids;
	
	/** 
	 * Sku的外部id串，结构如：1234,1342,… 
sku_properties, sku_quantities, sku_prices, sku_outer_ids在输入数据时要一一对应，如果没有sku_outer_ids也要写上这个参数，入参是","(这个是两个sku的示列，逗号数应该是sku个数减1)；该参数最大长度是512个字节
	 **/
	this.skuOuterIds;
	
	/** 
	 * Sku的价格串，结构如：10.00,5.00,… 精确到2位小数;单位:元。如:200.07，表示:200元7分
	 **/
	this.skuPrices;
	
	/** 
	 * 更新的Sku的属性串，调用taobao.itemprops.get获取类目属性，如果属性是销售属性，再用taobao.itempropvalues.get取得vid。格式:pid:vid;pid:vid,多个sku之间用逗号分隔。该字段内的销售属性（自定义的除外）也需要在props字段填写。sku的销售属性需要一同选取，如:颜色，尺寸。如果新增商品包含了sku，则此字段一定要传入。这个字段的长度要控制在512个字节以内。
如果有自定义销售属性，则格式为pid:vid;pid2:vid2;pText:vText , 其中pText:vText为自定义属性。限制：其中pText的’’前缀不能少，且pText和vText文本中不可以存在冒号:和分号;以及逗号，
	 **/
	this.skuProperties;
	
	/** 
	 * Sku的数量串，结构如：num1,num2,num3 如：2,3
	 **/
	this.skuQuantities;
	
	/** 
	 * 新旧程度。可选值：new(新)，second(二手)，unused(闲置)。B商家不能发布二手商品。
如果是二手商品，特定类目下属性里面必填新旧成色属性
	 **/
	this.stuffStatus;
	
	/** 
	 * 商品是否支持拍下减库存:1支持;2取消支持(付款减库存);0(默认)不更改
集市卖家默认拍下减库存;
商城卖家默认付款减库存
	 **/
	this.subStock;
	
	/** 
	 * 宝贝标题。不能超过60字符，受违禁词控制
	 **/
	this.title;
	
	/** 
	 * 发布类型。可选值:fixed(一口价),auction(拍卖)。B商家不能发布拍卖商品，而且拍卖商品是没有SKU的
	 **/
	this.type;
	
	/** 
	 * 有效期。可选值:7,14;单位:天;默认值:14
	 **/
	this.validThru;
	
	/** 
	 * 商品的重量(商超卖家专用字段)
	 **/
	this.weight;
	
	this.apiParas = [];
};

request.prototype.setAfterSaleId = function(afterSaleId) {
	this.afterSaleId = afterSaleId;
	this.apiParas["after_sale_id"] = afterSaleId;
};

request.prototype.getAfterSaleId = function() {
	return this.afterSaleId;
};

request.prototype.setApproveStatus = function(approveStatus) {
	this.approveStatus = approveStatus;
	this.apiParas["approve_status"] = approveStatus;
};

request.prototype.getApproveStatus = function() {
	return this.approveStatus;
};

request.prototype.setAuctionPoint = function(auctionPoint) {
	this.auctionPoint = auctionPoint;
	this.apiParas["auction_point"] = auctionPoint;
};

request.prototype.getAuctionPoint = function() {
	return this.auctionPoint;
};

request.prototype.setAutoFill = function(autoFill) {
	this.autoFill = autoFill;
	this.apiParas["auto_fill"] = autoFill;
};

request.prototype.getAutoFill = function() {
	return this.autoFill;
};

request.prototype.setCid = function(cid) {
	this.cid = cid;
	this.apiParas["cid"] = cid;
};

request.prototype.getCid = function() {
	return this.cid;
};

request.prototype.setCodPostageId = function(codPostageId) {
	this.codPostageId = codPostageId;
	this.apiParas["cod_postage_id"] = codPostageId;
};

request.prototype.getCodPostageId = function() {
	return this.codPostageId;
};

request.prototype.setDesc = function(desc) {
	this.desc = desc;
	this.apiParas["desc"] = desc;
};

request.prototype.getDesc = function() {
	return this.desc;
};

request.prototype.setEmsFee = function(emsFee) {
	this.emsFee = emsFee;
	this.apiParas["ems_fee"] = emsFee;
};

request.prototype.getEmsFee = function() {
	return this.emsFee;
};

request.prototype.setExpressFee = function(expressFee) {
	this.expressFee = expressFee;
	this.apiParas["express_fee"] = expressFee;
};

request.prototype.getExpressFee = function() {
	return this.expressFee;
};

request.prototype.setFreightPayer = function(freightPayer) {
	this.freightPayer = freightPayer;
	this.apiParas["freight_payer"] = freightPayer;
};

request.prototype.getFreightPayer = function() {
	return this.freightPayer;
};

request.prototype.setHasDiscount = function(hasDiscount) {
	this.hasDiscount = hasDiscount;
	this.apiParas["has_discount"] = hasDiscount;
};

request.prototype.getHasDiscount = function() {
	return this.hasDiscount;
};

request.prototype.setHasInvoice = function(hasInvoice) {
	this.hasInvoice = hasInvoice;
	this.apiParas["has_invoice"] = hasInvoice;
};

request.prototype.getHasInvoice = function() {
	return this.hasInvoice;
};

request.prototype.setHasShowcase = function(hasShowcase) {
	this.hasShowcase = hasShowcase;
	this.apiParas["has_showcase"] = hasShowcase;
};

request.prototype.getHasShowcase = function() {
	return this.hasShowcase;
};

request.prototype.setHasWarranty = function(hasWarranty) {
	this.hasWarranty = hasWarranty;
	this.apiParas["has_warranty"] = hasWarranty;
};

request.prototype.getHasWarranty = function() {
	return this.hasWarranty;
};

request.prototype.setImage = function(image) {
	this.image = image;
	this.apiParas["image"] = image;
};

request.prototype.getImage = function() {
	return this.image;
};

request.prototype.setIncrement = function(increment) {
	this.increment = increment;
	this.apiParas["increment"] = increment;
};

request.prototype.getIncrement = function() {
	return this.increment;
};

request.prototype.setInputPids = function(inputPids) {
	this.inputPids = inputPids;
	this.apiParas["input_pids"] = inputPids;
};

request.prototype.getInputPids = function() {
	return this.inputPids;
};

request.prototype.setInputStr = function(inputStr) {
	this.inputStr = inputStr;
	this.apiParas["input_str"] = inputStr;
};

request.prototype.getInputStr = function() {
	return this.inputStr;
};

request.prototype.setIs3D = function(is3D) {
	this.is3D = is3D;
	this.apiParas["is_3D"] = is3D;
};

request.prototype.getIs3D = function() {
	return this.is3D;
};

request.prototype.setIsEx = function(isEx) {
	this.isEx = isEx;
	this.apiParas["is_ex"] = isEx;
};

request.prototype.getIsEx = function() {
	return this.isEx;
};

request.prototype.setIsLightningConsignment = function(isLightningConsignment) {
	this.isLightningConsignment = isLightningConsignment;
	this.apiParas["is_lightning_consignment"] = isLightningConsignment;
};

request.prototype.getIsLightningConsignment = function() {
	return this.isLightningConsignment;
};

request.prototype.setIsTaobao = function(isTaobao) {
	this.isTaobao = isTaobao;
	this.apiParas["is_taobao"] = isTaobao;
};

request.prototype.getIsTaobao = function() {
	return this.isTaobao;
};

request.prototype.setIsXinpin = function(isXinpin) {
	this.isXinpin = isXinpin;
	this.apiParas["is_xinpin"] = isXinpin;
};

request.prototype.getIsXinpin = function() {
	return this.isXinpin;
};

request.prototype.setLang = function(lang) {
	this.lang = lang;
	this.apiParas["lang"] = lang;
};

request.prototype.getLang = function() {
	return this.lang;
};

request.prototype.setListTime = function(listTime) {
	this.listTime = listTime;
	this.apiParas["list_time"] = listTime;
};

request.prototype.getListTime = function() {
	return this.listTime;
};

request.prototype.setLocationCity = function(locationCity) {
	this.locationCity = locationCity;
	this.apiParas["location.city"] = locationCity;
};

request.prototype.getLocationCity = function() {
	return this.locationCity;
};

request.prototype.setLocationState = function(locationState) {
	this.locationState = locationState;
	this.apiParas["location.state"] = locationState;
};

request.prototype.getLocationState = function() {
	return this.locationState;
};

request.prototype.setNum = function(num) {
	this.num = num;
	this.apiParas["num"] = num;
};

request.prototype.getNum = function() {
	return this.num;
};

request.prototype.setOuterId = function(outerId) {
	this.outerId = outerId;
	this.apiParas["outer_id"] = outerId;
};

request.prototype.getOuterId = function() {
	return this.outerId;
};

request.prototype.setPicPath = function(picPath) {
	this.picPath = picPath;
	this.apiParas["pic_path"] = picPath;
};

request.prototype.getPicPath = function() {
	return this.picPath;
};

request.prototype.setPostFee = function(postFee) {
	this.postFee = postFee;
	this.apiParas["post_fee"] = postFee;
};

request.prototype.getPostFee = function() {
	return this.postFee;
};

request.prototype.setPostageId = function(postageId) {
	this.postageId = postageId;
	this.apiParas["postage_id"] = postageId;
};

request.prototype.getPostageId = function() {
	return this.postageId;
};

request.prototype.setPrice = function(price) {
	this.price = price;
	this.apiParas["price"] = price;
};

request.prototype.getPrice = function() {
	return this.price;
};

request.prototype.setProductId = function(productId) {
	this.productId = productId;
	this.apiParas["product_id"] = productId;
};

request.prototype.getProductId = function() {
	return this.productId;
};

request.prototype.setPropertyAlias = function(propertyAlias) {
	this.propertyAlias = propertyAlias;
	this.apiParas["property_alias"] = propertyAlias;
};

request.prototype.getPropertyAlias = function() {
	return this.propertyAlias;
};

request.prototype.setProps = function(props) {
	this.props = props;
	this.apiParas["props"] = props;
};

request.prototype.getProps = function() {
	return this.props;
};

request.prototype.setSellPromise = function(sellPromise) {
	this.sellPromise = sellPromise;
	this.apiParas["sell_promise"] = sellPromise;
};

request.prototype.getSellPromise = function() {
	return this.sellPromise;
};

request.prototype.setSellerCids = function(sellerCids) {
	this.sellerCids = sellerCids;
	this.apiParas["seller_cids"] = sellerCids;
};

request.prototype.getSellerCids = function() {
	return this.sellerCids;
};

request.prototype.setSkuOuterIds = function(skuOuterIds) {
	this.skuOuterIds = skuOuterIds;
	this.apiParas["sku_outer_ids"] = skuOuterIds;
};

request.prototype.getSkuOuterIds = function() {
	return this.skuOuterIds;
};

request.prototype.setSkuPrices = function(skuPrices) {
	this.skuPrices = skuPrices;
	this.apiParas["sku_prices"] = skuPrices;
};

request.prototype.getSkuPrices = function() {
	return this.skuPrices;
};

request.prototype.setSkuProperties = function(skuProperties) {
	this.skuProperties = skuProperties;
	this.apiParas["sku_properties"] = skuProperties;
};

request.prototype.getSkuProperties = function() {
	return this.skuProperties;
};

request.prototype.setSkuQuantities = function(skuQuantities) {
	this.skuQuantities = skuQuantities;
	this.apiParas["sku_quantities"] = skuQuantities;
};

request.prototype.getSkuQuantities = function() {
	return this.skuQuantities;
};

request.prototype.setStuffStatus = function(stuffStatus) {
	this.stuffStatus = stuffStatus;
	this.apiParas["stuff_status"] = stuffStatus;
};

request.prototype.getStuffStatus = function() {
	return this.stuffStatus;
};

request.prototype.setSubStock = function(subStock) {
	this.subStock = subStock;
	this.apiParas["sub_stock"] = subStock;
};

request.prototype.getSubStock = function() {
	return this.subStock;
};

request.prototype.setTitle = function(title) {
	this.title = title;
	this.apiParas["title"] = title;
};

request.prototype.getTitle = function() {
	return this.title;
};

request.prototype.setType = function(type) {
	this.type = type;
	this.apiParas["type"] = type;
};

request.prototype.getType = function() {
	return this.type;
};

request.prototype.setValidThru = function(validThru) {
	this.validThru = validThru;
	this.apiParas["valid_thru"] = validThru;
};

request.prototype.getValidThru = function() {
	return this.validThru;
};

request.prototype.setWeight = function(weight) {
	this.weight = weight;
	this.apiParas["weight"] = weight;
};

request.prototype.getWeight = function() {
	return this.weight;
};

request.prototype.getApiMethodName = function() {
	return "taobao.item.add";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.cid,"cid");
	topApiCheck.checkMinValue(this.cid,0,"cid");
	topApiCheck.checkNotNull(this.desc,"desc");
	topApiCheck.checkMaxLength(this.desc,200000,"desc");
	topApiCheck.checkNotNull(this.locationCity,"locationCity");
	topApiCheck.checkNotNull(this.locationState,"locationState");
	topApiCheck.checkNotNull(this.num,"num");
	topApiCheck.checkMaxValue(this.num,999999,"num");
	topApiCheck.checkMinValue(this.num,0,"num");
	topApiCheck.checkNotNull(this.price,"price");
	topApiCheck.checkMaxLength(this.propertyAlias,511,"propertyAlias");
	topApiCheck.checkMaxListSize(this.sellerCids,10,"sellerCids");
	topApiCheck.checkNotNull(this.stuffStatus,"stuffStatus");
	topApiCheck.checkNotNull(this.title,"title");
	topApiCheck.checkMaxLength(this.title,60,"title");
	topApiCheck.checkNotNull(this.type,"type");
};

