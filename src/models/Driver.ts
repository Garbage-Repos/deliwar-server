import { DataTypes, Model } from 'sequelize';
import sequelize from '../utils/db';

export class Driver extends Model {
  public id!: number;
  public userId!: number;
  public capacity!: number;
  public currentLocation!: { lat: number; lng: number };
  public status!: 'available' | 'busy';
}

Driver.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  capacity: { type: DataTypes.INTEGER, allowNull: false },
  currentLocation: { type: DataTypes.JSONB, allowNull: true },
  status: { type: DataTypes.ENUM('available', 'busy'), defaultValue: 'available' },
}, { sequelize, modelName: 'driver' });
