'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('table_jabatan', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      departmentId: {
        type: Sequelize.INTEGER,
        field:'id_department',
        onDelete: 'CASCADE',
        references: {
          model: {
            tableName: 'table_department',
          },
          key: 'id'
        },
      },
      name: {
        type: Sequelize.STRING,
        field:'nama_jabatan'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('table_jabatan');
  }
};