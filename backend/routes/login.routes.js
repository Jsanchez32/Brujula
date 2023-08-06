import { Router } from "express";
import  {login,verifyLogin} from "../controllers/login.controller.js";
import {check} from "express-validator";
import {validateDocuments} from "../middlewares/validate.documents.js";
import {validateJWT} from "../middlewares/validateJWT.js"

const router = Router();

router.post('/',[
    check('email','El email es obligatorio').isEmail(),
    check('password','La contraseña es obligatoria').not().isEmpty(),
    validateDocuments
],login)

router.post('/verify',[
    validateJWT,
    validateDocuments,
],verifyLogin)

export default router;