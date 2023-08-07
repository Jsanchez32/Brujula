import { admin } from "./API.js";

addEventListener('DOMContentLoaded',header)

const navBar = document.querySelector('header');
async function header (){

    navBar.innerHTML = `
        <div class="logo">
            <a href="../home/home.html">
                <img src="../img/logo.png" alt="Logo de la marca" >
            </a>
        </div>
            <nav>
                <ul class="nav-links">
                    <li><a class="torrentismo" href="../deportes/torrentismo.html">Torrentismo</a></li>
                    <li><a class="rafting" href="../deportes/rafting.html">Rafting</a></li>
                    <li><a class="parapente" href="../deportes/parapente.html">Parapente</a></li>
                    <li><a class="espeleologia" href="../deportes/espeleologia.html">Espeleologia</a></li>
                </ul>            
            </nav>
        <div class="logo">
            <a href="../home/home.html"></a>
            <img class="profile" src="../img/userLogo.png" alt="Logo de la marca" >
        </div>
        <div class="logOut">
            <button class="btn btn-danger logOut">Log Out</button>
        </div>
    `
}




navBar.addEventListener('click',cerrarSesion);

async function cerrarSesion(e){
    e.preventDefault();
    if(e.target.classList.contains('logOut')){
        localStorage.clear();
        Swal.fire({
            icon: 'success',
            title: 'Sesion Cerrada',
          })
        window.location.href='../login/login.html';
    }

    if(e.target.classList.contains('torrentismo')){
        window.location.href='../deportes/torrentismo.html'
    }
    else if(e.target.classList.contains('rafting')){
        window.location.href='../deportes/rafting.html'
    }
    else if(e.target.classList.contains('parapente')){
        window.location.href='../deportes/parapente.html'
    }
    else if(e.target.classList.contains('espeleologia')){
        window.location.href='../deportes/espeleologia.html'
    }


    if(e.target.classList.contains('profile')){
        const response = await admin();
            if (response.success) {
                window.location.href='../administracion/admin.html'
            }
        else{
            window.location.href='../reservaciones/profile.html'
        }
    }


}