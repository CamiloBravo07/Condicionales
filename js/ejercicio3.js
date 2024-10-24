let sueldo = parseInt(prompt("Ingrese su suledo"))

if (sueldo < 300000) {
    sueldo = sueldo * 0.15
} else {
    sueldo = sueldo
}
console.log("El nuevo sueldo es: $" + sueldo)