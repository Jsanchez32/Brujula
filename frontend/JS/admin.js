import {delReservation, getReservaciones,searchReservation } from "./API.js";
import { oneReservation } from "./API.js";

addEventListener('DOMContentLoaded',getReservacion);

async function getReservacion(){
    try {
        const contenedor = document.querySelector('#container');
        const reservaciones = await getReservaciones();
        reservaciones.reservacion.forEach((reservacion)=>{
            const {total,fecha,plan,_id} = reservacion
            contenedor.innerHTML+=`
                <div class="card" style="width: 18rem;">
                    <img src="../img/reservacion.jpg" class="card-img-top" alt="...">
                    <p class="card-text"><b>Deporte:</b> ${plan}</p>
                    <p class="card-text"><b>Fecha:</b> ${fecha}</p>
                    <p class="card-text"><b>Total:</b> ${total}$</p>
                    <button id="${_id}" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-warning detalle">Detalles</button>
                    <div class="editUpdate">
                        <button id="${_id}"class="btn btn-danger eliminar">Eliminar</button>
                        <button id="${_id}"class="btn btn-danger editar">Editar</button>
                    </div>
                    </div>
                </div>
                `
        })
    } catch (error) {
        console.log(error);
    }
}

const contenedor = document.querySelector('#container');
contenedor.addEventListener('click', ()=>{
    deleteReservation,
    datoOne
});


async function deleteReservation(e){
    try {
        if(e.target.classList.contains('eliminar')){
            const id = e.target.getAttribute('id');
            await delReservation(id);
            window.location.reload();
        }
    } catch (error) {
        
    }
}

async function updateReservation(e){
    if(e.target.classList.contains('editar')){
        
    }
}
async function datoOne(e){
    try {
        if(e.target.classList.contains('detalle')){
            const id = e.target.getAttribute('id')
            const one = await oneReservation(id)
            const modalbody = document.querySelector('.datos');
                const {nombre,telefono,correo,fecha,hora,plan,total,cantidadPersonas} = one.reservacion;
                modalbody.innerHTML=`
                <p>Nombre: ${nombre}</p>
                <p>Telefono: ${telefono}</p>
                <p>Correo: ${correo}</p>
                <p>Fecha: ${fecha}</p>
                <p>Hora: ${hora}</p>
                <p>Deporte: ${plan}</p>
                <p>Cantidad de Personas ${cantidadPersonas}</p>
                <p>Total ${total}$</p>
                `
                console.log(total);
        }
    } catch (error) {
        console.log(error);
    }
}

const dato = document.querySelector('#search')
dato.addEventListener('input',search)

async function search(){
    try {
        const contenedor = document.querySelector('#container');
        const reservaciones = await searchReservation(dato.value)
        console.log(dato.value);
        contenedor.innerHTML=''
        reservaciones.results.forEach((reservacion)=>{
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