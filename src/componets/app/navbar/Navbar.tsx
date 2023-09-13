import React from "react";
import axios from "axios";
import './Card.css';



interface Pokemon{
    name?: string;
    url?: string;
}

var pokeImgReturn: string;
var pokeNameReturn: string;

async function GetPokemon(){
    const url: string = "https://pokeapi.co/api/v2/"

   


    await axios.get(
        url,
        {
            headers: {
                Accept: "application/json",
            }
        }
    ).then(
        async function (response){
                var pokemonUrl: string = response.data.pokemon;
                
              await axios.get(
               pokemonUrl, {
                headers: {
                        
                    Accept: "application/json"
                }
               }
              ).then(
                async function (response){
                    var pokeNameArray = [];
                    var pokeName = [];
                    var pokeUrl = [];

                    pokeNameArray = response.data.results

                   
                   pokeName = pokeNameArray.map((pokemon: Pokemon)=>{
                       
                       return  pokemon.name
                      
                    })
                        pokeNameReturn = pokeName[0]
                    pokeUrl = pokeNameArray.map((pokemon: Pokemon)=>{
                    return pokemon.url
                    })
                    
                   await axios.get(
                    pokeUrl[0],
                    {
                        headers: {
                            Accept: "application/json"
                        }
                    }
                   ).then(
                    
                    function (response){
                        var pokeImgUrl: string;

                        pokeImgUrl = response.data.sprites.front_default
                        pokeImgReturn = pokeImgUrl

                        return pokeImgUrl;
                    }
                   ).catch()
                    var pokeObject: object;
                   pokeObject = {
                        name: pokeNameReturn,
                        img: pokeImgReturn
                   }
                    return pokeObject;

                        
                }
                ).catch()
        }
    ).catch();



}

GetPokemon();

function Card(){
return(
    <div>
    <h1> {pokeNameReturn} </h1>
    <img src={pokeImgReturn} alt=""></img>
    </div>
    
);

}

export default Card;