const StringCalculator = require('../src/StringCalculator.js');
describe('StringCalculator', () => {
  let calc;

  beforeEach(() => {
    calc = new StringCalculator();
  });

  test('empty string returns 0', () => {
    expect(calc.add('')).toBe(0);
  });
  test('single number returns the number', () => {
    expect(calc.add('5')).toBe(5);
  });
  test('two numbers returns their sum', () => {
    expect(calc.add('1,2')).toBe(3);
  });
  
});
