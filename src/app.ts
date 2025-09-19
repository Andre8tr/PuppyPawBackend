import experss from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import petRoutes from './routes/v1/pet.routes'

//Cargar Dot Env
dotenv.config()

const app = experss()

//Middlewares
app.use(cors())
app.use(experss.json())

//Ruta de healt
app.get('/health', (req, res) => {
  res.json({ message: 'Working fine' })
})

app.use('/api/v1/pets', petRoutes)

export default app
