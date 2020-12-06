const _ = require('lodash');

function bindAllAuto(obj) {
	// extend.apply(null, arguments)
	
	Object.keys(obj).filter(isMethod).forEach(bindMethods)
	if (obj.__proto__) {
		Object.keys(obj.__proto__).filter(isMethod).forEach(bindMethods)
	}
	return obj
	
	function isMethod(name) {
		return obj[name] && obj[name].bind === isMethod.bind
	}
	
	function bindMethods(name) {
		obj[name] = obj[name].bind(obj)
	}
}

module.exports.bindAllAuto = bindAllAuto;
