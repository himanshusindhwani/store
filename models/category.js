const mongoose = require('mongoose');

// Category Schema
const categorySchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Category = module.exports = mongoose.model('Category', categorySchema);

// Get Categories
module.exports.getCategories = (callback, limit) => {
	Category.find(callback).limit(limit);
}

// Add Category
module.exports.addCategory = (category, callback) => {
	Category.create(category, callback);
}

// Delete Category
module.exports.removeCategory = (id, callback) => {
	var query = {_id: id};
	Category.remove(query, callback);
}
