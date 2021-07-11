const {DepartmentAdmin,Department,User} = require("../models")
const config = require("../config")
//Get all department admins
const index= async(req,res)=>{
    try {
        const admins = await DepartmentAdmin.findAll({include:['user','department']})
        return res.json(admins)
    } catch (error) {
        res.status(500).json({message:"Unexpected error occued"})
        console.log(error);
    }

}

// Get list of department Admins

const getDepartmentAdmins=(req,res)=>{
    const department =await Department.findOne({uuid:req.params.departmentId})
    if (!department) return res.status(404).json({message:"Department does not exist"})
    try {
        const admins = await DepartmentAdmin.findAll({where:{departmentId:department.id},include:['user','department']})
        return res.json(admins)
    } catch (error) {
        res.status(500).json({message:"Unexpected error occued"})
        console.log(error);
    }
}


// Create department admin

const create= async(req,res)=>{
    try {
        const department =await Department.findOne({uuid:req.params.departmentId})
        if (!department) return res.status(404).json({message:"Department does not exist"})
        const {username,fullname,password} = req.body
        const user = await User.create({
            username,
            fullname,
            password,
            role = config.userTypes.departmentAdmin
        })
        let departmentAdmin = DepartmentAdmin.create({
            userId:user.id,
            departmentId:department.id
        })
        departmentAdmin = DepartmentAdmin.findOne({where:{id:department.id},include:['user','department']})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Unexpected error occued"})
    }

}

// Delete department admin

const deleteDepartentAdmin = async(req,res)=>{
    try {
        let admin = await DepartmentAdmin.findOne({uuid:req.params.adminId})
        if (!admin) return res.status(404).json({message:"Department admin does not exist"})
        await User.destroy({where:{id:admin.userId}})
        res.json({status:"success",message:"You have succefully deleted lab admin"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Unexpected error occued"})
    }
}


module.exports = {
    index,create,getDepartmentAdmins,deleteDepartentAdmin
}