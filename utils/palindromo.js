//FUNCIÓN A PROBAR

const palindromo = (string) => {
   return string
    .split('')
    .reverse()
    .join('')
}


/*function palindromo(texto){

    const textoreversible= texto.split('').reverse().join('');

    return texto == textoreversible;
}
*/
module.exports = palindromo;


