'use strict';
const db = require('../../models/index');
const { format } = require('date-fns');
const _ = require('lodash');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const timeSheet = await db.TimeSheet.findAll();
    let shift = [];

    _.forEach(timeSheet, (times) => {
      const date = new Date(times.time_in);
      shift.push({
        employee_id: times.employee_id,
        shift_name: `Ca sáng ${format(new Date(date), 'dd/MM/yyyy')}`,
        time_in: format(new Date(date).setTime(8, 30, 0, 0), 'yyyy-MM-dd HH:mm:ss'),
        time_out: format(new Date(date).setTime(12, 0, 0, 0), 'yyyy-MM-dd HH:mm:ss'),
        createdAt: new Date(),
        updatedAt: new Date()
      });

      shift.push({
        employee_id: times.employee_id,
        shift_name: `Ca chiều ${format(new Date(date), 'dd/MM/yyyy')}`,
        time_in: format(new Date(date).setTime(13, 0, 0, 0), 'yyyy-MM-dd HH:mm:ss'),
        time_out: format(new Date(date).setTime(17, 30, 0, 0), 'yyyy-MM-dd HH:mm:ss'),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    )


    await queryInterface.bulkInsert('employee_shifts', shift, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('employee_shifts', null, {});
  }
};
