import dotEnv from 'dotenv';
import mongoose, { ConnectOptions } from 'mongoose';

dotEnv.config();

export const DataBaseManager = {
  PORT: 27017,
  getUrl(): string {
    const password = process.env.MONGODB_ROOT_PASSWORD;
    const username = process.env.MONGODB_ROOT_USERNAME;
    const auth = `${username}:${password}@`;
    const host = process.env.MONGO_MONGODB_SERVICE_HOST || 'localhost';
    const port = process.env.MONGO_MONGODB_SERVICE_PORT_MONGODB || this.PORT;

    return (
      process.env.MONGO_MONGODB_URL ||
      `mongodb://${password ? auth : ''}${host}:${port}`
    );
  },
  getDbName(): string {
    return process.env.MONGO_DATABASE_NAME || 'yiyang-xu-db';
  },
  async connectDb(options?: ConnectOptions) {
    console.log(`connnect db Url is>>> : ${this.getUrl()}/${this.getDbName()}`);
    mongoose
      .connect(`${this.getUrl()}/${this.getDbName()}`, options)
      .catch((err) => console.log('connect db error:', err));
  },
};
