const express = require('express');
const app = express();
const PORT = 9000;
const cors = require('cors');
const { connectDB } = require('./connection');
require('dotenv').config();


// 1)middlewares
app.use(cors());
app.use(express.json());

//2)Routes
app.get('/',(req,res)=> console.log('welcome website'));


// 3) Mongo db connection
connectDB();

//4) Server
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
});