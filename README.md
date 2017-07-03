# esnode

Easy way to validate and access at any node of part of [ECMAScript](https://www.ecma-international.org/publications/standards/Ecma-262.htm) recursive traversing functionality.

This is a little demo of use, can be find in *demo.js*:
```javascript
var _finds = []
var _f = esnode(ast).query('left.name', function(value, obj){
	console.log(value, 'asdodaes', obj);
	_finds.push(obj);
});
```

You can use equal operator to obtain only the results assigneds:
```javascript
var _f = esnode(ast).query('body[1].expression.arguments[0].callee.object.name="$scope"', function(value, obj){
	console.log(value, 'asdodaes', obj);
	_finds.push(obj);
});
```

You can use expression regular, forr match nodes:
```javascript
var _f = esnode(ast).query('body[1].expression.arguments[0].callee.object.name=/$\$scope^/', function(value, obj){
	console.log(value, 'asdodaes', obj);
	_finds.push(obj);
});
```


### License

Copyright (C) 2014 [Álvaro Touzón](https://github.com/kasselTrankos)
 (twitter: [@kasselTrankos](https://twitter.com/kasselTrankos)).

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright
    notice, this list of conditions and the following disclaimer.

  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the
    documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
