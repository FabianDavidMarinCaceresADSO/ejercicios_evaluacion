export function solicitarNumeros() {
  let numeros = [];
  let cantidad = parseInt(prompt("Ingrese la cantidad de números que desea ingresar:"));
  for (let i = 0; i < cantidad; i++) {
    let numero = parseFloat(prompt("Ingrese el número " + (i + 1) + ":"));
    numeros.push(numero);
  }
  return numeros;
}

export function solicitarOperacion() {
  return prompt("Ingrese la operación que desea realizar:\n a. Sumar los números\n b. Contar los números primos\n c. Contar los números pares\n d. Calcular el promedio de los números primos\n e. Calcular el promedio de números pares");
}
