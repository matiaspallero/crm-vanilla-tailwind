export function mostrarAlerta(mensaje){
    const existe = document.querySelector('bg-red-100');
    if(existe){
        existe.remove();
    }

    const alerta = document.createElement('DIV');
    alerta.classList.add('bg-red-100', 'text-red-700', 'border-red-400', 'text-center', 'px-4', 'py-3', 'max-w-lg', 'mx-auto', 'mt-6', 'rounded');
    alerta.innerHTML = `
        <strong class="font-bold">Error!</strong>
        <p class="font-normal">${mensaje}</p>
    `;

    const formulario = document.querySelector('#formulario');

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}


export function validar(objeto){
    return Object.values(objeto).every(input => input !== '');  //Esto devuelve true o false y quiere decir: De todos los inputs que tiene el objecto, son todos distintos a un ''?
}