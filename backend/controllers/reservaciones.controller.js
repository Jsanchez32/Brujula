import Reservaciones from "../models/Reservaciones.js";

const getReservacion = async (req,res)=>{
    try {
        const reservaciones = await Reservaciones.find();
        res.send(reservaciones);
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"});
    }
}









export {
    getReservacion
}