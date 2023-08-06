import { getDeportes,addReservacion } from "./API.js";

addEventListener('DOMContentLoaded',selectPlan);

async function selectPlan(){
    const select = document.querySelector('#plan');
    const deportes = await getDeportes()
    deportes.deportes.forEach((sport)=>{
        const {deporte} = sport
        select.innerHTML+=`
        <option value="${deporte}">${deporte}</option>
        `
    })
}

const formularioReservacion = document.querySelector('#formReservacion');
formularioReservacion.addEventListener('submit',insertReservacion);

async function insertReservacion(e){
    e.preventDefault();
    const nombre = document.querySelector('#nombre').value;
    const telefono = document.querySelector('#telefono').value;
    const correo = document.querySelector('#correo').value;
    const fecha = document.querySelector('#fecha').value;
    const cantidadPersonas = document.querySelector('#cantidadPersonas').value;
    const plan = document.querySelector('#plan').value;

    const datos={
        nombre,
        telefono,
        correo,
        fecha,
        cantidadPersonas,
        plan
    }
    addReservacion(datos);

    await Swal.fire({
        icon: 'success',
        title: 'Reservacion Registrada',
      })
    window.location.href = '../reservaciones/profile.html';
}
