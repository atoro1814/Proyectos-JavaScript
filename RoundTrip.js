/* 
¿Hay algún lugar al que siempre hayas querido volar? 🌎

Vamos a usar lo que aprendimos para construir dos objetos para pases de abordar para un viaje de ida y vuelta:

🛫 departTripTicket
🛬 returnTripTicket
Ambos objetos deben tener las siguientes propiedades:

.name para el pasajero.
.from para de dónde está volando el pasajero.
.to para a dónde está volando el pasajero.
.businessClass valor booleano para si está en clase ejecutiva (true/false).
El método .upgrade() cambia la propiedad .businessClass a true o imprime un mensaje si ya es true (por ejemplo, "¡Tu boleto ya es de clase ejecutiva!").
Después de crear estos objetos, usa el método .upgrade() en al menos uno de ellos y luego registra ambos objetos en la consola.

Bonus: ¿Quieres un desafío adicional? Agrega las propiedades .leaveTime y .arriveTime a ambos objetos (enteros del 1 al 24). Luego, define una propiedad de método .flightTime() que calcule e imprima el tiempo de viaje con las propiedades .leaveTime y .arriveTime.
*/

const departTripTicket = {
    name : "Alexander",
    from : "Chile",
    to : "EEUU",
    businessClass : false,
    upgrade(){
        if (this.businessClass){
            console.log("¡Tu boleto ya es de clase ejecutiva!");
        }else{
            this.businessClass = true;
            console.log("¡Felicidades! Has sido ascendido a clase ejecutiva");
        }
    }
}

const returnTripTicket = {
    name : "Alexander",
    from : "EEUU",
    to : "Chile",
    businessClass : false,
    upgrade(){
        if (this.businessClass){
            console.log("¡Tu boleto ya es de clase ejecutiva!");
        }else{
            this.businessClass = true;
            console.log("¡Felicidades! Has sido ascendido a clase ejecutiva");
        }
    }
}


