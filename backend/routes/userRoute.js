import express from 'express'
import { submitForm,getForms } from '../controllers/userController.js'


const userRouter = express.Router()
userRouter.post('/submit-form',submitForm)
userRouter.get('/all-forms', getForms)
export default userRouter



