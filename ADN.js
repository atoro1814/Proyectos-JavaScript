const piezasADN = ["A", "C", "G", "T"];
let miAdn = [];
let pieza = "";

for (let j = 1; j <= 24 ; j++){
    for(let i = 0; i < 3; i++){
        let piezaIndex = Math.floor(Math.random() * 4);
        pieza = pieza + piezasADN[piezaIndex];
    }
    miAdn.push(pieza);
    pieza = "";
}

    
    



console.log(miAdn);