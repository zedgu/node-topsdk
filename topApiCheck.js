/**
 * Object for Checker of TOP API Params
 *
 **/
var topApiCheck = exports;
/**
 * 校验字段 fieldName 的值value非空
 *
 **/
topApiCheck.checkNotNull = function(value, fieldName) {

	if (this.checkEmpty(value)) {
		throw new Error("client-check-error:Missing Required Arguments: " + fieldName);
	}
}

/**
 * 检验字段fieldName的值value 的长度
 *
 **/
topApiCheck.checkMaxLength = function(value, maxLength, fieldName) {
	if (!this.checkEmpty(value) && value.length > maxLength) {
		throw new Error("client-check-error:Invalid Arguments:the length of " + fieldName + " can not be larger than " + maxLength + ".");
	}
}

/**
 * 检验字段fieldName的值value的最大列表长度
 *
 **/
topApiCheck.checkMaxListSize = function(value, maxSize, fieldName) {

	if (this.checkEmpty(value)) return;

	list = value.split(",");
	if (list.length > maxSize) {
		throw new Error("client-check-error:Invalid Arguments:the listsize(the string split by \",\") of " + fieldName + " must be less than " + maxSize + " .");
	}
}

/**
 * 检验字段fieldName的值value 的最大值
 *
 **/
topApiCheck.checkMaxValue = function(value, maxValue, fieldName) {

	if (this.checkEmpty(value)) return;

	this.checkNumeric(value, fieldName);

	if (value > maxValue) {
		throw new Error("client-check-error:Invalid Arguments:the value of " + fieldName + " can not be larger than " + maxValue + " .");
	}
}

/**
 * 检验字段fieldName的值value 的最小值
 *
 **/
topApiCheck.checkMinValue = function(value, minValue, fieldName) {

	if (this.checkEmpty(value)) return;

	this.checkNumeric(value, fieldName);

	if (value < minValue) {
		throw new Error("client-check-error:Invalid Arguments:the value of " + fieldName + " can not be less than " + minValue + " .");
	}
}

/**
 * 检验字段fieldName的值value是否是number
 *
 **/
topApiCheck.checkNumeric = function(value, fieldName) {
	if (typeof value !== 'number') throw new Error("client-check-error:Invalid Arguments:the value of " + fieldName + " is not number : " + value + " .");
}

/**
 * 校验value是否非空
 *  if not set ,return true;
 *	if is null , return true;
 *
 *
 **/
topApiCheck.checkEmpty = function(value) {
	if (!value) return true;
	if (value === null) return true;
	if (value.trim() === "") return true;

	return false;
}
