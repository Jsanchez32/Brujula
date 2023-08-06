const url = 'http://localhost:5000'


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
        const token = localStorage.getItem('token');
        const headers = {
            apiToken: `${token}`,
            'Content-Type': 'application/json'
        }
        
            await fetch(`${url}/reservaciones`, {
            method: 'post',
            body: JSON.stringify(datos),
            headers: headers
        });
    } catch (error) {
        console.log(error);
    }
}
export {
    login,
    register,
    getDeportes,
    addReservacion
}