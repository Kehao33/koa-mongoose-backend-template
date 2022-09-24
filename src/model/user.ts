import { ModelConfig } from './../config/index';
import mongoose, { Model, Schema } from 'mongoose';

type User = {
  name: string;
  age: number;
};

const UserSchema = new Schema<User, Model<User>>({
  name: String,
  age: Number,
});

export const UserModel = mongoose.model<User>(ModelConfig.User, UserSchema);
// TODO：remove it
const v = new UserModel({
  name: 'jakequc' + Math.floor(Math.random() * 1000),
  age: Math.floor(Math.random() * 1000) + 1,
});

v.save();
