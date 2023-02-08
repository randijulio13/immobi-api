'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('table_karyawan', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
      },
      roleId: {
        type: Sequelize.INTEGER,
        field:'id_jabatan',
        references: {
          model: {
            tableName: 'table_jabatan',
          },
          key: 'id'
        },
      },
      age: {
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.STRING
      },
      birthDate: {
        field:'tanggal_lahir',
        type: Sequelize.DATE
      },
      address: {
        field:'alamat',
        type: Sequelize.TEXT
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('table_karyawan');
  }
};