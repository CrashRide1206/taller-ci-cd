const { sumar, multiplicar, dividir } = require('./calculadora');

describe('Pruebas de la Calculadora', () => {
  test('sumar 2 + 3 debe devolver 5', () => {
    expect(sumar(2, 3)).toBe(5);
  });

  test('multiplicar 2 * 3 debe devolver 6', () => {
    expect(multiplicar(2, 3)).toBe(6);
  });

  test('dividir 6 / 3 debe devolver 2', () => {
    expect(dividir(6,3)).toBe(2);
  });

  test('dividir 6 / 0 debe devolver 2', () => {
    expect(dividir(6,0)).toBe('Error: Division por 0');
  });

  // TODO (Estudiante): Agrega aquí los dos tests para dividir(a, b)
});
