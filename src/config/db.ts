import mongoose from 'mongoose'

const connectDB = async (): Promise<void> => {
  //Se indica con TS que espera
  try {
    const mongoUri = process.env.MONGO_URI as string
    if (!mongoUri) console.log('No uri found')

    const connected = await mongoose.connect(mongoUri)
    console.log('Connected ✅')
  } catch (error) {
    console.log(`Error : ${error}`)
    process.exit(1)
  }
}

export default connectDB
