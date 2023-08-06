import { reservacionesUser } from "./API.js";

addEventListener('DOMContentLoaded',getReservacion);

async function getReservacion(){
    try {
        const contendor = document.querySelector('container');
        const reservaciones = await reservacionesUser();
        console.log(reservaciones);
    } catch (error) {
        
    }
}