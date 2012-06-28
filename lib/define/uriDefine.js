var uriDefine = exports;

var post = 'POST';
var get = 'GET';

uriDefine.list = new Array();

uriDefine.list.push({upperLeft : { x: 2, y: 2 }, lowerRight : { x: 4, y: 4}});

function push(object) {
	uriDefine.list.push(object);
}