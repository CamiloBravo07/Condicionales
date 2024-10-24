let n = prompt("Ingrese el número")

if (isNaN(n)) {
    console.log("No es posible, ha ingresado un carácter no numérico")
} else {
    n = parseFloat(n)
    if (n !== 0) {
        let division = 1 / n
        console.log("La división es: " + division)
    } else {
        console.log("No es posible dividir por 0")
    }
}
