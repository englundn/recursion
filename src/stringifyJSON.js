// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj==='number' || typeof obj ==='boolean' || obj === null){
 	return '' + obj;
  }
  else if (typeof obj==='string'){
  	return '"' + obj + '"';
  }
  else if (Array.isArray(obj)){
  	var elements = [];
  	for (var i=0; i<obj.length; i++){
  		elements.push(stringifyJSON(obj[i]));
  	};
  	var output = '[';
  	if (elements.length>0) {
  		output = output.concat(elements[0]);
  	};
  	for (var i=1; i<obj.length; i++){
  		output = output.concat(',',elements[i]);
  	};
  	output = output.concat(']');
  	return output;
  }
  else if (obj === undefined || typeof obj === 'function'){
  	return;
  }
  else {
  	var objKeys = Object.keys(obj);
  	//console.log(objKeys);
  	var output = '{';

  	var stringQuotes = function(input){
  		if (typeof input === 'string'){
  			input = '"'+input+'"';
  		};
  		return input;
  	};
  	if (objKeys.length>0) {
  		key = stringQuotes(objKeys[0]);
  		if (obj[objKeys[0]] === undefined || typeof obj[objKeys[0]] === 'function'){
  			return '{}';
  		};
  		output += key;
  		value = stringifyJSON(obj[objKeys[0]]);
  		output = output.concat(':',value);
  		//objKeys.shift();
  	}
  	for (var i=1;i<objKeys.length;i++){
  		//console.log(i);
  		key = stringQuotes(objKeys[i]);
  		output = output.concat(',',key);
  		value = stringifyJSON(obj[objKeys[i]]);
  		output = output.concat(':',value);
  	};
  	output = output.concat('}');
  	return output;
	};
};

//test = {'foo': true, 'bar': false, 'baz': null};
//stringifyJSON(test);