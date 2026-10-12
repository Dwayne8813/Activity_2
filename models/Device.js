import { DataTypes } from "sequelize";
import { sequelize } from "./db.js";

export const Device = sequelize.define("Device", {
  name: { type: DataTypes.STRING, allowNull: false },
  deviceType: { type: DataTypes.STRING, allowNull: false },
  brand: { type: DataTypes.STRING, allowNull: true },
  model: { type: DataTypes.STRING, allowNull: true },
  status: { type: DataTypes.STRING, allowNull: true },
});

export { sequelize };
