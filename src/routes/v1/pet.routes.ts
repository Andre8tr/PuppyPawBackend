import { Router } from 'express'
import { getPets, getPetById } from '../../controllers/pet.controller'

const router = Router()

//GET de todas las mascotas
router.get('/', getPets)

//GET de mascota por ID
router.get('/:id', getPetById)

export default router
