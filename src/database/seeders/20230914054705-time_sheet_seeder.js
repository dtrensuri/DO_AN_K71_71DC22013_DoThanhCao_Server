const db = require('../../models/index');
const _ = require('lodash');
const Chance = require('chance');
const { format } = require('date-fns');

'use strict';

const nchane = new Chance();

const createTimeSeed = async (user, dayAgo) => {
  const listTimeSheets = [];
  for (let day = 0; day <= dayAgo; day++) {
    const hourIn = nchane.integer({ max: 8, min: 6 });
    const minuteIn = nchane.integer({ max: 60, min: 0 });
    const hourOut = nchane.integer({ max: 20, min: 17 });
    const minuteOut = nchane.integer({ max: 60, min: 0 });

    const time_in = new Date();

    time_in.setDate(time_in.getDate() - day);
    time_in.setHours(hourIn, minuteIn, 0, 0);

    const time_out = new Date();
    time_out.setDate(time_out.getDate() - day);
    time_out.setHours(hourOut, minuteOut, 0, 0);


    listTimeSheets.push({
      employee_id: user.id,
      time_in: time_in,
      time_out: time_out,
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }
  return listTimeSheets;
};

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      const timeSheets = [];
      const users = await db.Employee.findAll();

      for (const user of users) {
        const time = await createTimeSeed(user, [120]);
        timeSheets.push(...time);
      }

      await queryInterface.bulkInsert('time_sheets', timeSheets, {});
    } catch (error) {
      console.error('Error seeding check_in_out:', error);
    }
  },

  async down(queryInterface, Sequelize) {
    try {
      await queryInterface.bulkDelete('time_sheets', null, {});
    } catch (error) {
      console.error('Error reverting check_in_out seed:', error);
    }
  }
};
