'use strict';
const {
  Model
} = require('sequelize');
const moment = require('moment')
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Employee.belongsTo(models.Role, {
        foreignKey: 'id_jabatan'
      })
    }
  }
  Employee.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Name cannot be empty'
        }
      }
    },
    id_jabatan: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'table_jabatan',
        },
        key: 'id'
      },
      allowNull: false,
      validate: {
        notNull: { msg: 'RoleID cannot be empty' },
        isInt: true
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: "Age cannot be empty" },
        isNumeric: true
      }
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Gender cannot be empty' },
        len: [1, 1]
      }
    },
    tanggal_lahir: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: { msg: 'Birth date cannot be empty' },
        isDate: true
      },
      get() {
        let value = this.getDataValue('tanggal_lahir')
        return moment(value).format('YYYY-MM-DD')
      }
    },
    alamat: {
      allowNull: false,
      validate: {
        notNull: { msg: 'Address cannot be empty' }
      },
      type: DataTypes.TEXT,

    },
  }, {
    sequelize,
    tableName: 'table_karyawan',
    modelName: 'Employee',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  });
  return Employee;
};