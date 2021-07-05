const {User} = require('../models')
const bcrypt = require('bcrypt');
const config = require('../config');

module.exports = {
    up:async()=>{
       const password =  bcrypt.hashSync('superadmin',10)
        User.create({
            fullname:'Admin',
            password,
            username:'superadmin',
            role: config.userTypes.superadmin
        })
    }
}