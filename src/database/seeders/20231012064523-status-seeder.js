'use strict';

/** @type {import('sequelize').QueryInterface} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     */
    const listStatus = [
      { id: 1, name: 'Thành công', description: '', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: 'Thất bại', description: '', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, name: 'Đang chờ', description: '', createdAt: new Date(), updatedAt: new Date() },
      { id: 4, name: 'Đã duyệt', description: '', createdAt: new Date(), updatedAt: new Date() },
      { id: 5, name: 'Từ chối', description: '', createdAt: new Date(), updatedAt: new Date() },
      { id: 6, name: 'Đi muộn', description: '', createdAt: new Date(), updatedAt: new Date() },
      { id: 7, name: 'Về sớm', description: '', createdAt: new Date(), updatedAt: new Date() },
      { id: 8, name: 'Tăng ca', description: '', createdAt: new Date(), updatedAt: new Date() },
      { id: 9, name: 'Cuối tuần', description: '', createdAt: new Date(), updatedAt: new Date() },
      { id: 10, name: 'Ngày lễ', description: '', createdAt: new Date(), updatedAt: new Date() },
      { id: 11, name: 'Xin nghỉ', description: '', createdAt: new Date(), updatedAt: new Date() },
      { id: 12, name: 'Bỏ qua', description: '', createdAt: new Date(), updatedAt: new Date() },
    ];


    await queryInterface.bulkInsert('statuses', listStatus, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     */
    await queryInterface.bulkDelete('statuses', null, {});
  }
};
