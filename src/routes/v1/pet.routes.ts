import { Router } from 'express'
import {
  getPets,
  getPetById,
  createNewPet,
  updatePet,
} from '../../controllers/pet.controller'

const router = Router()

//GET de todas las mascotas
router.get('/', getPets)

//GET de mascota por ID
router.get('/:id', getPetById)

//POST create new pet
router.post('/', createNewPet)

//Update a existing pet
router.get('/', updatePet)
export default router
