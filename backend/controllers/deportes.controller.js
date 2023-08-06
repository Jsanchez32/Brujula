import Deportes from "../models/Deportes.js"
import Categorias from "../models/Categorias.js"
import mongoose from "mongoose";

const getRafting = async (req, res) => {
    try {
        const raftingId = new mongoose.Types.ObjectId('64ceed4aed3fcc0147f8f8b1');
        const deportes = await Deportes.find({ categoria: raftingId })
            .populate('categoria', 'categoria');
        res.json({
            deportes
        });
    } catch (error) {
        res.status(500).json({
            msg: error.message
        });
    }
};
const getParapente = async (req, res) => {
    try {
        const parapenteId = new mongoose.Types.ObjectId('64ceed79ed3fcc0147f8f8b4');
        const deportes = await Deportes.find({ categoria: parapenteId })
            .populate('categoria', 'categoria');
        res.json({
            deportes
        });
    } catch (error) {
        res.status(500).json({
            msg: error.message
        });
    }
};
const getTorrentismo = async (req, res) => {
    try {
        const torrentismo = new mongoose.Types.ObjectId('64ceed54ed3fcc0147f8f8b2');
        const deportes = await Deportes.find({ categoria: torrentismo })
            .populate('categoria', 'categoria');
        res.json({
            deportes
        });
    } catch (error) {
        res.status(500).json({
            msg: error.message
        });
    }
};
const getEspeleologia = async (req, res) => {
    try {
        const espeleologiaId = new mongoose.Types.ObjectId('64ceed63ed3fcc0147f8f8b3');
        const deportes = await Deportes.find({ categoria: espeleologiaId })
            .populate('categoria', 'categoria');
        res.json({
            deportes
        });
    } catch (error) {
        res.status(500).json({
            msg: error.message
        });
    }
};

const getCategorias = async (req,res)=>{
    try {
        const [total, categoria] = await Promise.all([
            Categorias.find()
        ])
        res.json({
            total,
            categoria
        })
    } catch (error) {
        res.status(404),
        res.json({
            msg: error.message
        })
    }
}


export {
    getParapente,
    getEspeleologia,
    getRafting,
    getTorrentismo,
    getCategorias
}