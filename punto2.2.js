export function esPrimo(numero) {
  if (numero <= 1) return false;
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) return false;
  }
  return true;
}

export function contarNumerosPrimos(numeros) {
  let contador = 0;
  for (let numero of numeros) {
    if (esPrimo(numero)) {
      contador++;
    }
  }
  return contador;
}

export function promedioNumerosPrimos(numeros) {
  let suma = 0;
  let cantidad = 0;
  for (let numero of numeros) {
    if (esPrimo(numero)) {
      suma += numero;
      cantidad++;
    }
  }
  return cantidad === 0 ? 0 : suma / cantidad;
}
