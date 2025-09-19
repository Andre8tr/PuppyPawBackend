import { Request, Response } from 'express'
import { Pet } from '../models/pet.model'
import { log } from 'node:console'

/*
  GET /api/v1/pets
  Obtiene el listado de todas las mascotas
*/
const getPets = async (req: Request, res: Response) => {
  try {
    const pets = await Pet.find()
    if (!pets) {
      console.log('No se encontraron las mascotas')
      res.send(404).json({ msg: 'No se encontraron mascotas' })
    }
    res.status(200).json(pets)
  } catch (error) {
    res.status(500).json({ error })
  }
}

/*
  GET /api/v1/pets/:id
  Obtiene una mascota en especifico por su id
*/

const getPetById = async (req: Request, res: Response) => {
  try {
    const idPet = req.params.id
    console.log(idPet)
    const petById = await Pet.findById(idPet)
    if (!petById) res.status(404).json({ msg: 'No se encontro la mascota' })
    res.status(200).json(petById)
  } catch (error) {
    res.status(500).json(error)
  }
}

/*
  POST /api/v1/pets
  Crear una nueva mascota
*/

const createNewPet = async (req: Request, res: Response) => {
  try {
    const newPet = new Pet(req.body)
    const savedPet = await newPet.save()
    res.status(201).json({ savedPet })
  } catch (error) {
    res.status(400).json(error)
  }
}

/* 
  PUT /api/v1/pet
  Se actualiza la mascota
*/
const updatePet = async (req: Request, res: Response) => {
  try {
    const petId = req.params.id
    const updatedPet = await Pet.findByIdAndUpdate(petId, req.body, {
      new: true,
      runValidators: true,
    })
    if (!updatedPet) {
      return res.status(404).json({ message: 'Mascota no encontrada' })
    }
    res.status(200).json(updatedPet)
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar la mascota', error })
  }
}

export { getPets, getPetById, createNewPet, updatePet }
