'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('table_jabatan', [
      { nama_jabatan: 'Fullstack Developer', id_department: 4 },
      { nama_jabatan: 'Backend Developer', id_department: 4 },
      { nama_jabatan: 'Frontend Developer', id_department: 4 },
      { nama_jabatan: 'HRD', id_department: 2 },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
