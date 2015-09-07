var Base64 = require('./base64.js')

var args = process.argv.slice(2);
if(args.length < 2) {
	console.log('Too few parameters.');
	return;
}

var input = args[1];

if(args[0].toLowerCase() === 'encode') {
	console.log(Base64.encode(input))
}
else {
	console.log(Base64.decode(input))
}