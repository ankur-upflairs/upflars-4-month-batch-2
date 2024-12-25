let User = require('../models/userModel');
let jwt = require('jsonwebtoken');
let bcrypt = require('bcrypt');
exports.signup=async (req,res)=>{
    let {name,email,password} = req.body;
    let hashPassword = await bcrypt.hash(password,10);
    try {
        let user= new User({name,email,password:hashPassword});
        const newUser = await user.save();
        res.status(201).json({
            status:'success',
            user:newUser
        })
    } catch (error) {
        res.json({
            status:'failed',
            message:error.message
        })
    }
}


exports.login=async (req,res)=>{
    let {email,password} = req.body;
    try {
        let user = await User.findOne({email:email});
        if(!user){
            res.json({
                status:'failed',
                message:'User not found'
            })            
        }else{
            let isMatch = await bcrypt.compare(password,user.password);
            if(isMatch){
                let token = jwt.sign({email:email},process.env.JWT_SECRET,{expiresIn:'24h'});
                res.json({
                    status:'success',
                    message:'Login successful',
                    token:token,
                    role:user.role
                })
        }else{
            res.json({
                status:'failed',
                message:'Incorrect password'
            })
        }
    }
        
    } catch (error) {
       res.json({
           status:'failed',
           message:error.message
       }) 
    }
}