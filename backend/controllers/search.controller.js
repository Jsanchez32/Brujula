import {response} from "express";
import mongoose from "mongoose";
import Usuarios from "../models/Usuarios.js";
import Reservaciones from "../models/Reservaciones.js";
const {ObjectId} = mongoose.Types

const allowedCollections = [
    'reservaciones',
    'usuarios'
]

const searchUsers = async (criterio = '',res = response)=>{
    const isMongoId = ObjectId.isValid(criterio);
    if(isMongoId){
        const usuario = await Usuarios.findById(criterio);
        return res.json({
            results : (usuario) ? [usuario] : []
        });
    }

    const regex = new RegExp(criterio, 'i');
    const usuarios = await Usuarios.find({
        $or: [{username:regex},{email:regex}],
        $and: [{estado:true}]
    })

    res.json({
        results: usuarios
    })
}

const searchReservations = async (criterio = '',res = response)=>{
    const isMongoId = ObjectId.isValid(criterio);
    if(isMongoId){
        const reservacion = await Reservaciones.findById(criterio);
        return res.json({
            results: (reservacion) ? [reservacion] : []
        });
    }

    const regex = new RegExp(criterio, 'i');
    const reservaciones = await Reservaciones.find({
        $or: [{nombre:regex},{correo:regex},{plan:regex}],
        $and: [{estado:true}]
    })

    res.json({
        results: reservaciones
    })
}

const search = (req,res = response)=>{
    const {coleccion,criterio} = req.params;
    if(!allowedCollections.includes(coleccion)){
        return res.status(404).json({
            msg: `Solo se permiten las colecciones ${allowedCollections}`
        })
    }

    switch (coleccion) {
        case 'usuarios':
            searchUsers(criterio,res);
        break;
        case 'reservaciones':
            searchReservations(criterio,res);
        break;
        default:
            res.status(404).json({
                msg: 'Esta busqueda no existe'
            })
            break;
    }
}

export {
    search
}