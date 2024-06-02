const express = require('express');
const app = express();
const PORT = 9000;
const cors = require('cors');
const { connectDB } = require('./connection');
// const { routes } = require('./routes/routes');
const router = require('./routes/routes');
const cookieParser = require('cookie-parser');
require('dotenv').config();

// 1)middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//2)Routes
// app.get('/',(req,res) => { res.send('welcome to website')});
app.use("/api", router);



// 3) Mongo db connection
connectDB();

// 4) Global error handling
// app.use((err, req, res,  next)=>{
//     err.statuscode = err.statuscode || 500;
//     err.status = err.status || 'error';
    
//     res.status(err.statuscode).json({
//         status:err.status,
//         message:err.message,
//     });
// });

//5) Server
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
});