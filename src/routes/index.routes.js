import { Router } from "express"
import recipeRouter from "./receitas.routes.js"

const router = Router()

router.use(recipeRouter)

export default router