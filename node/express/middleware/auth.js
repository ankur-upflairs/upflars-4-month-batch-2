const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
exports.auth=async (req,res,next)=>{
    try {
        let token  = req.headers.authorization.split(' ')[1];
        if(token){
            let decoded = jwt.verify(token,process.env.JWT_SECRET);
            //get the user from the database and attach it to the request object
            let user = await User.findOne({email:decoded.email});
            // console.log(user)
            req.user = user;
            next();
        }
        else{
            res.json({
                status:'failed',
                message:'Token not found'
            })
        }
    } catch (error) {
        res.json({
            status:'failed',
            message:error.message
        })
    }
}


exports.authentice = (...roles)=>{
    return (req,res,next)=>{
        if(roles.includes(req.user.role)){
            next();
        }
        else{
            res.json({
                status:'failed',
                message:'You are not authorized to access this route'
            })
        }
    }
}