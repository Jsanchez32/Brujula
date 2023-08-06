import { reservacionesUser } from "./API.js";

addEventListener('DOMContentLoaded',getReservacion);

async function getReservacion(){
    try {
        const contenedor = document.querySelector('#container');
        const reservaciones = await reservacionesUser();
        reservaciones.reservacion.forEach((reservacion)=>{
            const {total,fecha,plan,} = reservacion
            contenedor.innerHTML+=`
                <div class="card" style="width: 18rem;">
                    <img src="../img/reservacion.jpg" class="card-img-top" alt="...">
                    <p class="card-text"><b>Deporte:</b> ${plan}</p>
                    <p class="card-text"><b>Fecha:</b> ${fecha}</p>
                    <p class="card-text"><b>Total:</b> ${total}$</p>
                    <button class="btn btn-warning">Detalles</button>
                    </div>
                </div>
                `
        })
    } catch (error) {
        console.log(error);
    }
}