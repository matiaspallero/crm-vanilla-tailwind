import { mostrarAlerta, validar } from "./funciones.js";
import { agregarCliente } from "./API.js";

(function(){
    const formulario = document.querySelector('#formulario');

    formulario.addEventListener('submit', nuevoCliente);


    function nuevoCliente(e) {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }

        if(!validar(cliente)){
            mostrarAlerta('Por favor completa todos los campos');
            return;
        }

        //Pushear el cliente a la api
        agregarCliente(cliente);
    }
})();