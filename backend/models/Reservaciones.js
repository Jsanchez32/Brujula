import mongoose from "mongoose";

const reservacionesSchema = mongoose.Schema({
    nombre:{
        type:String,
        require:true,
        trim:true
    },
    telefono:{
        type:String,
        require:true,
        trim:true    
    },
    correo:{
        type:String,
        require:true,
        trim:true
    },
    fecha:{
        type:String,
        require:true,
        trim:true
    },
    cantidadPersonas:{
        type:String,
        require:true,
        trim:true
    },
    plan:{
        type:String,
        require:true,
        trim:true
    }

});
const Reservaciones = mongoose.model('reservaciones',reservacionesSchema);

export default Reservaciones;