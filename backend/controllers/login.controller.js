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


    const verifyLogin = async (req,res)=>{
        try {
            res.json({
                validToken: true
            })
        } catch (error) {
            console.log(error);
        }
    }

    const validateAdmin = async (req,res)=>{
        try {
            const { rol } = req.usuarios;
            if(rol!='admin'){
                res.status(404).json({
                    msg: "No es admin"
                })
            }
            res.json({
                success:true
            })
        } catch (error) {
            console.log(error);
        }
    }
    export {
        login,  
        verifyLogin,
        validateAdmin
    }
