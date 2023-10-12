'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TimeSheets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TimeSheets.belongsTo(models.Employee, { foreignKey: 'employee_id', as: 'employee' });
    }
  }
  TimeSheets.init({
    employee_id: DataTypes.INTEGER,
    time_in: DataTypes.DATE,
    time_out: DataTypes.DATE,
    log: DataTypes.STRING,
    time_sheet_status: DataTypes.INTEGER,
  }, {
    sequelize,
    tableName: 'time_sheets',
    modelName: 'TimeSheet',
  });
  return TimeSheets;
};