
// Ejercicio 1
function nombreCompleto(nombre, apellido) {
    console.log("\nEjercicio 1")
    console.log(nombre)
    console.log(apellido)
}

nombreCompleto("Leonardo", "Mata")

// Ejercicio 2
function tipoVariable(valor) {
    console.log("\nEjercicio 2")
    console.log(typeof valor)
}

tipoVariable(20)

// Ejercicio 3
const actual = new Date()

function fecha(actual) {
    console.log("\nEjercicio 3")
    console.log(actual)
}

fecha(actual)

// Ejercicio 4
console.log("\nEjercicio 4")
console.log("las variables creadas dentro de las funciones solo se pueden " +
    "usar dentro de ellas")

// Ejercicio 5
function fVocales(texto) {
    console.log("\nEjercicio 5")
    const vocales = texto.match(/[aeiouáéíóú]/gi) || [];
    console.log(vocales.length)
}

fVocales("Leonardo")

// Ejercicio 6
function fSuma(num1, num2, num3 = 20) {
    console.log("\nEjercicio 6")
    console.log(num1 + num2 + num3)

}

fSuma(10, 10)

// Ejercicio 8
function comparacion(ent1, ent2) {
    if (ent1 === 30 || ent1 + ent2 === 30) {
        console.log("\nEjercicio 8")
        console.log("Es true")
        return true
    }
}

comparacion(20, 10)

// Ejercicio 9
var anonimo = function (ent1, ent2) {
    if (ent1 === 30 || ent1 + ent2 === 30) {
        console.log("\nEjercicio 9")
        console.log("Es true anonimamente")
        return true
    }
}

console.log(anonimo(30, 0))

// Ejercicio 10
var cierto = (valor1, valor2) => {
    console.log("\nEjercicio 10")
    if (typeof valor1 === typeof valor2) {
        return true
    } else {
        return false
    }
}

console.log(cierto(20, 30))


