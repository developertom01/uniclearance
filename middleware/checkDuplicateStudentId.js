const Student = require("../models")

module.exports = async(req,res,next)=>{
    const student = await Student.findOne({where:{studentId:req.body.studentId}})
    if (student) return req.status(401).json({status:'error',message:'Student with this student id already exists'})
    next()
}