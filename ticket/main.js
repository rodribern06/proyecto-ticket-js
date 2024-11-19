const nombreusuario = prompt("bienvenido\nIngresa tu nombre:")
const producto= prompt(`hola ${nombreusuario},nuestros productos son estos: \n1.remera manga larga ($12000) \n2.remera manga corta($10000) \n3.hoodie($20000)\n4.buzo($19000) \n escribe el numero del producto que deseas`)

let preciouni;
let cantidad;
let total;
let productonom;

if(producto == 1){
preciouni = 12000;
productonom = "remera manga larga"
cantidad= prompt(`elegiste la ${productonom} que sale $${preciouni}. ¿cuantos queres?`)
}
else if (producto == 2){
    preciouni = 10000;
    productonom = "remera manga corta"
    cantidad= prompt(`elegiste la ${productonom} que sale $${preciouni}. ¿cuantos queres?`)
}
else if(producto == 3){
    preciouni = 20000;
    productonom = "hoodie"
    cantidad= prompt(`elegiste el ${productonom} que sale $${preciouni}. ¿cuantos queres?`)
}
else if(producto == 4){
    preciouni = 19000;
    productonom = "buzo"
    cantidad= prompt(`elegiste el ${productonom} que sale $${preciouni}. ¿cuantos queres?`)
}
else {
    alert("opcion no valida. recarga la pagina e intentalo denuevo")
}
total = preciouni * cantidad

document.getElementById("ticket").innerHTML =`
 <h2> ticket de compra </h2>
 <p><strong>Cliente: <strong/> ${nombreusuario}</p>
 <p><strong>Prodructo: <strong/>${productonom} </p>
 <p><strong>Precio: <strong/>$${preciouni} </p>
 <p><strong>Cantidad: <strong/>${cantidad} </p>
 <p><strong>Total: <strong/>$${total} </p>
`
function sumar(a,b){
    return a*b;
}
let resultado = sumar(4,7)
console.log(resultado);
