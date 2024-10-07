const mongoose = require('mongoose');   


// create a new schema object for population
const populatetionSchema = new mongoose.Schema({
    areas:[String],
    units:[Number]    
});

// create green eye schema  with required fields and default values
const greenEyeSchema = mongoose.Schema({
    create_at:{
        type: Date,
        default: Date.now,        
    },
    create_by:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true,"create_by is required"]
    },
    length:{
        type: Number,
        default: 3,
    }, 
    replies:{
        type: [mongoose.Schema.Types.ObjectId],
        ref:'User',
        default: [],
        required: [true,"replies is required"]
    },  
    population:{
        type: populatetionSchema,
        required: [true,"population is required"]
    }    
}); 
const geenEyeModle = mongoose.model('GreenEye', greenEyeSchema);

module.exports = geenEyeModle;