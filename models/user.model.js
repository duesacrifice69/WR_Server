import { Model, DataTypes } from "sequelize";
import sequelize from "../sequelize.js";
import { actStatus } from "../enum/Constants.js";
class User extends Model {}

User.init(
  {
    UserId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    UserName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DisplayName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    EmployeeNo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    LocationId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    UserRoleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    RegisteredBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    UserStatus: {
      type: DataTypes.ENUM(actStatus.ACTIVE.code, actStatus.INACTIVE.code),
      allowNull: false,
    },
    createdAt: true,
    updatedAt: true,
  },
  {
    sequelize,
    modelName: "User",
  }
);

export default User;
