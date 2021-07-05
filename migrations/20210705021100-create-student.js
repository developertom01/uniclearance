'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
    },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Students');
  }
};