import { getDeportesCategoria } from "./API.js";


const raftingId = '64ceed4aed3fcc0147f8f8b1';
const torrentismoId = '64ceed54ed3fcc0147f8f8b2';
const espeleologiaId = '64ceed63ed3fcc0147f8f8b3';
const parapenteId = '64ceed79ed3fcc0147f8f8b4';

const rutaTorrentismo = '../deportes/torrentismo.html'
const rutaParapente = '../deportes/parapente.html'
const rutaRafting = '../deportes/rafting.html'
const rutaEspeleologia = '../deportes/espeleologia.html'

addEventListener('DOMContentLoaded',()=>{
    mostrarDeportes('raftingContainer',raftingId,rutaRafting)
    mostrarDeportes('torrentismoContainer',torrentismoId,rutaTorrentismo)
    mostrarDeportes('espeleologiaContainer',espeleologiaId,rutaEspeleologia)
    mostrarDeportes('parapenteContainer',parapenteId,rutaParapente)
});

async function mostrarDeportes(containerId, categoriaId,ruta) {
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
                    <a href="${ruta}" class="btn masInformacion">Mas informacion</a>
                </div>
            </div>
        `;
    });
}