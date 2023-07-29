import express from "express";
import { getReservacion } from "../controllers/reservaciones.controller.js";

const router = express.Router();

router.get("/all",getReservacion);


export default router;

