
const mongoose = require('mongoose')   
 const userSchema = mongoose.Schema({
    user_name: {type: String, required: [true,"user name is required"] ,minLength:[5,"wey too short"]},
    
    password: {type: String, required:[true,"password is required"]},
    role: {type: String, enum: ['commander', 'solders'] ,required:[true,"role is required"]},
    area: {type: String, enum:["center",  "north", "south", "east"] ,required:[true,"area is required"]},
    units:{type: [Number], required:[true,"units is required"]},    
}); 
const UserModle = mongoose.model('User', userSchema)

module.exports ={
    UserModle    
};
