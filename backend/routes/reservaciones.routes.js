import express from "express";
import { getReservacion, delReservation, putReservation, getReservacionUser,addReservation} from "../controllers/reservaciones.controller.js";
import { check } from "express-validator";
import { validateDocuments } from "../middlewares/validate.documents.js";
import { isAdminRole } from "../middlewares/validate.role.js";
import { validateJWT } from "../middlewares/validateJWT.js";
import { isValidObjectId } from "mongoose";
import { reservationExistById } from "../helpers/db.validator.js";


const router = express.Router();

router.get("/",getReservacion);
router.get("/user",[
    validateJWT,
    validateDocuments
],getReservacionUser);
router.post("/",[
    validateJWT,
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('telefono','El telefono es obligatorio').not().isEmpty(),
    check('correo','El correo es obligatorio').not().isEmpty(),
    check('correo','El correo no es valido').isEmail(),
    check('fecha','La fecha es obligatorio').not().isEmpty(),
    check('cantidadPersonas','La cantidad de personas es obligatorio').not().isEmpty(),
    check('plan','El plan es obligatorio').not().isEmpty(),
    validateDocuments
],addReservation);


router.delete('/:id',[
    validateJWT,
    isAdminRole,
    check('id').custom(isValidObjectId),
    check('id').custom(reservationExistById),
    validateDocuments
],delReservation)

router.put('/:id',[
    validateJWT,
    isAdminRole,
    check('id').custom(isValidObjectId),
    check('id').custom(reservationExistById),
    validateDocuments
],putReservation)

export default router;

