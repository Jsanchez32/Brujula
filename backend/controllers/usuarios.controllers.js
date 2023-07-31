import Usuarios from "../models/Usuarios.js";
import bcryptjs from "bcryptjs"
const registerUsers = async (req,res)=>{
    const {email,username,password} = req.body;
    const usuario = new Usuarios({email,username,password});
    //Verificar duplicacion email//
    const emailExist = await Usuarios.findOne({email});
    if(emailExist){
        return res.status(404).json({
            msg: 'Email is already registered'
        })
    }
    //Encriptar contraseña//
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password,salt);
    await usuario.save();
    res.json({
        "msg":"post-user",
        usuario
    });
}

export {
    registerUsers
}