const url = 'http://localhost:5000'


const token = localStorage.getItem('token');
const headers = {
    apiToken: `${token}`,
    'Content-Type': 'application/json'
}

const login = async (datos) => {
    try {
        const response = await fetch(`${url}/login`, {
            method: 'post',
            body: JSON.stringify(datos),
            headers: { 'Content-Type': 'application/json' }
        });

        const data = await response.json();

        if (response.ok) {
            return data;
        }
    } catch (error) {
        console.log(error);
    }
};


const register = async (datos) => {
    try {
        const response = await fetch(`${url}/usuarios/add`, {
            method: 'post',
            body: JSON.stringify(datos),
            headers: { 'Content-Type': 'application/json' }
        });

        const data = await response.json();

        if (response.ok) {
            return data;
        }
    } catch (error) {
        console.log(error);
    }
};

const getDeportes = async()=>{
    try {
        const response = await fetch(`${url}/deportes/all`)   
        const result = response.json();
        return result     
    } catch (error) {
        console.log(error);
    }
}

const addReservacion = async(datos)=>{
    try {
            await fetch(`${url}/reservaciones`, {
            method: 'post',
            body: JSON.stringify(datos),
            headers: headers
        });
    } catch (error) {
        console.log(error);
    }
}

const getDeportesCategoria = async(categoriaId)=>{
    try {
        
        const response = await fetch(`${url}/deportes/categoria/${categoriaId}`)
        const result = response.json();
        return result
    } catch (error) {
        console.log(error);
    }
}

const reservacionesUser = async()=>{
    try {
        const response = await fetch(`${url}/reservaciones/user`,{
            headers:headers
        })
        const result = response.json();
        return result
    } catch (error) {
        console.log(error);
    }
}

const verify = async()=>{
    try {
        const token = await fetch(`${url}/login/verify`,{
            method: 'POST',
            headers:headers
        })

        return await token.json();
    } catch (error) {
        console.log(error);
    }
}
export {
    login,
    verify,
    register,
    getDeportes,
    addReservacion,
    reservacionesUser,
    getDeportesCategoria,
}