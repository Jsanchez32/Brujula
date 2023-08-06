import {getDeportes, getDeportesByCategoria } from "../controllers/deportes.controller.js";
import { Router } from "express";

const router = Router();

router.get('/all',getDeportes)
router.get('/categoria/:categoriaId',getDeportesByCategoria)


export default router
