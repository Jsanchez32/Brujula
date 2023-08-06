import { register } from "./API.js";

const formularioRegister = document.querySelector('#formularioRegister');
formularioRegister.addEventListener('submit', validateRegister);

async function validateRegister(e) {
    e.preventDefault();
    const email = document.querySelector('#emailRegister').value;
    const password = document.querySelector('#passwordRegister').value;
    const username = document.querySelector('#usernameRegister').value;
    
    const datos = {
        email,
        password,
        username
    };
    
    try {
        const response = await register(datos);
        if (response.success) {
            await Swal.fire({
                icon: 'success',
                title: 'Usuario Registrado',
            })
            
            window.location.href = '../login/login.html';
        }
    } catch (error) {
        Swal.fire({
            title: '¡Error!',
            text: 'Email ya existe o Contraseña menor a 8 caracteres',
            icon: 'error',
            confirmButtonText: 'Close'
        })
    }
}
    