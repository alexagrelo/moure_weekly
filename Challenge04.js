/*
 * Reto #4
 * ÁREA DE UN POLÍGONO
 * Fecha publicación enunciado: 24/01/22
 * Fecha publicación resolución: 31/01/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea UNA ÚNICA FUNCIÓN (importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

function area(polygon) {
    switch (polygon.type) {
        case 'triangulo':
            return (polygon.base * polygon.height) / 2;
        case 'cuadrado':
            return polygon.side * polygon.side;
        case 'rectangulo':
            return polygon.base * polygon.height;
        default:
            return 0;
    }
}

poligono_1 = {
    type: 'triangulo',
    base: 10,
    height: 5
}

poligono_2 = {
    type: 'cuadrado',
    side: 10
}

poligono_3 = {
    type: 'rectangulo',
    base: 10,
    height: 5
}

console.log(area(poligono_3));