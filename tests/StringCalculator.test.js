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
  // test('intial count without calls is 0', () => {
  //   expect(calc.getCalledCount()).toBe(0);
  // });
  test('total count test', () => {
    calc.add('1,2');
    calc.add('3,4');
    expect(calc.getCalledCount()).toBe(2);
  })
  test('newlines between numbers are ok', () => {
    expect(calc.add('1\n2,3')).toBe(6);
  });
  test('custom semicolon delimiter', () => {
    expect(calc.add('//;\n2;5')).toBe(7);
  });
  test('custom multiply delimiter', () => {
    expect(calc.add('//*\n2*5')).toBe(7);
  });
  //   test('wrong delim placeholder (should fail)', () => {
  //     expect(calc.add('//;\n2;5')).toBe(8);
  //   });
  // test('sum with negative number', () => {
  //   expect(calc.add('2,-2,1')).toBe(1);
  // });
  test('single negative throws listing it', () => {
    expect(() => calc.add('2,-4,3'))
      .toThrow('negatives not allowed: -4');
  });
   // test('single negative throws listing it', () => {
  //   expect(calc.add('//-\n2-4-3')).toBe(9);
  // });
  test('multiple negatives throws listing them', () => {
    expect(() => calc.add('2,-4,3,-5'))
      .toThrow('negatives not allowed: -4,-5');
  });
  
  // test('addition with number greater than 1000', () => {
  //   expect(calc.add('//;\n2;1001;3')).toBe();
  // });
  test('ignore numbers greater than 1000', () => {
    expect(calc.add('2,1001,3')).toBe(5);
  });
  test('ignore numbers greater than 1000 with custom delimiter', () => {
    expect(calc.add('//;\n2;1001;3')).toBe(5);
  });
  // test('wrong delimiter used (should fail)', () => {
  //   expect(calc.add('//[***]\n1**2***3')).toBe(6);
  // });
  test('custom delimiters with brackets', () => {
    expect(calc.add('//[**]\n1**3**2**3')).toBe(9);
  });
});
