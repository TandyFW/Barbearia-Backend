import express from 'express'
import controller from '../controllers'
import auth from '../middlewares/auth'

const routers = express.Router()

routers.post('/login', auth.auth, controller.logIn)
routers.post('/newUser', controller.createUser)

export default routers
