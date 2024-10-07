const {login:loginfromService} = require('../services/authService')

const login = async(req,res)=>{

    try{
       const token = await loginfromService(req.body)
       res.cookie("token", token)
       res.status(200).json({msg:`User ${req.body.user_name}logged in successfully`});
    }catch(err){
       res.status(400).json(err)
    }
}
const logout = async(req,res)=>{

    try{
       
    }catch(err){
       
    }
}

module.exports = {
    login,
    logout,
 };