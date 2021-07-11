'use strict';

const config = require("../config");

module.exports = {
  up: async (queryInterface, DataTypes) => {
    queryInterface.addColumn('departmentAdmins','type',{
      type: DataTypes.STRING,
      allowNull:false,
      defaultValue:config.subAdminType.admin
    })
  },

  down: async (queryInterface, DataTypes) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
