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

const addReservation = async(req,res)=>{
    const reservations = new Reservaciones(req.body);
    try {
        const newReservation = await reservations.save();
        res.send(newReservation);
    } catch (error) {
        req.status(404);
        res.send({error:'No funca'});
    }
}

export {
    getReservacion,
    addReservation
}