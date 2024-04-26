// Diseñar un programa que me solicite ingresar n cantidad de números por
// teclado, luego de ingresar los números el programa me debe solicitar que
// operación deseo realizar:

// a.Sumar los números
// b.Contar los números primos
// c.Contar los números pares
// d.Calcular el promedio de los números primos
// e.Calcular el promedio de números pares
// Para este ejercicio se solicita trabajar con módulos.

import { solicitarNumeros, solicitarOperacion } from './punto2.1.js';
import { contarNumerosPrimos, promedioNumerosPrimos } from './punto2.2.js';
import { contarNumerosPares, promedioNumerosPares } from './punto2.3.js';

function main() {
  let numeros = solicitarNumeros();
  let operacion = solicitarOperacion();

  switch (operacion) {
    case 'a':
      alert("La suma de los números es: " + numeros.reduce((a, b) => a + b, 0));
      break;
    case 'b':
      alert("La cantidad de números primos es: " + contarNumerosPrimos(numeros));
      break;
    case 'c':
      alert("La cantidad de números pares es: " + contarNumerosPares(numeros));
      break;
    case 'd':
      alert("El promedio de los números primos es: " + promedioNumerosPrimos(numeros));
      break;
    case 'e':
      alert("El promedio de números pares es: " + promedioNumerosPares(numeros));
      break;
    default:
      alert("Operación no válida.");
  }
}

main();




