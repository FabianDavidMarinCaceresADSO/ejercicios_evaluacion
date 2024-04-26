// Diseñar un programa que me solicite por teclado n cantidad de números, al
// finalizar la carga de los números el programa debe enviar los números a
// una función expresada como único parámetro rest donde serán ordenados
// de mayor a menor para luego mostrarlos en una tabla por consola.


function encontrarPalabraMasLarga(...palabras) {
  let palabraMasLarga = "";
  let todasIguales = true;
  for (let palabra of palabras) {
    if (palabra.length > palabraMasLarga.length) {
      palabraMasLarga = palabra;
      todasIguales = false;
    } else if (palabra.length !== palabraMasLarga.length) {
      todasIguales = false;
    }
  }
  if (todasIguales) {
    return "Todas las palabras tienen la misma longitud.";
  }
  return palabraMasLarga;
}

function main() {
  let cantidad = parseInt(prompt("Ingrese la cantidad de palabras que desea ingresar:"));
  let palabras = [];
  for (let i = 0; i < cantidad; i++) {
    let palabra = prompt("Ingrese la palabra " + (i + 1) + ":");
    palabras.push(palabra);
  }
  let palabraMasLarga = encontrarPalabraMasLarga(...palabras);
  alert("La palabra más larga ingresada es: " + palabraMasLarga);
}

main();
