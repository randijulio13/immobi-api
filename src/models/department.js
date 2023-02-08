'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Department.hasMany(models.Role, {
        foreignKey: 'id_department',
        onDelete: 'cascade'
      })
    }
  }
  Department.init({
    nama_department: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Name cannot be empty'
        },
      }
    },
  }, {
    sequelize,
    tableName: 'table_department',
    modelName: 'Department',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  });
  return Department;
};