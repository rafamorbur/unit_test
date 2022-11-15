//TEST

const palindromo = require('../utils/palindromo.js')

describe('TEST DE PALINDROMO', () => {
    test.each`
      palabra | expectedResult 
      ${"ANA"}     | ${"ANA"}        
      ${"FRAN"}    | ${"NARF"}        
      ${"NAYAN"}   | ${"NAYAN"}
       
    `('$palabra deberia ser $expectedResult', ({palabra, expectedResult}) => {
      expect(palindromo(palabra)).toBe(expectedResult);
    });
  });