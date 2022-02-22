var nombre="Adrian";
var altura=190;
var a=Math.max(120,5)
var concatenacion = nombre + " " + altura +" "+a
var datos=document.getElementById("datos");

 //funciones ejercicio 7
function leGustaLeer(cantidad) {
  return cantidad >20  ;
}
//funciones ejercicio 8
function estaEntre(numero1,numero2,numero3) {
   return numero1>numero2&&numero1<numero3 ;
}
//variables
var libros=leGustaLeer(45);
var estaentre=estaEntre(3,1,10);
//impresion en la pagina
datos.innerHTML = `
<h1>Caja de datos</h1>
Mi nombre es: ${nombre}</br>
Mi altura es: ${altura}</br>
Booleanos:</br>
<h2>Ejercicio 7</h2>
legustaleer: ${libros}</br>
<h2>Ejercicio 8</h2>
estaentre: ${estaentre}</br>
<h2>Ejercicio 9</h2>

 `;
 

