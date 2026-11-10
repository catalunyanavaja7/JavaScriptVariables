//Ejercicio 6
console.log("\nEjercicio 6")
let normal = 1234
let big = 5678n
let suma = normal + Number(big)
let resta = normal - Number(big)

console.log("Suma: " + suma.toFixed(1))
console.log("Resta: " + resta.toFixed(1))
console.log("Multiplicacion: " + (normal * Number(big)).toFixed(1))
console.log("Division: " + (normal / Number(big)).toFixed(1))

// Ejercicio 7
console.log("\nEjercicio 7")
// Nota: No se calcular la hipotenusa, my bad las mates no se me daban bien
let cateto = 4
let hipotenusa = cateto + cateto
console.log("Hipotenusa: " + hipotenusa)

// Ejercicio 8
console.log("\nEjercicio 8")
// Si que hace la division correctamente, interesante
let entero = 20
let texto = "5"
console.log("Division entre entero y texto: " + (entero / texto))

// Ejercicio 9
console.log("\Ejercicio 9")
let nombre = "Leonardo Mata"
let soloApellidoSplit = nombre.split(" ")
console.log(soloApellidoSplit[1].length)

// Ejercicio 10
console.log("\nEjercicio 10")
let nombre2 = "Leonardo Mata"
let nombre2Cortado = nombre2.replace("r", "")
console.log(nombre2Cortado)

// Ejercicio 11
console.log("\nEjercicio 11")
// Aparece Nan en la consola
let variableNoDef = undefined
let variableNull = null
console.log(variableNoDef + variableNull)

// Ejercicio 12
console.log("\nEjercicio 12")
let boleano = true
console.log(String(boleano))
console.log((boleano + ""))

// Ejercicio 13
console.log("\nEjercicio 13")
let cadena = "Hola"
console.log(Boolean(cadena))
console.log(2 || cadena)

// Ejercicio 14
console.log("\nEjercicio 14")
let bool = true
console.log(Number(bool))
console.log(bool | 0)
