let a = parseInt(prompt("Ingrese el primer numero"))
let b = parseInt(prompt("Ingrese el segundo numero"))
let c = parseInt(prompt("Ingrese el tercer numero"))

if(a > b && a < c || a > c && a< b ){
    console.log("El número del medio es: "  + a )
}else if(b > a && b < c || b > c && b < a){
    console.log("El número del medio es: "  +  b)
}else{
    console.log("El numero del medio es: " + c)
}