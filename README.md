# esnode

Easy way to validate and access at any node of part of [ECMAScript](https://www.ecma-international.org/publications/standards/Ecma-262.htm) recursive traversing functionality.

This is a little demo of use:
```javascript
var _f = esnode(ast).query('left.name', function(value, obj){
	_finds.push({name: value, obj:obj});
});
```
