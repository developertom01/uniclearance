const {Department} = require("../models")

const create=async (req,res)=>{
    const {name} = req.body
    try {
        const department = await Department.create({name})
        res.status(201).json({status:"success",data:department})
    } catch (error) {
        res.status(500).json({message:"Unexpected error occued"})
        console.log(error);
    }  
}



module.exports = {create}