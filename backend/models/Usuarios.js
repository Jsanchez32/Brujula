import mongoose from "mongoose";

const usuariosSchema = mongoose.Schema({
    email:{
        type: String,
        require: true,
        trim: true,
    },
    username:{
        type: String,
        require: true,
        trim: true,
    },
    password:{
        type: String,
        require: true,
        trim:true
    },
    rol:{
        type: String,
        require: true,
        trim:true,
        default: 'user'
    }
})

const Usuarios = mongoose.model('usuarios',usuariosSchema);
export default Usuarios;