# Taobao TOP API Node SDK (3nd Party) / 淘宝开放平台 API Node SDK（第三方）

## Features / 功能

1. The node-topsdk is base on TOP official PHP SDK. \( Copycatting code, actually. See official SDK on [open.taobao.com](http://open.taobao.com). \)
本 SDK 基于官方 PHP SDK 开发。 \( 山寨代码。官方 SDK [open.taobao.com](http://open.taobao.com). \)
2. The auto generater script can convert the php request class to js class. \( The convertfromphp.js with terrible regexp code. \)
自动生成脚本可以将 php request 类转换称 js 类。\( 使用有着糟糕正则的 convertfromphp.js 即可。 \)
3. The node-topsdk is written by a node beginner so that there's no any quality assurance for users. \( Be careful! \)
本 SDK 是由一个 node 的初学者写的，所以不保证质量。\( 小心试用！ \)

## HOW TO / 使用

### topsdk.js

	var TopSDK = require('topsdk'),
		top = new TopSDK();
	top.exec('taobao.user.get', {
		fields: 'user_id,nick,location.city',
		nick: 'abc'
	}, function(data) {
		console.log(data);
	});

### convertfromphp.js
	$ node convertfromphp.js [reqeust files path]

End
