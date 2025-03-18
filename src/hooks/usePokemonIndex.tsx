import { useEffect, useState } from "react";
import {
  PaginationInfo,
  Pokemon, Root
} from "../service/type";
import { getPokemonIndex, getPokemonSingular } from "../service/home/api";

export const usePokemonIndex = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>();
  const [paginationInfo, setPaginationInfo] = useState<PaginationInfo>({
    page: 0,
    total_pages: 20,
    total_results: 10,
  });

  const fetchPokemon = async () => {
    try {
      const response: Root | undefined = await getPokemonIndex(
        paginationInfo.page
      );

      const promisedData = (response?.results ?? []).map(async (pokemon) => {
        const responseFinal: Pokemon | undefined = await getPokemonSingular(
          pokemon.name
        );
        return responseFinal as Pokemon;
      });

      const resolvedData = await Promise.all(promisedData);

      setPokemonList(resolvedData);
      // console.log({ resolvedData });

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [paginationInfo]);

  return { pokemonList, paginationInfo, setPaginationInfo };
};
