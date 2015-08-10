

if (process.platform==='win32') {
	process.exit(0);
}

var exec = require('child_process').exec,
	fs = require('fs'),
	path = require('path'),
	from = path.join(__dirname, 'binding'),
	to = path.join(__dirname, 'binding.gyp');


fs.renameSync(from, to);
exec('node-gyp rebuild', function (err, stdout, stderr) {
	fs.renameSync(to, from);
	stdout && console.log(stdout);
	stderr && console.error(stderr);
	if (err) {
		process.exit(1);
	}
	else {
		process.exit(0);
	}
});
