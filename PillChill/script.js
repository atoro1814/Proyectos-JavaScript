const quoteList = [
    "Algunas puertas solo se abren desde adentro. La respiración es una forma de acceder a esa puerta.",
    "Lo que hay que enseñar primero, es la respiración.",
    "Recuerda el cielo azul. Puede estar nublado a veces, pero siempre está ahí.",
    "En medio del movimiento y el caos, mantén la quietud dentro de ti.",
    "No podemos controlar el mar, pero podemos aprender a surfear las olas.",
    "Las emociones vienen y van como nubes en un cielo ventoso. La respiración consciente es mi ancla.",
    "Para entender lo inconmensurable, la mente debe estar extraordinariamente tranquila."
  ];
  
  const colors = ["#e81416", "#ffa500", "#faeb36", "#79c314", "#487de7", "#4b369d", "#70369d"];

  
let wrapperDiv = document.getElementById("wrapper");

let quoteText = document.getElementById("quote-text");

let quoteButton = document.getElementById("quote-button");

quoteButton.addEventListener("click", function(){
    let randomIndex = Math.floor(Math.random() * quoteList.length);
    let randomQuote = quoteList[randomIndex];
    quoteText.innerHTML = randomQuote;
    wrapperDiv.style.backgroundColor = colors[randomIndex];
});