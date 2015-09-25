var backend = require('app-core').loopback;
var productModel = backend.models.Product;

productModel.find().then(function(data){
	console.log(data);
})