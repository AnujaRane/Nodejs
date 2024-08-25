const mongoose = require('mongoose'); // load mongoose pacakge

mongoose.connect("mongodb://localhost:27017/e-comm"); // connect to database

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
});

// insert data
const saveInDb =  async () => {
        const ProductsModel = mongoose.model('products', ProductSchema);
            let data = new ProductsModel({
                name: 'm8', 
                price: '1200',
                brand: 'redmi',
                category: 'mobile'
            });
            let result = await data.save();
            console.log(result);
}

// saveInDB();

// update data
const updateInDb = async() => {
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.updateOne(
        {name: 'm8'},
        {
            $set: {price: 700}
        }
    )
    console.log(data);
}
// updateInDb();

// delete data
const deleteInDB = async () => {
    const Product = mongoose.model('product', ProductSchema);
    let data = await Product.deleteOne(
        {name:'m8'}
    );
    console.log(data);
}
// deleteInDB();

// read data
const findInDb = async() => {
    const Product = mongoose.model('product', ProductSchema);
    let data = await Product.find();  // find individual value use curly braces in find function and set the value you ca find
    console.log(data);
}
findInDb();