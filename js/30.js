//Eventos del DOM - Clicks

const heading = document.querySelector('.heading')

const enlaces = document.querySelectorAll('.navegacion a')

// heading.addEventListener('mouseenter', () => {
//     heading.textContent = 'Nuevo Heading al dar click'
// })

// heading.addEventListener('mouseleave', () => {
//     heading.textContent = 'Saliendo...'
// })

enlaces.forEach( enlace => {
    let nombre = enlace.textContent
    enlace.addEventListener('click', (evento) => {
        evento.preventDefault()
        
        evento.target.textContent = 'Diste click...'
    })
    enlace.addEventListener('dblclick', (evento) => {
        evento.target.textContent = `${nombre}`
    })
})
