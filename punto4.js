// Diseñar un programa que me permita ingresar n cantidad de palabras por
// teclado, al finalizar la carga, se debe enviar como a una función expresada
// como único parámetro rest donde nos responderá cual de las palabras
// ingresadas es mayor a todas las anteriores.

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
