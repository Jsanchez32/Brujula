import nodemailer from 'nodemailer'
import Reservaciones from "../models/Reservaciones.js";
import { sendEmail } from './mailer.controller.js';
import Deportes from '../models/Deportes.js';

const getReservacion = async (req,res)=>{
    try {
        const query = {estado:true}

        const [total, reservacion] = await Promise.all([
            Reservaciones.countDocuments(query),
            Reservaciones.find(query)
                .populate('usuario',['email'])
        ])
        res.json({
            total,
            reservacion
        })
    } catch (error) {
        res.status(404),
        res.json({
            msg: error.message
        })
    }
}

const getOneReservacion = async (req,res)=>{
    try {
        const query = {estado:true}
        const {id} = req.params;

        const [total, reservacion] = await Promise.all([
            Reservaciones.countDocuments(query),
            Reservaciones.findById(id)
                .populate('usuario',['email'])
        ])
        res.json({
            total,
            reservacion
        })
    } catch (error) {
        res.status(404),
        res.json({
            msg: error.message
        })
    }
}

const getReservacionUser = async (req,res)=>{
    try {
        const query = { estado: true, usuario: req.usuarios._id };

        const [total, reservacion] = await Promise.all([
            Reservaciones.countDocuments(query),
            Reservaciones.find(query)
                .populate('usuario',['email'])
        ])
        console.log(req.usuarios._id);
        res.json({
            total,
            reservacion
        })
    } catch (error) {
        res.status(404),
        res.json({
            msg: error.message
        })
    }
}


const addReservation = async (req, res) => {
    try {
        const { nombre, telefono, correo, hora, fecha, cantidadPersonas, plan, estado } = req.body;
        const planPrueba = await Deportes.findOne({ deporte: plan });
        const precioPlan = planPrueba.precio;
        const totalNuevo = cantidadPersonas * precioPlan;

        const data = {
            nombre,
            telefono,
            correo,
            hora:hora,
            fecha,
            cantidadPersonas: cantidadPersonas,
            plan,
            estado,
            total: totalNuevo,
            usuario: req.usuarios._id
        };

        const reservacion = new Reservaciones(data);
        await reservacion.save();
        await sendEmail(data);

        res.json({
            msg: 'Yes',
            reservacion
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};

const putReservation = async (req,res)=>{
    try {
        const {id} = req.params;
        const {_id,__v,...resto} = req.body;

        const reservacion = await Reservaciones.findByIdAndUpdate(id,resto, {new:true});
        res.json({
            reservacion
        })
    } catch (error) {
        res.status(404);
        res.send({
            msg:'No funca'
        })
    }
}

const delReservation = async (req,res)=>{
    const {id} = req.params;
    const reservacion = await Reservaciones.findByIdAndUpdate(id,{estado:false}, {new:true});
    res.json({
        reservacion
    })
}



export {
    getReservacion,
    addReservation,
    delReservation,
    putReservation,
    getReservacionUser,
    getOneReservacion
}