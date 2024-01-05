import { Model, DataTypes } from "sequelize";
import sequelize from "../sequelize.js";

class Company extends Model {}

Company.init(
  {
    CompanyId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    CompanyTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    CompanyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    TelNo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    SMSNo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    VATNo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    EmailAddress: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    BillingContactPerson: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    BillContactAddress: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    DateRegistered: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    RegisteredBy: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    UpdatedBy: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: { type: DataTypes.DATE, field: "DateRegistered" },
    updatedAt: { type: DataTypes.DATE, field: "DateUpdated" },
  },
  {
    sequelize,
    modelName: "Company",
    timestamps: true,
  }
);

export default Company;
