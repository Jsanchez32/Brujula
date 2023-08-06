import { getDeportes } from "./API.js";

addEventListener('DOMContentLoaded',deportes);

async function deportes(){
    const container = document.querySelector('.container');
    const deport = await getDeportes();
    deport.total.forEach((depo)=>{
        console.log(depo);
    })
}q