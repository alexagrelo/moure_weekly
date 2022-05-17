/*
 * Reto #9
 * CÓDIGO MORSE
 * Fecha publicación enunciado: 02/03/22
 * Fecha publicación resolución: 07/03/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que sea capaz de transformar texto natural a código morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en https://es.wikipedia.org/wiki/Código_morse.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const TEXT = 'Lorem ipsum dolor sit amet';
const MORSE = '-... ..- . -. .- ... / -. --- -.-. .... . ...';
const textToTranslate = MORSE;
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,';
const ALPHABET_MORSE = {
    A: '.-',
    B: '-...',
    C: '-.-.',
    D: '-..',
    E: '.',
    F: '..-.',
    G: '--.',
    H: '....',
    I: '..',
    J: '.---',
    K: '-.-',
    L: '.-..',
    M: '--',
    N: '-.',
    O: '---',
    P: '.--.',
    Q: '--.-',
    R: '.-.',
    S: '...',
    T: '-',
    U: '..-',
    V: '...-',
    W: '.--',
    X: '-..-',
    Y: '-.--',
    Z: '--..',
    ' ' : '/',
    '0': '-----',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '.': '.-.-.-',
    ',': '--..--'
}

// console.log(ALPHABET_MORSE);

function isMorse(text) {
    let splitted = text.split(' ');
    return splitted.every(letter => {
        if(letter === '') {
            letter = ' ';
            // console.log('espacio');
        }
        return Object.values(ALPHABET_MORSE).includes(letter);
    });
}

if (isMorse(textToTranslate)) {
    console.log('isMorse');
    console.log(morseToString(textToTranslate));
} else {
    console.log('isNotMorse');
    console.log(stringToMorse(textToTranslate));
}

function morseToString(text) {
    let splitted = text.split(' ');
    console.log(splitted);
    // console.log(splitted.includes(''));
    // console.log(splitted.indexOf(''));
    splitted.forEach(letter => {
        if(letter === '') {
            letter = '-----';
        }
    });
    console.log(splitted);
    return splitted.map(letter =>
        Object.keys(ALPHABET_MORSE).find(key =>
            ALPHABET_MORSE[key] === letter
        )
    ).join('');
}

function stringToMorse(text) {
    text = text.toUpperCase();
    let splitted = text.split(' ');
    let exit = '';
    splitted.forEach(word => {
        let letters = word.split('');
        console.log(letters);
        letters.forEach(letter => {
            exit += ALPHABET_MORSE[letter];
            exit += ' '
        });
        exit += '  ';
    });
    return exit;
}
