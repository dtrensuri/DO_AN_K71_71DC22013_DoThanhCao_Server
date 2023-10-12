'use strict';
const { format } = require('date-fns');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {


    const now = format(new Date(), 'd-MM-yyyy');

    const defaultShifts = [
      {
        shift_name: `Ca sáng ${now}`,
        start_time: '08:30:00',
        end_time: '12:00:00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        shift_name: `Ca chiều ${now}`,
        start_time: '13:00:00',
        end_time: '17:30:00',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('shifts', defaultShifts, {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('shifts', null, {});
  }
};
