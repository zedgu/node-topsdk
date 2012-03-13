/*
 * 淘宝TOP平台API开发SDK for NodeJS
 * Main Object for TOP NodeJS SDK
 * @author Zed Gu
 */
var crypto = require('crypto'),
	http = require('http'),
	fs = require('fs'),
	events = require("events"),
	xml = require("node-xml"),
	topApiCheck = require('./topApiCheck');

var TopSDK = module.exports = function() {
		this.appkey = '';
		this.secretkey = '';
		this.getewayHost = 'gw.api.taobao.com';
		this.gatewayPath = '/router/rest';
		this.format = "json";
		this.checkRequest = true;
		this.signMethod = "md5";
		this.apiVersion = "2.0";
		this.sdkVersion = "0.0.0";
		this.emitter = new events.EventEmitter();
	};

TopSDK.prototype.kvSort = function(obj) {
	var keys = [],
		newObj = {};
	for (var key in obj) {
		keys.push(key);
	}
	keys.sort();
	for (var i = 0; i < keys.length; i++) {
		newObj[keys[i]] = obj[keys[i]];
	}
	return newObj;
};

TopSDK.prototype.logError = function(error) {
	console.error(['appkey:' + this.appkey, 'sdkVersion:' + this.sdkVersion, 'req:' + this.gatewayPath, 'error:' + error.stack].join(' ||| '));
	return error;
};

TopSDK.prototype.generateSign = function(params) {
	var stringToBeSigned = this.secretkey,
		hash = crypto.createHash(this.signMethod);
	params = this.kvSort(params);
	for (var key in params) {
		stringToBeSigned += key + params[key];
	}
	stringToBeSigned += this.secretkey;
	hash.update(stringToBeSigned);
	this.sign = hash.digest('hex').toUpperCase();
	return this.sign;
};

TopSDK.prototype.request = function(postFields) {
	var options = {
		host: this.getewayHost,
		method: 'POST',
		path: this.gatewayPath,
		headers: {
			'Content-Type': 'www-form-urlencoded'
		},
		body: ''
	},
		response = {},
		self = this;
	if (postFields) {
		for (var key in postFields) {
			if (postFields[key] instanceof fs.ReadStream /*todo*/ ) {
				options.boundary = this.sign;
				options.headers['Content-Type'] = 'multipart/form-data; boundary=' + options.boundary;
				options.headers['Connection'] = 'keep-alive';
			}
			options.body += key + "=" + encodeURIComponent(postFields[key]) + "&";
		}
		options.body = options.body.substr(0, options.body.length - 1);
	}
	options.headers['Content-Length'] = options.body.length;
	var req = http.request(options, function(res) {
		res.setEncoding('utf8');
		response.statusCode = res.statusCode;
		response.headers = res.headers;
		res.on('data', function(chunk) {
			//解析TOP返回结果
			if (response.statusCode == 200) {
				if ("json" == self.format) {
					try {
						response.data = JSON.parse(chunk);
					} catch (e) {
						return self.logError(e);
					}
				} else if ("xml" == self.format) {
					try {
						var XML = new xml.SaxParser();
						response.data = XML.parseString(chunk);
					} catch (e) {
						return self.logError(e);
					}
				}
			} else {
				self.logError(new Error('HTTP_' + response.statusCode));
			}
			self.emitter.emit("called", response.data);
		});
	});
	req.on('error', function(e) {
		self.logError(e);
	});
	if (options.headers['Content-Type'] == 'www-form-urlencoded') {
		req.write(options.body);
		req.end();
	} else {
		for (var key in postFields) {
			if (postFields[key] instanceof fs.ReadStream /*todo*/ ) {
				req.write('--' + options.boundary + '\r\n' + 'Content-Disposition: form-data; name="' + key + '; filename="' + postFields[key].filename /*todo*/ + '\r\n' + 'Content-Type:' + postFields[key].type + '\r\n\r\n');
				var fileBuffer = fs.readFileSync(postFields[key].path, postFields[key].type.match(/^text\//) ? 'utf8' : 'binary');
				req.write(fileBuffer);
				req.write('\r\n');
			} else {
				req.write('--' + options.boundary + '\r\n' + 'Content-Disposition: form-data; name="' + key + '\r\n\r\n' + postFields[key]);
			}
		}
		req.end('\r\n--' + options.boundary + '--');
	}
};

TopSDK.prototype.exec = function(apiName, params, cb) {
	try {
		var api = require('./request/' + apiName + '.js');
	} catch (e) {
		return this.logError(e);;
	}
	var request = new api(),
		sysParams = {},
		apiParams = {},
		allParams = {};
	for (var key in params) {
		if (request['set' + key.substring(0,1).toUpperCase() + key.substring(1)]) {
			request['set' + key.substring(0,1).toUpperCase() + key.substring(1)](params[key]);
		}
	}
	// 参数完整性检查
	if (this.checkRequest) {
		try {
			request.check(topApiCheck);
		} catch (e) {
			return this.logError(e);
		}
	}
	//组装系统参数
	sysParams["app_key"] = this.appkey;
	sysParams["v"] = this.apiVersion;
	sysParams["format"] = this.format;
	sysParams["sign_method"] = this.signMethod;
	sysParams["method"] = request.getApiMethodName();
	sysParams["timestamp"] = (function() {
		var time = new Date();
		return time.toISOString().substr(0, 10) + ' ' + time.toLocaleTimeString();
	})();
	// sysParams["partner_id"] = this.sdkVersion;
	if (null != params["session"]) {
		sysParams["session"] = session;
	}
	//获取业务参数
	apiParams = request.getApiParas();
	//签名
	sysParams['sign'] = this.generateSign((function() {
		for (var key in apiParams) {
			allParams[key] = apiParams[key];
		}
		for (var key in sysParams) {
			allParams[key] = sysParams[key];
		}
		return allParams;
	})());
	allParams['sign'] = sysParams['sign'];
	//系统参数放入GET请求串
	this.gatewayPath += '?';
	for (var key in allParams) {
		this.gatewayPath += key + "=" + encodeURIComponent(allParams[key]) + "&";
	}
	this.gatewayPath = this.gatewayPath.substr(0, this.gatewayPath.length - 1);

	// 注册回调事件
	this.emitter.on("called", cb);

	//发起HTTP请求
	try {
		this.request(allParams);
	} catch (e) {
		return this.logError(e);
	}
};
