import combineRouters from 'koa-combine-routers';
import { userRouter } from './userRouter';

export default combineRouters(userRouter);
