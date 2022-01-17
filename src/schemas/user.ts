import { Schema } from 'mongoose'
import User from '../interfaces/user'

const userSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export default userSchema
