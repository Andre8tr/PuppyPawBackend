import { Router } from 'express'
import {
  getPets,
  getPetById,
  createNewPet,
  updatePet,
  inactivePet,
} from '../../controllers/pet.controller'

const router = Router()

//GET de todas las mascotas
router.get('/', getPets)

//GET de mascota por ID
router.get('/:id', getPetById)

//POST create new pet
router.post('/', createNewPet)

//Update a existing pet
router.put('/', updatePet)

//PATCH to inactive a pet
router.patch('/', inactivePet)

export default router
