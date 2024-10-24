let forma= prompt("Ingrese la forma")
let longitud = parseFloat(prompt("Ingrese la longitud"))
let diametro = parseFloat(prompt("Ingrese el valor del diametro"))

if(forma == ("varilla") && longitud >= 7.5 && longitud <= 9 && diametro > 0.5 && diametro < 1.3){
    let masa = (longitud*diametro)/3.5
    console.log(masa  +  "CM")
}else{
    console.log("No comple")
}