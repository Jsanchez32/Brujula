import Deportes from "../models/Deportes.js"
import Categorias from "../models/Categorias.js"
import mongoose from "mongoose";


const getDeportes = async (req, res) => {
    try {
        const deportes = await Deportes.find()
            .populate('categoria', ['categoria','precio']);
        res.json({
            deportes
        });
    } catch (error) {
        res.status(500).json({
            msg: error.message
        });
    }
};

const getDeportesByCategoria = async (req, res) => {
    try {
        const categoriaId = req.params.categoriaId;
        const categoriaObjectId = new mongoose.Types.ObjectId(categoriaId);
        const deportes = await Deportes.find({ categoria: categoriaObjectId })
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


export {
    getDeportes,
    getDeportesByCategoria
}