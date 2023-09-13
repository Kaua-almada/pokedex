import React from 'react';
import './Imagem.css';
import axios from 'axios';



var pokeImagemReturn: string;

async function PokemonEscolhido() {
    const url: string = "https://pokeapi.co/api/v2/pokemon/149/"

    await axios.get(
        url,
        {
            headers: {
                Accept: "application/json"
            }
        }
    ).then(
        async function (response) {
          var  pokemonImagem: string = response.data.sprites.front_default;

                pokeImagemReturn = pokemonImagem
                

       return pokeImagemReturn;
          
          
        }
    )
}

PokemonEscolhido();
function Imagem(){
    return(
        <div>
        <h1>dragonite</h1>
        <img src={pokeImagemReturn} alt="" />
        </div>
  
    );
}

export default Imagem;