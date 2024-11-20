import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DB_URI as string, {
  dialect: 'postgres',
  logging: false,
});

export default sequelize;
