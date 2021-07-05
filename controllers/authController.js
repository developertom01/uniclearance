const Jwt  = require("jsonwebtoken")
const config = require("../config")


const login = (req,res)=>{
const token = Jwt.sign({
    exp: Math.floor(Date.now() / 1000) + 1000,
    sub:req.user.uid
},config.appSecrete)
res.json({
    status:"ok",
    token,
    data:req.user
})
} 

module.exports = {login}