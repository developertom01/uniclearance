'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      this.belongsTo(User,{as:'user'})
    }
    toJSON(){
      return {...this.get(),id:undefined}
    }
  };
  Student.init({
    studentId: {
      type:DataTypes.STRING,
      allowNull:false
    },
    uuid:{
      type:DataTypes.UUID,
      allowNull:false,
      defaultValue:DataTypes.UUIDV4
    },
    program:{
      type:DataTypes.STRING,
      allowNull:false
    },
    userId:{
      type:DataTypes.STRING,
      allowNull:false
    },
    program:{
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    tableName:'students',
    modelName: 'Student',
  });
  return Student;
};