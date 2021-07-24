const {User} = require('../models')
const bcrypt = require('bcrypt');
const config = require('../config');

module.exports = {
    up:async()=>{
        User.create({
            fullname:'Admin',
            password:'superadmin',
            username:'superadmin',
            role: config.userTypes.superadmin
        })
    },
    down: async()=>{
        await User.destroy({where:{username:'superadmin'}})
        console.log("User migrated");
    }
}