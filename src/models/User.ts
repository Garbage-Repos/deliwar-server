import { DataTypes, Model } from 'sequelize';
import sequelize from '../utils/db';

export class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public type!: 'driver' | 'seller' | 'buyer';
  public password!: string;
}

User.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  type: { type: DataTypes.ENUM('driver', 'seller', 'buyer'), allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
}, { sequelize, modelName: 'user' });
