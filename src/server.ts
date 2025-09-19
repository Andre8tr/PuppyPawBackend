import app from './app'
import connectDB from './config/db'

const PORT = process.env.PORT || 3000

//Connection to Mongo from './config/db.ts'
connectDB()

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
