
// definción de nombre de variables y funciones en javascript

// camelCase

// primero declaramos la función
function holaMundo() {
    console.log("Hola mundo")
}

// invocamos la función
// holaMundo()

function multiplicar(num1, num2) {
    return num1 * num2
}

let variable = multiplicar(4, 5)


let numeroDePrueba = 40
function casoVisibilidad() {
    let textoDePrueba = "Soy una variable local"
    console.log(textoDePrueba)
    console.log(numeroDePrueba)
}

let textoDePrueba = "Soy una variable global"
console.log(textoDePrueba)

textoDePrueba = 56

console.log(textoDePrueba)

const constanteDePrueba = "Valor de texto"

console.log(constanteDePrueba)

// var variableGlobal = "Soy una variable global"
// variableGlobal = 5678

// console.log(variableGlobal)