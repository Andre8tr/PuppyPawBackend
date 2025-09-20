import { Schema, model, Document } from 'mongoose'

export interface IPet extends Document {
  name: string
  description: string
  age: string
  sterilized: boolean
  location: string
  gender: 'Macho' | 'Hembra'
  inactive: boolean
}

const PetSchema = new Schema<IPet>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    age: { type: String, required: true },
    sterilized: { type: Boolean, required: false },
    location: { type: String, required: false },
    gender: { type: String, required: false },
    inactive: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
)

export const Pet = model<IPet>('Pet', PetSchema, 'puppys')
