const config = require("../config")
const {LibraryAdmin,User} = require("../models")


const index=(req,res)=>{
    try {
        const admins = LibraryAdmin.findAll({include:['user']})
        res.json(admins)
    } catch (error) {
        res.status(500).json({message:"Unexpected error occued"})
        console.log(error); 
    }
}

const create= async (req,res)=>{
    const {username,password,fullname,type} = req.body
    try {
        const user = await User.create({username,password,fullname,role:config.userTypes.libraryAdmin})
        let admin = await LibraryAdmin.create({
            userId:user.id,
            type
        })
        res.status(201).json({
            status:"success",
            body:admin
        })
    } catch (error) {
        res.status(500).json({message:"Unexpected error occued"})
        console.log(error); 
    }
}


const deleteLibraryAdmin=async(req,res)=>{
    const {adminId} = req.params
    try {
        const admin = await LibraryAdmin.findOne({where:{uuid:adminId}})
        if (!admin) return res.status(404).json({message:"Library admin does not exist"})
        await LibraryAdmin.destroy({where:{id:admin.id}})
        res.json({status:"success",message:"You have successfully deleted library admin"})
    } catch (error) {
        res.status(500).json({message:"Unexpected error occued"})
        console.log(error); 
    }

}

module.exports = {index,create,deleteLibraryAdmin}