import { findUserByEmail } from "../model/user"

export const verifyUser = async (email: string, password: string) => {
  const user = await findUserByEmail(email)
  if (user.password == password) return user
  return false
}

