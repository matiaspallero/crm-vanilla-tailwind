import { obtenerCliente, editarCliente } from "./API.js";
import { mostrarAlerta, validar } from "./funciones.js";

(function(){
    //campos
    const nombreInput = document.querySelector('#nombre')
    const emailInput = document.querySelector('#email')
    const telefonoInput = document.querySelector('#telefono')
    const empresaInput = document.querySelector('#empresa')
    const idInput = document.querySelector('#id')

    document.addEventListener('DOMContentLoaded', async () => {
        //obtener cliente por url con el id que esta en el href del boton editar
        const parametrosURL = new URLSearchParams(window.location.search);

        const idCliente = parseInt(parametrosURL.get('id'));

        const cliente = await obtenerCliente(idCliente);

        mostrarCliente(cliente);

        //Submit que hace el update a cliente
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarCliente)
    });


    function mostrarCliente(cliente){
        const {nombre, telefono, email, empresa, id} = cliente;

        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
        idInput.value = id;  //el input con el id es hidden
    }


    function validarCliente(e){
        e.preventDefault();

        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: parseInt(idInput.value)
        }

        if(!validar(cliente)){
            mostrarAlerta('Por favor complete los campos');
            return;
        }

        //Actualiza el objeto
        editarCliente(cliente);
    }
})();