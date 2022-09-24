import 'reflect-metadata';
import { DataBaseManager } from './helper';
import bodyParser from 'koa-bodyparser';
import Koa from 'koa';
import dotEnv from 'dotenv';
import cors from '@koa/cors';
import router from './routes';
import { ServiceConfig } from './config';

dotEnv.config();

const runApp = async () => {
  await DataBaseManager.connectDb()
    .then(() => console.info('connect db success!'))
    .catch((error) => {
      console.log(`connect error: ${error}`);
    });

  const app = new Koa();

  app.use(cors()).use(bodyParser()).use(router());

  app.listen(ServiceConfig.PORT, () => {
    console.info(`koa is running on http://localhost:${ServiceConfig.PORT}`);
  });
};

runApp();
