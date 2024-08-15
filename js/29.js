//manipular elementos html con JS

const heading = document.querySelector('.heading')
const enlaces = document.querySelectorAll('.navegacion a')

heading.textContent = "Un nuevo heading..."
heading.id = 'Un nuevo ID'


const inputNombre = document.querySelector('#nombre')
inputNombre.value='Un nuevo valor'

console.log(inputNombre.classList)

let i = 1;
enlaces.forEach(enlace => {
    enlace.textContent = `Nuevo enlace${i}`
    i++
});