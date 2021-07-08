const validator = require("../../utils/validator")

const departmentIssuesValidator = (req,res,next)=>{
    const rules = {
        detail:"required|string"
    }
    validator(req.body,)
}

module.exports = departmentIssuesValidator