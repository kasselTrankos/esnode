var esprima = require('esprima'),

	fs = require('fs');
var srcCode = fs.readFileSync('./tester.js');
var ast = esprima.parse(srcCode.toString(), {
    loc: true
});
