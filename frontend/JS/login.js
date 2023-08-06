import { login } from "./API.js";
    const formulario = document.querySelector('#formularioLogin');
    formulario.addEventListener('submit', validateLogin);

    async function validateLogin(event) {
        event.preventDefault();
        const email = document.querySelector('#emailLogin').value;
        const password = document.querySelector('#passwordLogin').value;
    
        const datos = {
            email,
            password
        };
    
        try {
            const response = await login(datos);
            if (response.success) {
                await Swal.fire({
                    icon: 'success',
                    title: 'Iniciando Sesion',
                  })
                  localStorage.setItem('token', response.token);
                window.location.href = '../home/home.html';
           }
        } catch (error) {
            Swal.fire({
                title: '¡Error!',
                text: 'Email o Contraseña incorrecta',
                icon: 'error',
                confirmButtonText: 'Close'
              })
        }
    }
