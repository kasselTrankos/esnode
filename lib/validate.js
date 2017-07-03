/*
  Copyright (C) 2017 Álvaro Touzón <alvaro.touzon@gmail.com>
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
*/
var validate = function	(pattern, callback){
	var _object = {}, _lexers = [];
	var _startARR = '[', _endARR = ']', _startObj = '.';
	function Lexer(){
		for(var i=0;i<=pattern.length; i++){
			Object(i); Array(i)
		}
	}
	function valid(i){
		Lexer();
		var _o  = _object;
		for(var i=0;i<_lexers.length; i++){
			_o = _o[pattern.slice(_lexers[i].start, _lexers[i].end)];
			if(!_o) break;
		}

		return _o;
	}
	var EndObject  = function(pos){
		var _end = pattern.length;
		for(var t=pos; t<pattern.length; t++){
			if(pattern.charAt(t)===_startARR ||
				pattern.charAt(t)===_startObj){
				_end = t;
				break;
			}
		};
		return _end;
	}
	function Object(i){
		if(pattern.charAt(i)===_startObj ||
			(i===0 && pattern.charAt(i)!==_startARR)){
			_lexers.push({
				start: (i==0)?i:i+1,
				end: EndObject(i+1),
				type: 'Object'
			});
		}
		return false;
	}
	function EndArray(pos){
		var _end = pattern.length;
		for(var t=pos; t<pattern.length; t++){
			if(pattern.charAt(t)===_endARR){
				_end = t;
				break;
			}
		};
		return _end;
	}
	function Array(i){
		if(pattern.charAt(i)===_startARR){
			_lexers.push({
				start: i+1,
				end: EndArray(i+1),
				type:'Array'
			});
		}
		
		return false;

	}
	function validate(obj){
		if(obj===null || obj===void(0)) return false;

		var isValid = valid();
		if(callback && isValid!==null){
			callback(isValid, obj)
		}
		return isValid
	};
	return function (obj){
		_object = obj;
		return validate(obj);
	}
};
module.exports = validate;