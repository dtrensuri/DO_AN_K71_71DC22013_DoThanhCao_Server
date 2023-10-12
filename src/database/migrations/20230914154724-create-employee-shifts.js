'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('employee_shifts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      employee_id: {
        type: Sequelize.INTEGER
      },
      log: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      shift_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      time_in: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      time_out: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      shift_names: {
        allowNull: true,
        type: Sequelize.STRING,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('employee_shifts');
  }
};