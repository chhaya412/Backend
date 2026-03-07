const mobgoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect(http);
        console.log('MongoDB Connected...');
    } catch(err){
        console.log(error);
    }};

module.exports = connectDB;
    
    