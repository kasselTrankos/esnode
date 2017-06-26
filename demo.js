var esprima = require('esprima'),
	esnode = require('./esnode'),
	jsonfile = require('jsonfile'),
	fs = require('fs');
var srcCode = fs.readFileSync('./tester.js');
var ast = esprima.parse(srcCode.toString(), {
    loc: true
});
var _finds = []
var _f = esnode(ast).query('left.name', function(value, obj){
	_finds.push({name: value, obj:obj});
});
jsonfile.writeFile('./file.json', _finds, {spaces: 4}, function (err) {
  console.error(err)
})
