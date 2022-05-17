/*
 * Reto #7
 * CONTANDO PALABRAS
 * Fecha publicación enunciado: 14/02/22
 * Fecha publicación resolución: 21/02/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que cuente cuantas veces se repite cada palabra y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at felis a elit faucibus hendrerit at nec metus. Cras condimentum tortor vel risus porttitor, ac convallis odio hendrerit. Integer lacus tortor, ultricies vitae dolor non, lobortis fermentum odio. Morbi ac ullamcorper sapien, a congue leo. Praesent id eros vitae nibh suscipit auctor. Duis libero justo, posuere interdum neque nec, rhoncus bibendum odio. Mauris bibendum quis est ac feugiat. Quisque non dignissim massa, vitae interdum purus. Vivamus molestie ut risus sit amet bibendum. Pellentesque sit amet posuere urna. Vivamus sodales, eros et dignissim pellentesque, augue felis sagittis lacus, eget faucibus metus ipsum a magna. Nullam vitae lacinia nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.';
let splitted = TEXT.split(' ');
splitted = splitted.map(word => word.toLowerCase());
splitted = splitted.map(word => word.replace(/[^a-z]/g, ''));
splitted = splitted.filter(word => word.length > 0);
let countedWords = {};
splitted.forEach(word => {
    if (countedWords[word]) {
        countedWords[word]++;
    } else {
        countedWords[word] = 1;
    }
});
console.log(countedWords);
// console.log(splitted);
