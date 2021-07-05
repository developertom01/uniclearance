const {User} = require("../models")

const create= async(req,res)=>{
    const {fullname,username,password,role} = req.body

try {
   user = await  User.create({
        fullname,
        password,
        role,
        username
    })
    res.status(201).json({user})
    } catch (error) {
        res.status(500).json(error)
    }

}

//Get all users
const index= async(req,res)=>{
try {
   users = await User.findAll({include:'student'})
    res.json({users})
    } catch (error) {
        res.status(500).json("An error occurred")
        console.log(error);
    }

}



module.exports = {
    create,
    index
}