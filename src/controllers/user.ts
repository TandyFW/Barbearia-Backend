import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { create } from '../model/user'

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body
  const result = await create(name, email, password)
  if (result) return res.status(StatusCodes.OK).json('Usuário criado com sucesso!')
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Ocorreu um erro')
}
