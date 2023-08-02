import Usuarios from "../models/Usuarios.js";



//Verificar si el email existe//
const emailExist = async(email='')=>{
    const emailExsite = await Usuarios.findOne({email});
    if(emailExsite){
        return res.status(404).json({
            msg: 'Email is already registered'
        })
    }

}
// Verificar si el id existe//
 const userExistsById = async( id ) => {
    const userExists = await Usuarios.findById(id);
    if ( !userExists ) {
        throw new Error(`El id (usuario) no existe ${ id }`);
    }
}

export {
    emailExist,
    userExistsById
}