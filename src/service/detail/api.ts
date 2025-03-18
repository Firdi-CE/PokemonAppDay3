import axiosWithConfig from "../api";
import { PokemonType } from "./type";

export const getPokemonType = async (typeName:string) => { // TODO figure out the parameter

    try {
      const response = await axiosWithConfig.get(
        `/type/${typeName}`
      );
      return response.data as PokemonType | undefined
    } catch (error) {
  
    }
  };