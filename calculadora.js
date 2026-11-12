function sumar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

// TODO (Estudiante): Agrega aquí la función dividir(a, b) y expórtala abajo

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { sumar, multiplicar };
}
