import {response,request} from "express"
import jsonwebtoken from "jsonwebtoken";
import Usuarios from "../models/Usuarios.js";

const validateJWT = async(req=request,res=response,next)=>{
    const token = req.header('apiToken');

    if(!token){
        return res.status(404).json({
            msg: 'No hay token en la peticion'
        })
    }

    try {
        const {uid} = jsonwebtoken.verify(token,process.env.SECRET_OR_PRIVATE_KEY);

        const usuarios = await Usuarios.findById(uid);
        if(!usuarios){
            return res.status(404).json({
                msg:'Token no valido, Usuario no existe'
            })
        }

        if(!usuarios.estado){
            return res.status(404).json({
                msg: 'Token no valido, Usuario estado false'
            })
        }
        req.usuarios = usuarios;
        console.log("req usuarios en validate",req.usuarios);
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        })
    }
}


export {
    validateJWT
}