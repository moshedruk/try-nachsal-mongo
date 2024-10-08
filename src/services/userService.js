const bcrypt = require('bcrypt')
const { UserModle } = require('../models/userModel')
const createUser = async (user)=>{
    try{
        console.log(user + ' created');
       const {user_name,password,role,area,units} = user
       const hashPassword = await bcrypt.hash(password,10)
       const dbUser = new UserModle({
        user_name,
        password: hashPassword,
        role,
        area,
        units
       });
       await dbUser.save()
    }catch(err){
        console.log(err);
       throw err
    }
}
module.exports = {
    createUser
};