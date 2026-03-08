require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/mydb';
        await mongoose.connect(mongoURI);
        console.log('MongoDB Connected...');
    } catch(err){
        console.log(err.message);
    }};

module.exports = connectDB;
    
    