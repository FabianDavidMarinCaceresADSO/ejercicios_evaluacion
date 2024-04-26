// Diseñar un programa que me solicite por teclado n cantidad de números, al
// finalizar la carga de los números el programa debe enviar los números a
// una función expresada como único parámetro rest donde serán ordenados
// de mayor a menor para luego mostrarlos en una tabla por consola.



function ordenarNumeros(...numeros) {
  return numeros.sort((a, b) => b - a);
}

function main() {
  let cantidad;
  while (true) {
    let input = prompt("Ingrese la cantidad de números que desea ingresar:");
    if (/^\d+$/.test(input)) {
      cantidad = parseInt(input);
      break;
    } else {
      alert("Por favor, ingrese solo caracteres numéricos.");
    }
  }
  
  let numeros = [];
  for (let i = 0; i < cantidad; i++) {
    let numero;
    while (true) {
      let input = prompt("Ingrese el número " + (i + 1) + ":");
      if (/^-?\d*\.?\d+$/.test(input)) {
        numero = parseFloat(input);
        break;
      } else {
        alert("Por favor, ingrese solo caracteres numéricos.");
      }
    }
    numeros.push(numero);
  }
  
  let numerosOrdenados = ordenarNumeros(...numeros);

  console.log("Números ordenados de mayor a menor:");
  console.table(numerosOrdenados);
}

main();
