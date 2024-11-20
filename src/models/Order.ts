import { DataTypes, Model } from 'sequelize';
import sequelize from '../utils/db';

export class Order extends Model {
  public id!: number;
  public buyerId!: number;
  public sellerId!: number;
  public item!: string;
  public quantity!: number;
  public status!: 'pending' | 'assigned' | 'completed';
}

Order.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  buyerId: { type: DataTypes.INTEGER, allowNull: false },
  sellerId: { type: DataTypes.INTEGER, allowNull: false },
  item: { type: DataTypes.STRING, allowNull: false },
  quantity: { type: DataTypes.INTEGER, allowNull: false },
  status: { type: DataTypes.ENUM('pending', 'assigned', 'completed'), defaultValue: 'pending' },
}, { sequelize, modelName: 'order' });
