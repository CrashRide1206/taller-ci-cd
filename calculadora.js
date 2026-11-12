function sumar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a,b){
  if (b==0){
    return "Error: Division por cero";
  }
  else {
    return a/b;
  }
}

// TODO (Estudiante): Agrega aquí la función dividir(a, b) y expórtala abajo

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { sumar, multiplicar, dividir };
}
