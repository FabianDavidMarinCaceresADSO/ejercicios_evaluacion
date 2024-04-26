// Diseñar un modulo llamado calculadora, en este módulo debe exportar una
// clase con los siguientes metodos:
// a.Suma
// b.Resta
// c.Multiplicación
// d.División
// Al momento de realizar cada operación el sistema debe validar que no se
// presenten errores, si al momento de su ejecución se presenta algún error, el
// sistema debe enviar un mensaje personalizado indicando el tipo de error
// para que el usuario lo solucione y continue realizando los cálculos básicos
// de las matemáticas

import Calculadora from './calculadora.js';

try {
  console.log("Suma:", Calculadora.suma(5, 3));
  console.log("Resta:", Calculadora.resta(5, 3));
  console.log("Multiplicación:", Calculadora.multiplicacion(5, 3));
  console.log("División:", Calculadora.division(5, 0));
} catch (error) {
  console.error("Error:", error.message);
}
