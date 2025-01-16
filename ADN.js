const piezasADN = ["A", "C", "G", "T"];
miAdn = [];
let pieza = "";

for(let i = 0; i < 3; i++){
    piezaIndex = Math.floor(Math.random() * 4);
    pieza = pieza + piezasADN[piezaIndex];
    miAdn.push(pieza);
    
}