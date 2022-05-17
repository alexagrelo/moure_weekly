/*
 * Reto #6
 * INVIRTIENDO CADENAS
 * Fecha publicación enunciado: 07/02/22
 * Fecha publicación resolución: 14/02/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea un programa que invierta el orden de una cadena de texto sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */


const originalString = 'supercalifragilisticexpialidocious';

// 1. Convertir el String en Array de caracteres
let splitted = originalString.split('');
// console.log(splitted);

// 2. Convertir el Array de caracteres en Cadena de caracteres de orden invertido
// MÉTODO DIRECTO -> No válido para Challenge06.js
// let reversed = splitted.reverse();
// console.log(reversed);

// MÉTODO NO DIRECTO -> Válido para Challenge06.js
// let manuallyReversed = splitted.reduce((prev, curr) => {
//     console.log(prev, curr);
//     return curr + prev;
// });
// console.log(manuallyReversed);

// 3. Invertir array manualmente
let reversed = '';
for (let i = 0; i < splitted.length; i++) { 
    reversed += splitted[splitted.length - i - 1];
}
console.log(reversed);
