/*En un archivo script.js, haz lo siguiente:
Crea una variable para seleccionar el elemento con el id "stone".
Crea una variable llamada randomNumber que use Math.floor() y Math.random() para generar un número aleatorio entre 1 y 9.
Usa una estructura if/else if/else para cambiar la propiedad .style.backgroundColor según el valor de randomNumber.
Guía de colores según el número:
Número	Color
1	"red"
2	"orange"
3	"yellow"
4	"green"
5	"blue"
6	"#4169e1"
7	"#00008b"
8	"purple"
9	"black"
Resultado final:
Cuando corras el script, el "stone" del anillo cambiará su color de fondo según un número aleatorio, simulando cómo cambiaría un mood ring según tu estado de ánimo. 🎨
*/

let variable = document.getElementById("stone");
let randomNumber = Math.floor(Math.random() * 9) + 1;


if (randomNumber == 1) {
    variable.style.backgroundColor = "red";
} else if (randomNumber == 2) {
    variable.style.backgroundColor = "orange";
} else if (randomNumber == 3) {
    variable.style.backgroundColor = "yellow";
} else if (randomNumber == 4) {
    variable.style.backgroundColor = "green";
} else if (randomNumber == 5) {
    variable.style.backgroundColor = "blue";
} else if (randomNumber == 6) {
    variable.style.backgroundColor = "#4169e1";
} else if (randomNumber == 7) {
    variable.style.backgroundColor = "#00008b";
} else if (randomNumber == 8) {
    variable.style.backgroundColor = "purple";
} else {
    variable.style.backgroundColor = "black";
}


