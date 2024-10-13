const {createUser} = require('../services/userService');

// Function for creating a new user in the database
const register = async(req,res)=>{
    try{
       const newUser =  await createUser(req.body)
       console.log(newUser.role);
       res.status(201).json({user: newUser,msg:'User created successfully'});
       
    }catch(err){
        res.status(400).json({msg:err.message});
       
    }
}
const getProfile = async(req,res)=>{

    try{
       
    }catch(err){
       
    }
}
const setSetting = async(req,res)=>{

    try{
       
    }catch(err){
       
    }
}
module.exports = {
    register,
    getProfile,
    setSetting,
    
 };
