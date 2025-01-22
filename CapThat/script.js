const memeArray = [
    "https://i.imgur.com/bSi4xLb.png",
    "https://i.imgur.com/6y0G7N0.png",
    "https://i.imgur.com/LXnRao1.png",
    "https://i.imgur.com/Qqoxh1N.png"
];

const captionsArray = [
    "When you finally understand the code but it's 3 AM 🧑‍💻",
    "Me waiting for my code to compile... ⏳",
    "Coding all night, debugging all day 🖥️",
    "Error 404: Motivation not found 😅",
    "My code works... I don’t know why, but it works! 🤷‍♂️",
    "When you fix a bug but 5 more appear 🐞🐞🐞",
    "Ctrl + Z is my superpower ⚡",
    "That moment when the professor says: 'It’s easy!' 🙃",
    "Coding level: Adding comments to make it look like I know what I’m doing 📝",
    "Turning coffee into code since forever ☕💻"
  ];

let img = document.getElementById("random-meme");
let heading2 = document.getElementById("random-caption");
let button = document.getElementById("generator-button");

button.addEventListener("click", function() {
    let randomNumber1 = Math.floor(Math.random() * memeArray.length);
    let randomNumber2 = Math.floor(Math.random() * memeArray.length);
    img.src = memeArray[randomNumber1];
    heading2.innerHTML = captionsArray[randomNumber2];
});
