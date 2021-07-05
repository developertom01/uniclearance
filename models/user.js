'use strict';
const { UUIDV4 } = require('sequelize');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Student}) {
      this.hasOne(Student,{as:'student'})
    }
    toJSON(){
      return {...this.get(),id:undefined}
    }

  };
  User.init({
    uuid:{
      type:DataTypes.UUID,
      allowNull:false,
      defaultValue:UUIDV4
    },
    fullname: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:true,
        notEmpty:true,
      }
    },
    username: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:true,
        notEmpty:true
      }    
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:true,
        notEmpty:true,
      }
    },
    role: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:true,
        notEmpty:true,
      }
    }
  }, {
    sequelize,
    tableName:'users',
    modelName: 'User',
  });
  return User;
};