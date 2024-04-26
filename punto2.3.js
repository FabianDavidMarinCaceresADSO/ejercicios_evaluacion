export function contarNumerosPares(numeros) {
  let contador = 0;
  for (let numero of numeros) {
    if (numero % 2 === 0) {
      contador++;
    }
  }
  return contador;
}

export function promedioNumerosPares(numeros) {
  let suma = 0;
  let cantidad = 0;
  for (let numero of numeros) {
    if (numero % 2 === 0) {
      suma += numero;
      cantidad++;
    }
  }
  return cantidad === 0 ? 0 : suma / cantidad;
}
