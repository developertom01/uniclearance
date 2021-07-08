const config = require("../../config")

module.exports = (req,res,next)=>{
    if (req.user.dataValues.role !== config.userTypes.superadmin) 
    return res
    .status(403).json({
        status:"error",
        message:"Sorry you do not have permission. You are not a super admin"
    })
    return next()

}