var esprima = require('esprima'),
	esnode = require('./index'),
	jsonfile = require('jsonfile'),
	fs = require('fs');
var srcCode = fs.readFileSync('./tester.js');
var ast = esprima.parse(srcCode.toString(), {
    loc: true
});
var _finds = []
var _f = esnode(ast).query('object.name=/\$.*/', function(value, obj){
	//console.log(' computed is ',value);
	if(value===true)_finds.push(obj);
});

jsonfile.writeFile('./file.json', _finds, {spaces: 4}, function (err) {
  console.error(err)
})
