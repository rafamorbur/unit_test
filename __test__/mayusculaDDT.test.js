//TEST

//const isUpperCase = require('../utils/esmayuscula.js');

function isUpperCase(texto){
  return (texto == texto.toUpperCase());
}

describe('TEST DE MAYUSCULA', () => {
    test.each`
     character2  | expectedResult    
     ${"GIRL"}  | ${true}
     ${"BYE"}   | ${true}
     ${"hello"} | ${false}
     ${"rafA"}  | ${false}
    
     `('$character2 deberia devolver $expectedResult', ({character2, expectedResult}) => {
      expect(isUpperCase(character2)).toBe(expectedResult);
    });
  });

