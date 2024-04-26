export const expresiones = {
  amex: /^3[47][0-9]{13}$/,
  diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
  discover: /^6011[0-9]{12}$/,
  mastercard: /^5[1-5][0-9]{14}$/,
  visa: /^4[0-9]{15}$/
};

export function validarTipo(numero) {
  for (let tipo in expresiones) {
    if (expresiones[tipo].test(numero)) {
      return tipo;
    }
  }
  return "Desconocido";
}
