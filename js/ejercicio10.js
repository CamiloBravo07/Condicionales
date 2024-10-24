let nota1 = parseInt(prompt("Ingrese la primer nota"));
let nota2 = parseInt(prompt("Ingrese la segunda nota"));
let nota3 = parseInt(prompt("Ingrese la tercer nota"));
let mayor, segundoMayor;

if (nota1 >= nota2 && nota1 >= nota3) {
    mayor = nota1;
    if (nota2 >= nota3) {
        segundoMayor = nota2;
    } else {
        segundoMayor = nota3;
    }
} else if (nota2 >= nota1 && nota2 >= nota3) {
    mayor = nota2;
    if (nota1 >= nota3) {
        segundoMayor = nota1;
    } else {
        segundoMayor = nota3;
    }
} else {
    mayor = nota3;
    if (nota1 >= nota2) {
        segundoMayor = nota1;
    } else {
        segundoMayor = nota2;
    }
}

let promedio = (mayor + segundoMayor) / 2;

console.log(`El promedio de las dos mejores notas es: ` + promedio);
