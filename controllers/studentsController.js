const {Department,Student,User} = require("../models")
const config = require("../config")
const createUser = async (req,res)=>{
        const {username,fullname,password,studentId,departmentId} = req.body
        try {
        const department =await Department.findOne({where:{uuid:departmentId}})
        if (!department) return res.status(500).json({
            status:"error",
            message:"Department does not exist"
        })
        const user = await User.create({
            username,
            password,
            fullname,
            role : config.userTypes.student
        })
        const student = await Student.create({
            userId:user.id,
            studentId
        })
        res.status(201).json({
            status:"success",
            data :{
                ...student,
                user:{
                    ...user
                }
            }
        })
    } catch (error) {

        res.status(500).json({
            status:"error",
            message:"Unexpected error occured"

        })
        
    }
}

module.exports = {
    createUser
}