import { getDeportesCategoria } from "./API.js";


const raftingId = '64ceed4aed3fcc0147f8f8b1';
const torrentismoId = '64ceed54ed3fcc0147f8f8b2';
const espeleologiaId = '64ceed63ed3fcc0147f8f8b3';
const parapenteId = '64ceed79ed3fcc0147f8f8b4';

addEventListener('DOMContentLoaded',()=>{
    mostrarDeportes('raftingContainer',raftingId)
    mostrarDeportes('torrentismoContainer',torrentismoId)
    mostrarDeportes('espeleologiaContainer',espeleologiaId)
    mostrarDeportes('parapenteContainer',parapenteId)
});

async function mostrarDeportes(containerId, categoriaId) {
    const container = document.querySelector(`#${containerId}`);
    const deportes = await getDeportesCategoria(categoriaId);
    deportes.deportes.forEach((sport) => {
        const { deporte, descripcion,img } = sport;
        container.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="../img/${img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${deporte}</h5>
                    <p class="card-text">${descripcion}</p>
                    <a href="#" class="btn masInformacion">Mas informacion</a>
                </div>
            </div>
        `;
    });
}