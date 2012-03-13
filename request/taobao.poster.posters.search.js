
/**
 * TOP API: taobao.poster.posters.search request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 频道id列表
	 **/
	this.channelIds;
	
	/** 
	 * 编辑推荐：editor_recommend = 1；
	 **/
	this.editorRecommend;
	
	/** 
	 * 结束时间
	 **/
	this.endDate;
	
	/** 
	 * 关键词出现在标题，短标题，标签中
	 **/
	this.keyWord;
	
	/** 
	 * 当前页
	 **/
	this.pageNo;
	
	/** 
	 * 每页显示画报数 小于10或者大于20，默认设置为10
	 **/
	this.pageSize;
	
	/** 
	 * 服饰 频道 {
推荐系数  2 	服饰—平铺图;
推荐系数  5	服饰—真人秀;
;推荐系数  7	服饰—风格秀场;
}
男人 频道 {
推荐系数  8	男人频道—卖家画报;
}	
女人 频道 {
推荐系数 6	女人频道—淘宝红人;
推荐系数 8	女人频道—优质街拍;
}	
亲子 频道 {
推荐系数 1	亲子频道—亲子单品；
推荐系数 8	亲子频道—卖家画报；
}	
美容 频道 {
推荐系数 5+关键字:护肤	美容频道—护肤内容；
推荐系数 5+关键字:彩妆	美容频道—彩妆内容；
推荐系数 5+关键字:美发	美容频道—扎发类内容；
}
居家 频道 {
推荐系数 5	居家频道—线下体验馆-爱蜂潮；
}
	 **/
	this.recommendFactor;
	
	/** 
	 * 1："点击升序"；
2："点击降序"；
3："创建时间升序"；
4："创建时间降序"；
	 **/
	this.sortType;
	
	/** 
	 * 开始时间
	 **/
	this.startDate;
	
	/** 
	 * 制作画报的 用户名
	 **/
	this.userNick;
	
	this.apiParas = [];
};

request.prototype.setChannelIds = function(channelIds) {
	this.channelIds = channelIds;
	this.apiParas["channel_ids"] = channelIds;
};

request.prototype.getChannelIds = function() {
	return this.channelIds;
};

request.prototype.setEditorRecommend = function(editorRecommend) {
	this.editorRecommend = editorRecommend;
	this.apiParas["editor_recommend"] = editorRecommend;
};

request.prototype.getEditorRecommend = function() {
	return this.editorRecommend;
};

request.prototype.setEndDate = function(endDate) {
	this.endDate = endDate;
	this.apiParas["end_date"] = endDate;
};

request.prototype.getEndDate = function() {
	return this.endDate;
};

request.prototype.setKeyWord = function(keyWord) {
	this.keyWord = keyWord;
	this.apiParas["key_word"] = keyWord;
};

request.prototype.getKeyWord = function() {
	return this.keyWord;
};

request.prototype.setPageNo = function(pageNo) {
	this.pageNo = pageNo;
	this.apiParas["page_no"] = pageNo;
};

request.prototype.getPageNo = function() {
	return this.pageNo;
};

request.prototype.setPageSize = function(pageSize) {
	this.pageSize = pageSize;
	this.apiParas["page_size"] = pageSize;
};

request.prototype.getPageSize = function() {
	return this.pageSize;
};

request.prototype.setRecommendFactor = function(recommendFactor) {
	this.recommendFactor = recommendFactor;
	this.apiParas["recommend_factor"] = recommendFactor;
};

request.prototype.getRecommendFactor = function() {
	return this.recommendFactor;
};

request.prototype.setSortType = function(sortType) {
	this.sortType = sortType;
	this.apiParas["sort_type"] = sortType;
};

request.prototype.getSortType = function() {
	return this.sortType;
};

request.prototype.setStartDate = function(startDate) {
	this.startDate = startDate;
	this.apiParas["start_date"] = startDate;
};

request.prototype.getStartDate = function() {
	return this.startDate;
};

request.prototype.setUserNick = function(userNick) {
	this.userNick = userNick;
	this.apiParas["user_nick"] = userNick;
};

request.prototype.getUserNick = function() {
	return this.userNick;
};

request.prototype.getApiMethodName = function() {
	return "taobao.poster.posters.search";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkMaxListSize(this.channelIds,20,"channelIds");
	topApiCheck.checkMaxLength(this.channelIds,100,"channelIds");
	topApiCheck.checkMaxValue(this.editorRecommend,1,"editorRecommend");
	topApiCheck.checkMinValue(this.editorRecommend,1,"editorRecommend");
	topApiCheck.checkNotNull(this.pageNo,"pageNo");
	topApiCheck.checkNotNull(this.pageSize,"pageSize");
	topApiCheck.checkMaxValue(this.recommendFactor,10,"recommendFactor");
	topApiCheck.checkMinValue(this.recommendFactor,0,"recommendFactor");
	topApiCheck.checkMaxValue(this.sortType,4,"sortType");
	topApiCheck.checkMinValue(this.sortType,1,"sortType");
};

