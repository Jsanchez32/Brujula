import Usuarios from "../models/Usuarios.js";
import Role from "../models/Role.js";
import Reservaciones from "../models/Reservaciones.js";

const isValidRole = async(rol= '')=>{
    const existeRol = await Role.findOne({rol});
    if(!existeRol){
            throw new Error(`El rol ${rol} no esta registrado en la base de datos`);
    }
}

//Verificar si el email existe//
const emailExist = async(email='')=>{
    const emailExsite = await Usuarios.findOne({email});
    if(emailExsite){
        //12.  Gestionamos error.
        throw new Error(`El email: ${ email }, ya está registrado`);
    }
}
// Verificar si el id existe//
 const userExistsById = async( id ) => {
    const userExists = await Usuarios.findById(id);
    if ( !userExists ) {
        throw new Error(`El id (usuario) no existe ${ id }`);
    }
}

const reservationExistById = async( id ) => {
    const reservationExist = await Reservaciones.findById(id);
    if ( !reservationExist ) {
        throw new Error(`El id (reservacion) no existe ${ id }`);
    }
}


export {
    emailExist,
    userExistsById,
    isValidRole,
    reservationExistById
}