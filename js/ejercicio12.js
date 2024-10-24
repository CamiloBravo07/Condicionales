let comision1= 0
let comision=0
let comision2 =0
let ventamenor=0
let ventamayor=0
let venta= 0
for (let i = 0; i < 5; i++){
let venta = parseInt(prompt("Digite el valor de su venta: "))   

if (venta<2000){
    comision1 = venta * 0.03
    ventamenor= +1
    console.log("su comision es de",comision1 )
}
    if (venta >=  2000){
    comision2 = venta * 0.05
    ventamayor=+5
    console.log("su comision es de",comision2 )
}
}
console.log("Total de ventas menores a 2000: ",ventamenor)
console.log("Total de ventas mayores o iguales a 2000: " ,ventamayor)
console.log("Comisión total: " ,comision1+comision2)