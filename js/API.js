export const api = 'http://localhost:4000/clientes';

export const agregarCliente = async (cliente) => {
    try {
        await fetch(api, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}

export const cargarClientes = async () => {
    try {
        const respuesta = await fetch(api);

        const resultado = await respuesta.json();

        return resultado;
    } catch (error) {
        console.log(error);
    }
}

export const eliminarCliente = async (id) => {
    try {
        await fetch(`${api}/${id}`, {
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}

//obtener un cliente de la api por su id
export const obtenerCliente = async (id) => {
    try {
        const respuesta = await fetch(`${api}/${id}`);

        const cliente = await respuesta.json();

        return cliente;
    } catch (error) {
        console.log(error);
    }
}


//actualizar un registro
export const editarCliente = async (cliente) => {
    try {
        await fetch(`${api}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type' : 'application/json'
            }
        })

        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}