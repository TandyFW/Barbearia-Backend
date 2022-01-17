import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { verifyUser } from '../service/acess'

import { createUser } from './user'

const logIn = async (req: Request, res: Response) => {
  const verifiedUser = await verifyUser(req.body.email, req.body.password)
  if (verifiedUser) return res.status(StatusCodes.OK).json(verifiedUser)
  return res.status(StatusCodes.UNAUTHORIZED).json('Email ou Senha inválidos')
}

export default {
  logIn,
  createUser
}
