import React from "react";
import { usePokemonIndex } from "../../hooks/usePokemonIndex";
import { Pokemon } from "../../service/type";
import Card from "../../components/card/Card";
import PaginationButtons from "../../components/buttons/PaginationButtons";

const Home: React.FC = () => {
  const { pokemonList, paginationInfo, setPaginationInfo } = usePokemonIndex();
    // console.log(pokemonList);

  return (
    <div className="flex flex-col m-auto w-fit">
    <div className="grid grid-cols-2 md:grid-cols-5 m-auto items-center my-auto h-full">
      <title>Poke Gotcha File</title>
      {pokemonList?.map((item: Pokemon) => (
        <div className="m-auto my-8">
          <Card
            name={item.name}
            imgUrl={item.sprites.other["official-artwork"].front_default}
            pokemon={item.species.name}
          />
        </div>
      ))}
      </div>

      <div className="w-full mx-auto">
        <PaginationButtons
          paginationInfo={paginationInfo}
          setPaginationInfo={setPaginationInfo}
        />
      </div>
    </div>
  );
};

export default Home;
