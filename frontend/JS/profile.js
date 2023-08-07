import { reservacionesUser } from "./API.js";
import { oneReservation } from "./API.js";

addEventListener('DOMContentLoaded',getReservacion);

async function getReservacion(){
    try {
        const contenedor = document.querySelector('#container');
        const reservaciones = await reservacionesUser();
        reservaciones.reservacion.forEach((reservacion)=>{
            const {total,fecha,plan,_id} = reservacion
            contenedor.innerHTML+=`
                <div class="card" style="width: 18rem;">
                    <img src="../img/reservacion.jpg" class="card-img-top" alt="...">
                    <p class="card-text"><b>Deporte:</b> ${plan}</p>
                    <p class="card-text"><b>Fecha:</b> ${fecha}</p>
                    <p class="card-text"><b>Total:</b> ${total}$</p>
                    <button  id=${_id} class="btn btn-warning detalle"  data-bs-toggle="modal" data-bs-target="#modalUser">Detalles</button>
                    </div>
                </div>
                `
        })
    } catch (error) {
        console.log(error);
    }
}

const contenedor = document.querySelector('#container');
contenedor.addEventListener('click',detalles)

async function detalles(e){
    try {
        if(e.target.classList.contains('detalle')){
            const modalbody = document.querySelector('.contenido')
            const id = e.target.getAttribute('id')
            const one = await oneReservation(id)
                const {nombre,telefono,correo,fecha,hora,plan,total,cantidadPersonas} = one.reservacion;
                console.log(modalbody);
                modalbody.innerHTML=`
                <p>Nombre: ${nombre}</p>
                <p>Telefono: ${telefono}</p>
                <p>Correo: ${correo}</p>
                <p>Fecha: ${fecha}</p>
                <p>Hora: ${hora}</p>
                <p>Deporte: ${plan}</p>
                <p>Cantidad de Personas: ${cantidadPersonas}</p>
                <p>Total: ${total}$</p>
                `
                console.log(total);
        }
    } catch (error) {
        console.log(error);
    }
}