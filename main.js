import { solicitarOperacion } from './solicitarOperacion.js';
import { miCalculadora } from './punto5.js';

export function main() {
  let numero1 = parseFloat(prompt("Ingrese el primer número:"));
  let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
  let operacion = solicitarOperacion();

  switch (operacion) {
    case 'a':
      alert("El resultado de la suma es: " + miCalculadora.suma(numero1, numero2));
      break;
    case 'b':
      alert("El resultado de la resta es: " + miCalculadora.resta(numero1, numero2));
      break;
    case 'c':
      alert("El resultado de la multiplicación es: " + miCalculadora.multiplicacion(numero1, numero2));
      break;
    case 'd':
      try {
        alert("El resultado de la división es: " + miCalculadora.division(numero1, numero2));
      } catch (error) {
        alert(error.message);
      }
      break;
    default:
      alert("Operación no válida.");
  }
}
