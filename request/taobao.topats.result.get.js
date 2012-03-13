
/**
 * TOP API: taobao.topats.result.get request
 * 
 * Auto Generate by TOP NodeJS SDK, Mon Mar 12 2012 23:12:46 GMT+0800 (CST)
 * @since 1.0, 2012-03-01 12:30:31
 */
var request = module.exports = function() {
	/** 
	 * 任务id号，创建任务时返回的task_id
	 **/
	this.taskId;
	
	this.apiParas = [];
};

request.prototype.setTaskId = function(taskId) {
	this.taskId = taskId;
	this.apiParas["task_id"] = taskId;
};

request.prototype.getTaskId = function() {
	return this.taskId;
};

request.prototype.getApiMethodName = function() {
	return "taobao.topats.result.get";
};
	
request.prototype.getApiParas = function() {
	return this.apiParas;
};
	
request.prototype.check = function(topApiCheck) {
	
	topApiCheck.checkNotNull(this.taskId,"taskId");
};

