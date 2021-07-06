const {Department} = require("../models")


const index = async(req,res)=>{
    try {
        const departments = await Department.findAll({attributes:['uuid','name']})
        res.json({departments})
    } catch (error) {
        res.status(500).json({message:"Unexpected error occued"})
        console.log(error);
    }  
}

const indexWithStudents = async(req,res)=>{
    try {
        const departments = await Department.findAll({attributes:['uuid','name'],include:"students"})
        res.json({departments})
    } catch (error) {
        res.status(500).json({message:"Unexpected error occued"})
        console.log(error);
    }  
}

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



module.exports = {create,index,indexWithStudents}