import { getParapente,getEspeleologia,getRafting,getTorrentismo,getDeportes } from "../controllers/deportes.controller.js";
import { Router } from "express";

const router = Router();

router.get('/rafting',getRafting)
router.get('/all',getDeportes)
router.get('/parapente',getParapente)
router.get('/espeleologia',getEspeleologia)
router.get('/torrentismo',getTorrentismo)

export default router
