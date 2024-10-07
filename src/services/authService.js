const { UserModle } = require("../models/userModel")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


const login = async(user)=> {
    try {
        const dbUser = await UserModle.findOne({user_name: user.user_name})
        if (!dbUser) throw new Error('User not found');
        if(!await bcrypt.compare(user.password, dbUser.password)){
            throw new Error('Invalid password');
        }
        const tocken = await jwt.sign({user_name: dbUser.user_name, role: dbUser.role}
            ,process.env.SECRET_KEY,
            { expiresIn: '3m' }
        );
        return tocken;

    } catch (err) {
        console.log(err);
        throw err;
        
    }
}
module.exports = {login};
