import {response} from "express";
import Usuarios from "../models/Usuarios.js";
import bcryptjs from "bcryptjs";

const login = async(req,res=response)=>{
    const {email,password} = req.body;
    try {
        //Verificar email//
        const usuario = await Usuarios.findOne({email});
        if(!usuario){
            return res.status(400).json({
                msg: "El email es incorrecto"
            })
        }
        //Verificar contraseña//
        const validatePsw = bcryptjs.compareSync(password,usuario.password);
        if(!validatePsw){
            res.status(404).json({
                msg: "Contraseña incorrecta"
            })
        }
        res.json({
            msg:'Sesion iniciada'
        })
    } catch (error) {
        res.json({
            msg: "No funca"
        })
    }
}

export {
    login
}
