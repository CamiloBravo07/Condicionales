let nombre = prompt("Ingrese su nombre")
let edad = parseInt(prompt("Ingrese su edad"))
let sexo = prompt("Ingrese su sexo")
let estadocivil = prompt("Ingrese su estado civil")


if(sexo == ("h") && estadocivil == ("casado") && edad >=40 ){
    console.log("Su nombre es: " + nombre)
}
if(sexo == ("f") && estadocivil == ("soltera") && edad <=40 ){
    console.log("Su nombre es: " + nombre)
}
