/* Pre-entrega 1 */

let mensaje;

const nombre = prompt("Ingrese su nombre: ");
const nacimiento = parseInt(prompt("Ingrese su año de nacimiento: "));
const curso = prompt("Ingrese su curso: ");

console.log("Nombre: " + nombre);
console.log("Año de nacimiento: " + nacimiento);
console.log("Curso: " + curso);

const anioActual = 2026;
const edadCalculada = anioActual - nacimiento;
alert("Edad calculada: " + edadCalculada);

mensaje = "Bienvenido " + nombre;
mensaje += " al curso de " + curso + "!";
alert(mensaje);

let numero = parseInt(prompt("Ingresa un número entero y te digo si es par o impar: "));
while (isNaN(numero)) {
  alert("No ingresaste un número válido.");
  numero = parseInt(prompt("Ingresa un número entero y te digo si es par o impar: "));
}
if (numero % 2 === 0) {
  alert("El número " + numero + " es par.");
} else {
  alert("El número " + numero + " es impar.");
}