const { process_params } = require("express/lib/router");
const jwt = require("jsonwebtoken");

// Middleware for validating if user is a commander
const onlyCommaders = async (req,res,next) => {
    try{
        const token = req.cookie.token  
        const userData =  jwt.verify(token,process.env.SECRET_KEY);
        if(userData.role!=="commander"){
            return res.status(403).json({message: 'You are not a commander'})
        }
        req.user = userData 
        next();
    }
    catch(err){   
        console.log(err);   
        res.status(401).json({message: 'Token is not valid'})        
    }
};



// Middleware for validating if user is a solders and if they are commander

const onlySellersAndCommanders = async (req,res,next) => {
    try{   
        const token = req.cookie.token  
        const userData =  jwt.verify(token,process.env.SECRET_KEY);
        req.user = userData 
        next();
    }
    catch(err){  
        console.log(err);   
        res.status(401).json({message: 'Token is not valid'})   
    }
};

module.exports ={
    onlyCommaders,
    onlySellersAndCommanders,    
 };
