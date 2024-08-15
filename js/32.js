//Eventos del DOM - Submits

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const nombre = document.querySelector('#nombre').value
    const password = document.querySelector('#password').value

    //Prevenir nuevas alertas
    const alertaPrevia = document.querySelector('.alerta')
    
        alertaPrevia?.remove()
 

    const alerta = document.createElement('DIV')
    
    alerta.classList.add('alerta', 'text-white', 'uppercase', 'text-sm', 'text-center', 'p2')

    if( nombre === '' || password === ''){
        alerta.textContent = 'Todos los campos son obligatorios'
        alerta.classList.add('bg-red-500')
    } else {
        alerta.textContent = 'Enviando formulario...'
        alerta.classList.add('bg-green-500')
    }

    formulario.appendChild(alerta)

    setTimeout(() => {
        alerta.remove()
    }, 3000);
    console.log(alerta)
})