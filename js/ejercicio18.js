    let numero = parseFloat(prompt("Ingresa un número:"))

    if (numero > 0) {
        console.log(numero + "es positivo.")
    } else if (numero < 0) {
        console.log(numero + "es negativo.")
    } else {
        console.log("El número es cero.")
    }