module.exports = (req,res,next)=>{
    if(req.body.username)
    return res.status(401).json({
        status:"error",
        message:"User with the same username exist"
    })
    else return next()
}