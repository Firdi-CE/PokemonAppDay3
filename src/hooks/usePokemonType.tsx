import { useEffect, useState } from "react"
import { PokemonType } from "../service/detail/type"
import { getPokemonType } from "../service/detail/api"
import { Type } from "../service/type"

export const usePokemonType =(typeArray:Type[])=>{
    const [pokemonType, setPokemonType ]=useState<PokemonType[]>()

    const fetchPokemonType = async () => {
        try {

            const promisedData = (typeArray ?? []).map(async (type) => {
                    const responseFinal: PokemonType | undefined = await getPokemonType(
                      type.type.name
                    );
                    return responseFinal as PokemonType;
                  });
            
                  const resolvedData = await Promise.all(promisedData);
            
                  setPokemonType(resolvedData);
                //   console.log({ resolvedData });

            
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        fetchPokemonType();
    },[typeArray])

    return {pokemonType};
}