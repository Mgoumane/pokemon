// import :
import fetchPokemon from "./script/fetchPokemon.js";
import tirerNbHasard from "./script/tirerNbHasard.js";

// QuerySelectors
let boutonLancer = document.querySelector("#boutonLancer");
let imageCartePricipale = document.querySelector('.imageCartePricipale');
let nomPokemonPrincipal = document.querySelector('.nomPokemonPrincipal');
let niveauPokemonPrincipal = document.querySelector('.niveauPokemonPrincipal');
let iconCartePricipale = document.querySelector('.iconCartePricipale');
let descriptionCartePricipale = document.querySelector('.descriptionCartePricipale');
let cardPrincipal = document.querySelector('.cardPrincipal');

// Mon jeu
const pokemonGame = async () => {
    let reponseFetch = await fetchPokemon();
    let pokemons = reponseFetch.pokemons;
    let pokemonsGagnes = [];
    // console.log(pokemons);
    let randomPokemonAccueil = pokemons[tirerNbHasard(1,pokemons.length) - 1] ;
    imageCartePricipale.src=randomPokemonAccueil.image;
    nomPokemonPrincipal.innerHTML=randomPokemonAccueil.name;
    niveauPokemonPrincipal.innerHTML= "niv: " + randomPokemonAccueil.level;
    iconCartePricipale.innerHTML = randomPokemonAccueil.abilities[0].icon;
    descriptionCartePricipale.innerHTML = randomPokemonAccueil.abilities[0].description;
    cardPrincipal.style.background = randomPokemonAccueil.background_color;

    boutonLancer.onclick = () => {
        let randomPokemon;
        let defilementDesCartes = setInterval(function () {
            // J'ai mis le (-1) à la fin car l'indexation des tableaux commence à 0
            randomPokemon = pokemons[tirerNbHasard(1,pokemons.length) - 1] ;
            // console.log('je change toutes les 1 secondes');
            imageCartePricipale.src=randomPokemon.image;
            nomPokemonPrincipal.innerHTML=randomPokemon.name;
            niveauPokemonPrincipal.innerHTML= "niv: " + randomPokemon.level;
            iconCartePricipale.innerHTML = randomPokemon.abilities[0].icon;
            descriptionCartePricipale.innerHTML = randomPokemon.abilities[0].description;
            cardPrincipal.style.background = randomPokemon.background_color;
        }, 100);
        defilementDesCartes;//Je dois faire durer cette méthode 15 secondes
        let boutonStop = document.querySelector('.boutonStop');
        boutonStop.onclick = () => {
            clearInterval(defilementDesCartes);
            // Le pokemon qui s'affiche après le bouton stop 
            pokemonsGagnes.push(randomPokemon);
            console.log(pokemonsGagnes);
        };
    };
}
pokemonGame();




