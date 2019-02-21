var express = require ('express');
const  mongoose= require('mongoose');
let dev_db_url='mongodb://localhost:20701'
let mongoDB=process.env.MONGODB_URI||dev_db_url_;
mongoose.connect(mongoDB);
mongoose.Promise=global.Promise;
let db=mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB connection error:'));
var bodyParser = require('body-parser');
const product = require('./routes/product.route');
var app=express();
var port=1234;
app.use('/products',product);
app.listen(port,()=>{});
