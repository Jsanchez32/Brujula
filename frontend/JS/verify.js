import { verify } from "./API.js";

async function verifyUser(){
    const token = await verify();

    if(!token.validToken){
        window.location.href="../login/login.html"
    }
}

document.addEventListener('DOMContentLoaded',verifyUser);