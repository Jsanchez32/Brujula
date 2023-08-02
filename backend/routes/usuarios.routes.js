import {Router} from "express";
import {check} from "express-validator";
import { validateDocuments } from "../middlewares/validate.documents.js";
import { registerUsers,deleteUsers,getUsers,putUsers} from "../controllers/usuarios.controllers.js";
import {validateJWT} from "../middlewares/validateJWT.js";
import {isAdminRole} from "../middlewares/validate.role.js";
import { emailExist,userExistsById } from "../helpers/db.validator.js";

const router = Router();

router.get("/all",getUsers);
router.post("/add",[
    check('username','El Username no es valido').not().isEmpty(),
    check('password','El password debe ser min 8 letras').isLength({min:8}),
    check('email','El correo no es valido').isEmail(),
    check('email').custom(emailExist),
    validateDocuments
],registerUsers);

router.delete('/del/:id',[
    validateJWT,
    isAdminRole,
    check('id').custom(userExistsById),
    validateDocuments
],deleteUsers)

router.put('put/:id',[
    check('id').custom(userExistsById),
    validateDocuments
],putUsers)


export default router;