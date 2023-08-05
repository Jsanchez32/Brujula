    import {response} from "express";
    import Usuarios from "../models/Usuarios.js";
    import bcryptjs from "bcryptjs";
    import {generateJWT} from "../helpers/generateJWT.js"

    const login = async (req, res=response)=>{
        const {email,password} = req.body;
        try {
            //Verificar email//
            const usuario = await Usuarios.findOne({email});
            if(!usuario){
                return res.status(400).json({
                    msg: "El email es incorrecto",
            })
            }

            //Verificar si el estado esta activo//
            if (!usuario.estado){
                return res.status(400).json({
                    msg:"Estado Inactivo"
                })
            }
            
            //Verificar contraseña//
            const validatePsw = bcryptjs.compareSync(password,usuario.password);
            if(!validatePsw){
                res.status(404).json({
                    msg: "Contraseña incorrecta"
                })
            }
            const token = await generateJWT(usuario.id)

            res.json({
                usuario,
                success:true,
                token
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
