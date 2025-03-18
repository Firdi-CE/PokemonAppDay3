import axiosWithConfig from "../api";
import { Pokemon, Result, Root } from "../type";

export const getPokemonIndex = async (page:number) => {
    const limit = 10;
    const offset=page*limit
  try {
    const response = await axiosWithConfig.get(
      `/pokemon?limit=${limit}&offset=${offset}`
    );
    
    return response.data as Root | undefined
  } catch (error) {

  }
};

export const getPokemonSingular = async (name:string) => { // TODO figure out the parameter

  try {
    const response = await axiosWithConfig.get(
      `/pokemon/${name}`
    );
    return response.data as Pokemon | undefined
  } catch (error) {

  }
};

// export const getPokemon = async (id:number) => {

//     try {
//       const response = await axiosWithConfig.get(
//         `pokemon/${id}`
//       );
//       return response.data as Pokemon | undefined
//     } catch (error) {
  
//     }
//   };