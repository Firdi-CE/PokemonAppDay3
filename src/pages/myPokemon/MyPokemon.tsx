import React from "react";
import Card from "../../components/card/Card";
import { usePokemonData } from "../../hooks/usePokemonData";

const MyPokemon: React.FC = () => {
  let myPokeName = localStorage.getItem("name")!;
  let myPokeData = localStorage.getItem("pokemon")!;
  const { pokemonData } = usePokemonData(myPokeData);
  let myPokeImg = pokemonData?.sprites.front_default!;

  return (
    <div className="flex flex-col h-full w-full">
      <title>My Pokemon - Poke Gotcha File</title>

      <div className="m-auto">
        <h1 className="text-3xl text-center">My Pokemon</h1>

        <div className="">
          <div className="flex flex-col my-10">
            {myPokeName != null ? (
              <Card
                name={myPokeName}
                imgUrl={myPokeImg}
                pokemon={pokemonData?.species.name!}
              />
            ) : (
              <h1 className="text-2xl my-10">No Pokemon, go Catch one!</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPokemon;
