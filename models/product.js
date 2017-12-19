const mongoose = require('mongoose');

// Product Schema
const productSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	category:{
		type: String,
		required: true
	},
	description:{
		type: String
	},
	seller:{
		type: String,
		required: true
	},
	number:{
		type: String
	},
	image_url:{
		type: String
	},
	buy_url:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Product = module.exports = mongoose.model('Product', productSchema);

// Get Productss
module.exports.getProducts = (callback, limit) => {
	Product.find(callback).limit(limit);
}

// Get Product
module.exports.getProductById = (id, callback) => {
	Product.findById(id, callback);
}

// Add Product
module.exports.addProduct = (product, callback) => {
	Product.create(product, callback);
}

// Update Product
module.exports.updateProduct = (id, product, options, callback) => {
	var query = {_id: id};
	var update = {
		name: product.name,
		category: product.category,
		description: product.description,
		seller : product.seller,
		number: product.number,
		image_url: product.image_url,
		buy_url: product.buy_url
	}
	Product.findOneAndUpdate(query, update, options, callback);
}

// Delete Product
module.exports.removeProduct = (id, callback) => {
	var query = {_id: id};
	Product.remove(query, callback);
}
