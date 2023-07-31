import {Router} from "express";
import {check} from "express-validator";
import { validateDocuments } from "../middlewares/validate.documents.js";
import { registerUsers } from "../controllers/usuarios.controllers.js";

const router = Router();

router.post("/add",[
    check('username','El Username no es valido').not().isEmpty(),
    check('password','El password debe ser min 8 letras').isLength({min:8}),
    check('email','El correo no es valido').isEmail(),
    validateDocuments
],registerUsers);


export default router;