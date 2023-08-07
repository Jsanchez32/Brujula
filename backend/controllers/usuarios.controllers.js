import Usuarios from "../models/Usuarios.js";
import bcryptjs from "bcryptjs"


const getUsers = async (req,res)=>{
    const {desde, hasta} = req.query;
    const query ={estado:true};

    const [total,usuarios] = await Promise.all([
        Usuarios.countDocuments(query),
        Usuarios.find(query)
            .skip(Number(desde))
            .limit(Number(hasta))
    ]);

    res.json({
        total,
        usuarios,
    })
}


const registerUsers = async (req,res)=>{
    const {email,username,password,rol} = req.body;
    const usuario = new Usuarios({email,username,password,rol});

    //Encriptar contraseña//
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password,salt);
    await usuario.save();

    //Guardar datos//
    res.json({
        "msg":"post-user",
        usuario,
        success:true,
    });
}

const deleteUsers = async (req,res)=>{
    const {id} = req.params;

    const usuario = await Usuarios.findByIdAndUpdate(id,{estado:false});
    res.json(usuario);
}

const putUsers = async (req,res)=>{
    const {id} = req.params;

    const {_id,password,...resto} = req.body

    if(!password){
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password,salt);
    }

    const usuario = await Usuarios.findByIdAndUpdate(id,resto,({new:true}));

    res.json({
        msg:'Usuario actualizado',
        usuario
    })
}




export {
    registerUsers,
    deleteUsers,
    getUsers,
    putUsers,
}