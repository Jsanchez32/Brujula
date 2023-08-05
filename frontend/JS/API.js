const url = 'http://localhost:5000/login'


const login = async (datos) => {
    try {
        const response = await fetch(url, {
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

export {
    login,
}