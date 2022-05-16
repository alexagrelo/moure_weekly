/*
 * Reto #5
 * ASPECT RATIO DE UNA IMAGEN
 * Fecha publicación enunciado: 01/02/22
 * Fecha publicación resolución: 07/02/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Crea un programa que se encargue de calcular el aspect ratio de una imagen a partir de una url.
 * - Nota: Esta prueba no se puede resolver con el playground online de Kotlin. Se necesita Android Studio.
 * - Url de ejemplo: https://raw.githubusercontent.com/mouredev/mouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una imagen de 1920*1080px.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

let img = new Image();
let width = 0;
let height = 0;

const RATIOS = ["9/16", "1/1", "4/3", "5/4", "16/9", "2/1", "3/1", "3/2"];

function greatestCommonDivisor(a, b) {
    let aux;
    while(b != 0) {
        aux = b;
        b = a % b;
        a = aux;
    }
    return a;
}


img.onload = function() {
    if(img.width && img.height) {
        let gcd = greatestCommonDivisor(img.width, img.height);
        let simplifiedWidth = img.width / gcd;
        let simplifiedHeight = img.height / gcd;
        console.log(`La imagen tiene un aspect ratio de ${simplifiedWidth}/${simplifiedHeight}`);
        let proportion = img.width / img.height;
        let fixedProportion = proportion.toFixed(2);
        console.log(`La imagen tiene una proporción de ${fixedProportion}:1`);
        RATIOS.forEach((ratio) => {
            if (proportion === eval(ratio)) {
                console.log(`El ratio es standard: ${ratio}`);
            }
        });
    } else {
        console.log('La imagen no se ha cargado correctamente');
    }
}

img.src = "https://raw.githubusercontent.com/mouredev/mouredev/master/mouredev_github_profile.png";
