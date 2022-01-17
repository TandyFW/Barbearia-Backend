import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { StatusCodes } from 'http-status-codes'

const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.body
    const token = jwt.sign({ email }, process.env.JWT_SECRET as string, { expiresIn: 86240 })
    req.body.token = token
    next()
  } catch (err) {
    return res.status(StatusCodes.SERVICE_UNAVAILABLE).json({message: 'Sistema fora do ar.'})
  }
}

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers['access-token']
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' })
    
    jwt.verify(token as string, process.env.SECRET as string, (err, decoded) => {
      if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' })
      
      // se tudo estiver ok, salva no request para uso posterior
      req.body.userId = decoded
      next()
    })
  }
  catch (err) {
    return err
  }
}

export default {
  auth,
  verifyToken
}
