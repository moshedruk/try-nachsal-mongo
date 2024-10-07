const mongoose = require('mongoose');  

const connectToMongo = async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/green_eye');
        console.log('Connected to MongoDB');
    }catch(err){
        console.error('Error connecting to MongoDB:', err.message);
        
    }
}


module.exports = {
    connectToMongo,
 };
