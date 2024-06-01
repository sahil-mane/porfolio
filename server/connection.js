const mongoose = require('mongoose');

const connectDB = async () => {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    if(connection.STATES.disconnected)
        {
            console.log('MongoDB disconnected!');
        }
        else{
            console.log('MongoDB connected!');
        }
};

module.exports = { connectDB };