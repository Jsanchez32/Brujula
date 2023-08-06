import { getCategorias, getParapente,getEspeleologia,getRafting,getTorrentismo } from "../controllers/deportes.controller.js";
import { Router } from "express";

const router = Router();

router.get('/rafting',getRafting)
router.get('/parapente',getParapente)
router.get('/espeleologia',getEspeleologia)
router.get('/torrentismo',getTorrentismo)
router.get('/categoria',getCategorias)

export default router
