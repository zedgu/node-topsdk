/*
 * TOP NodeJS SDK API Generater with PHP SDK
 */
var fs = require('fs'),
	path = require('path'),
	root_path = process.argv[2] ? process.argv[2] : __dirname + '/';
try {
	var files = fs.readdirSync(root_path);
} catch (e) {
	console.log(e);
	return;
}
if (path.existsSync(root_path + 'node_api')) {
	console.log('Dir: node_api is exist. Please backup the folder and remove it, then try this app again.');
	return;
} else {
	fs.mkdirSync(root_path + 'node_api');
}
files.forEach(function(file) {
	var fileroot_path = root_path + file,
		stat = fs.lstatSync(fileroot_path);
	if (stat.isFile() && /\.php$/.test(fileroot_path)) {
		try {
			var content = fs.readFileSync(fileroot_path, 'utf8');
		} catch (e) {
			console.log(err);
			return;
		}
		var newfile = content.match(/([\w-]+\.)+[\w]+/)[0] + '.js';
		newcontent = content.replace(/\r?\n?\t?\{/g,' {')
		.replace(/\t\}/g, '\};')
		.replace('<?php', '')
		.replace('@author auto create', 'Auto Generate by TOP NodeJS SDK, ' + (new Date()).toString())
		.replace(/class .+/g, 'var request = module.exports = function() {')
		.replace(/private \$/g, 'this.')
		.replace(/array\(\)/g, '[]')
		.replace('check()', 'check(topApiCheck)')
		.replace(/RequestCheckUtil::/g, 'topApiCheck.')
		.replace(/\t?\r?\n?\t\w+ function (\w+)/, "};\n\nrequest.prototype.$1 = function")
		.replace(/\t\w+ function (\w+)/g, "request.prototype.$1 = function")
		.replace(/\$this ?-> ?/g, "this.")
		.replace(/\$/g, '')
		.replace(/\t\t/g, '\t')
		.replace(/\};\r?\n?\}/, '};\n');
		try {
			fs.writeFileSync(root_path + '/node_api/' + newfile, newcontent, 'utf8');
		} catch (e) {
			console.log('Error in File ' + file + '.\nError:' + err);
		}
		console.log(file + ' done.');
	}
});
