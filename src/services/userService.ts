import { UserModel } from './../model/user';
import { Service } from 'typedi';

@Service()
export class UserService {
  create(info: Record<string, any>) {
    return UserModel.create(info);
  }

  async findAll() {
    return UserModel.find();
  }
}
