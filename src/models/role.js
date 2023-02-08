'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Role.belongsTo(models.Department, { foreignKey: 'id_department', onDelete: 'cascade' })
      Role.hasMany(models.Employee, { foreignKey: 'id_jabatan', onDelete: 'cascade' })
    }
  }
  Role.init({
    id_department: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Department ID cannot be empty'
        }
      },
      references: {
        model: {
          tableName: 'table_department',
        },
        key: 'id'
      },
    },
    nama_jabatan: {
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Name cannot be empty'
        },
        notEmpty: {
          msg: "Name cannot be empty"
        }
      },
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    tableName: 'table_jabatan',
    modelName: 'Role',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  });
  return Role;
};