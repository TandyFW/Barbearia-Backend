import { model, Schema } from 'mongoose'
import User from '../interfaces/user'
import userSchema from '../schemas/user'
import connection from './connect'
import 'dotenv/config'

const UserModel = model<User>('User', userSchema)

const create = async (name:string, email:string, password:string):Promise<boolean> => {
  try {
    await connection;
    const doc = new UserModel({
      name,
      email,
      password
    });
    await doc.save();
    return true
  } catch (err) {
    return false
  }
}

const findUserByEmail = async (email: string):Promise<User | any> => {
  try {
    await connection;
    const UserSchema = new Schema({
      name: String,
      email: { type: String, required: true },
      password: String,
    })
    const userModel = model('users', UserSchema)
    const user = userModel.findOne({ email })
    console.log(user)
    return user
  } catch (err) {
    return err
  }
}

export {
  create,
  findUserByEmail
}
