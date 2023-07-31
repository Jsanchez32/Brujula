import { Router } from "express";
import { login } from "../controllers/login.controller.js";
import {check} from "express-validator";
import {validateDocuments} from "../middlewares/validate.documents.js";

const router = Router();

router.post('/',[
    check('email','El email es obligatorio').isEmail(),
    check('password','La contraseña es obligatoria').not().isEmpty(),
    validateDocuments
],login)


export default router;