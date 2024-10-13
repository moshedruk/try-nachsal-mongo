const {login:loginfromService} = require('../services/authService')

const login = async(req,res)=>{

    try{
       const {token,user} = await loginfromService(req.body)
    //    res.cookie("token", token)
       console.log(user.role)
       res.status(200).json({token:token,user:user.role});
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