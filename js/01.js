let cliente = "Mariano"
const producto = {
    nombre : 'Tablet',
    precio : 300,
    disponible : false
}
console.log(cliente)

console.table(producto)

let nombreApellido = `
    Hola, 
    soy Laura y vos sos ${cliente}
`

let array1 = [25, 'hola', 33]
console.table(array1)

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'ReactJs', 'NodeJS']

tecnologias.forEach(function(tecnologia) {
    if (tecnologia == 'JavaScript'){
    console.log(tecnologia)
    }
})

const arrayMap = tecnologias.map(function(tecnologia){
    return tecnologia
})

console.log(arrayMap)

//for ... of

for (let tecnologia of tecnologias){
    console.log(tecnologia)
}

const arrayNumeros = [20, 11, 33]
const resultado = arrayNumeros.reduce((total, numero) => total + numero, 0)
console.log(resultado)