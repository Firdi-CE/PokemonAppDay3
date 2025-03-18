import { useEffect, useState } from "react";
import { Pokemon } from "../service/type";
import { getPokemonSingular } from "../service/home/api";

export const usePokemonData = (name: string) => {
  const [pokemonData, setPokemonData] = useState<Pokemon>();
  


  const fetchPokemon = async () => {
    try {
      const response: Pokemon | undefined = await getPokemonSingular(name);
      // console.log({ response });


      setPokemonData(response);


    } catch (error) {
      console.error(error);
    }


  };

  useEffect(() => {
      fetchPokemon();
    }, [name]);

  return { pokemonData };
};
