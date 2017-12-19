const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Category =require('./models/category');
Product =require('./models/product');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/store');
var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Please use /api/products or /api/categories');
});

app.get('/api/categories', (req, res) => {
	Category.getCategories((err, categories) => {
		if(err){
			throw err;
		}
		res.json(categories);
	});
});

app.post('/api/categories', (req, res) => {
	var category = req.body;
	Category.addCategory(category, (err, category) => {
		if(err){
			throw err;
		}
		res.json(category);
	});
});

app.put('/api/categories/:_id', (req, res) => {
	var id = req.params._id;
	var category = req.body;
	Category.updateCategory(id, category, {}, (err, category) => {
		if(err){
			throw err;
		}
		res.json(category);
	});
});

app.delete('/api/categories/:_id', (req, res) => {
	var id = req.params._id;
	Category.removeCategory(id, (err, category) => {
		if(err){
			throw err;
		}
		res.json(category);
	});
});

app.get('/api/products', (req, res) => {
	Product.getProducts((err, products) => {
		if(err){
			throw err;
		}
		res.json(products);
	});
});

app.get('/api/products/:_id', (req, res) => {
	Product.getProductById(req.params._id, (err, product) => {
		if(err){
			throw err;
		}
		res.json(product);
	});
});

app.post('/api/products', (req, res) => {
	var product = req.body;
	Product.addProduct(product, (err, product) => {
		if(err){
			throw err;
		}
		res.json(product);
	});
});

app.put('/api/products/:_id', (req, res) => {
	var id = req.params._id;
	var product = req.body;
	Product.updateProduct(id, product, {}, (err, product) => {
		if(err){
			throw err;
		}
		res.json(product);
	});
});

app.delete('/api/products/:_id', (req, res) => {
	var id = req.params._id;
	Product.removeProduct(id, (err, product) => {
		if(err){
			throw err;
		}
		res.json(product);
	});
});

app.listen(3000);
console.log('Running on port 3000...');
