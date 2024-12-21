exports.auth=async (req,res,next)=>{
    try {
        let token  = req.headers.authorization.split(' ')[1];
        if(token){
            let decoded = jwt.verify(token,process.env.JWT_SECRET);
            req.user = decoded;
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