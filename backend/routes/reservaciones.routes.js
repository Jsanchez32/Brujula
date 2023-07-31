import express from "express";
import { getReservacion,addReservation } from "../controllers/reservaciones.controller.js";

const router = express.Router();

router.get("/all",getReservacion);
router.post("/add",addReservation);


export default router;

