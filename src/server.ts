import express from 'express'
import http from 'http'
import 'dotenv/config'
import routers from './routes'

const app = express()
app.use(express.json())
app.use(routers)

const server = http.createServer(app)
server.listen(process.env.PORT, () => console.log('Servidor rodando!'))
