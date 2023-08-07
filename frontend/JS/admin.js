import {delReservation, getReservaciones,putReservation,searchReservation,getDeportes} from "./API.js";
import { oneReservation } from "./API.js";

addEventListener('DOMContentLoaded',getReservacion);
const contenedor = document.querySelector('#container');
const formulario = document.querySelector('#formUpdate')

contenedor.addEventListener('click',deleteReservation)
contenedor.addEventListener('click',datosOne);
contenedor.addEventListener('click',detalles);
formulario.addEventListener('submit',actualizar)


const nombre = document.querySelector("#nombre");
const telefono = document.querySelector('#telefono');
const correo = document.querySelector('#correo');
const fecha = document.querySelector('#fecha');
const hora = document.querySelector('#hora');
const plan = document.querySelector('#plan');
const cantidadPersonas = document.querySelector('#cantidadPersonas');
const idReser = document.querySelector('#id')

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
                    <button id="${_id}" class="btn btn-warning detalle" data-bs-toggle="modal" data-bs-target="#Detalles">Detalles</button>
                    <div class="editUpdate">
                        <button id="${_id}"class="btn btn-danger eliminar">Eliminar</button>
                        <button type="submit" id="${_id}"class="btn btn-danger editar" data-bs-toggle="modal" data-bs-target="#Actualizar">Editar</button>
                    </div>
                    </div>
                </div>
                `
        })
    } catch (error) {
        console.log(error);
    }
}

async function llenarSelect (){
    try {
        const deporte = await getDeportes();
        deporte.deportes.forEach((sport)=>{
            const {deporte} = sport
            plan.innerHTML+=`
                <option value="${deporte}">${deporte}</option>
            `
        })
    } catch (error) {
        console.log(error);
    }
}


async function datosOne(e){
    if(e.target.classList.contains('editar')){
        const id = e.target.getAttribute('id')
        const datos = await oneReservation(id);
        plan.innerHTML=``
        llenarSelect();
        nombre.value = datos.reservacion.nombre
        telefono.value = datos.reservacion.telefono
        correo.value = datos.reservacion.correo
        fecha.value = datos.reservacion.fecha
        hora.value = datos.reservacion.hora
        plan.value = datos.reservacion.plan
        cantidadPersonas.value = datos.reservacion.cantidadPersonas
        idReser.value= datos.reservacion._id
    }
}

async function actualizar(e){
    e.preventDefault();
        const id = idReser.value
        const data = {
            nombre:nombre.value,
            telefono:telefono.value,
            correo:correo.value,
            fecha:fecha.value,
            hora:hora.value,
            plan:plan.value,
            cantidadPersonas:cantidadPersonas.value,
        }
        await putReservation(data,id)
        window.location.reload();
    }

async function deleteReservation(e){
    try {
        if(e.target.classList.contains('eliminar')){
            const id = e.target.getAttribute('id');
            await delReservation(id);
            window.location.reload();
        }
    } catch (error) {
        console.log(error);
    }
}

const modalbody = document.querySelector('.detalle');

async function detalles(e){
    try {
        if(e.target.classList.contains('detalle')){
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
        }
    } catch (error) {
        console.log(error);
    }
}

let dato = document.querySelector('#search')
dato.addEventListener('input',search)

async function search(){
    try {
        const contenedor = document.querySelector('#container');
        const reservaciones = await searchReservation(dato.value)
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

