const data = require('../pokemon.json');
const selectButton1 = document.getElementById("select-button1");
const selectButton2 = document.getElementById("select-button2");
const pokemonImage1 = document.getElementById("pokemon-image1");
const pokemonImage2 = document.getElementById("pokemon-image2");

selectButton1.addEventListener("click", getPokemon(3, 1));
selectButton2.addEventListener("click", getPokemon(4, 2));

function getPokemon(number, whichImage) {
    for (var i = 0; i < 151; i++) {
        if (data["pokemon"][i][0] == number) {
           if (whichImage == 1) {
            pokemonImage1.src = data["pokemon"][i][3];
           }
           else {
            pokemonImage2.src = data["pokemon"][i][3];
           }
        }
    }
}