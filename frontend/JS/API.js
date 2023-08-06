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

const getDeportes = async ()=>{
    try {
        const datos = await fetch(`${url}/deportes`)
        const result  = datos.json();
        return result
    } catch (error) {
        console.log(error);
    }
}
export {
    login,
    register,
    getDeportes
}