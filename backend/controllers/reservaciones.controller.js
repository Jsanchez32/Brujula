import Reservaciones from "../models/Reservaciones.js";

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

const addReservation = async(req,res)=>{
    try {
        const {nombre,telefono,correo,fecha,cantidadPersonas,plan,estado} = req.body
        const data = {
            nombre,
            telefono,
            correo,
            fecha,
            cantidadPersonas,
            plan,
            estado,
            usuario: req.usuarios._id
        }
        console.log(data);
        const reservacion = new Reservaciones(data);
        await reservacion.save();
    
        res.json({
            msg:'Yes',
            reservacion
        });
    } catch (error) {
        res.status(404);
        res.send({error:'No funca'});
    }
}

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
    putReservation
}