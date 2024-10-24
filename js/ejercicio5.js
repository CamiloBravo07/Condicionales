let num1 = parseInt(prompt("Ingrese el primer valor"))
let num2 = parseInt(prompt("Ingrese el segundo valor"))
let num3 = parseInt(prompt("Ingrese el tercer valor"))

if (num1 === num2 && num2 === num3) {
    console.log("Los tres números son iguales.");
} else {
    // Determinar cuál es el mayor
    if (num1 > num2 && num1 > num3) {
        console.log("El número mayor es: " + num1)
    } else if (num2 > num1 && num2 > num3) {
        console.log("El número mayor es: " + num2)
    } else {
        console.log("El número mayor es: " + num3)
    }

    // Determinar cuál es el menor
    if (num1 < num2 && num1 < num3) {
        console.log("El número menor es: " + num1)
    } else if (num2 < num1 && num2 < num3) {
        console.log("El número menor es: " + num2)
    } else {
        console.log("El número menor es: " + num3)
    }

    // Verificar si los tres números son diferentes
    if (num1 !== num2 || num2 !== num3 || num1 !== num3) {
        console.log("Los números son diferentes.")
    }
}