const { createNewPool } = require("../services/greenEyeService");

const createPool = async(req,res) => {
    try{
        await createNewPool(req.user,req.body)
        res.status(201).json({msg:'Pool created successfully'});
        
     }catch(err){
         res.status(400).json({msg:err.message});
        
     }
}
const getNotifiction = async(req,res)=>{

    try{
       
    }catch(err){
       
    }
}
const getPoolById = async(req,res)=>{

    try{
       
    }catch(err){
       
    }
}
const reply = async(req,res)=>{

    try{
       
    }catch(err){
       
    }
}
const deletePool = async(req,res)=>{

    try{
       
    }catch(err){
       
    }
}

module.exports = {
    createPool,
    getNotifiction,
    getPoolById,
    reply,
    deletePool,
 };