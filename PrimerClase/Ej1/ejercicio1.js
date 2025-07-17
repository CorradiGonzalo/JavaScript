console.log("Tienda online del grupo.");

let nombreCliente = prompt("Ingrese su nombre:");
let producto = prompt("Ingrese el producto que desea comprar");
let precioUnitario = Number(prompt("Ingrese el precio del producto:"));
let cantidad = Number(prompt("Ingrese la cantidad de productos a comprar:"));

let subTotal = precioUnitario * cantidad;
let descuentoTienda = 5;
let montoDescuento = (subTotal * descuentoTienda) / 100;
let total = subTotal - montoDescuento;

console.log(subTotal);
console.log(descuentoTienda);
console.log(montoDescuento);
console.log(total);
