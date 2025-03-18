import React from "react";
import { usePokemonData } from "../../hooks/usePokemonData";
import { useParams } from "react-router";
import { usePokemonType } from "../../hooks/usePokemonType";
import { PokemonType } from "../../service/detail/type";
import DescBox from "../../components/descBox/DescBox";
import { uppercaseFirstLetter } from "../../service/utilFunctions";

const Detail: React.FC = () => {
  // const {pokemonData, pokemonName, setPokemonName } = usePokemonData();
  const { pokeName } = useParams();
  let newName: string | undefined = pokeName!;
  const { pokemonData } = usePokemonData(newName);
  const { pokemonType } = usePokemonType(pokemonData?.types!);

  // console.log({ pokemonData });
  // console.log({ pokemonType });

  return (
    <div className="flex flex-col mx-auto">
      <title>{uppercaseFirstLetter(newName) + " - Poke Gotcha File"}</title>

      <div className="flex flex-col mx-auto my-5">
        <img
          src={pokemonData?.sprites.other["dream_world"].front_default}
          alt={pokemonData?.name}
          className="h-44 w-44 object-contain border-4 border-black rounded-2xl"
        />
        <div className="my-1 w-full">
          {pokemonType?.map((item: PokemonType) => (
            <img
              src={item.sprites["generation-iv"]["diamond-pearl"].name_icon}
              alt={"type-" + item.name}
              className="w-full border-4 border-gray-500 rounded-2xl my-2"
            />
          ))}
        </div>
      </div>

      <div className="flex flex-row md:flex-col gap-4 md:gap-0 min-w-[400px]">
        <DescBox title="Profile">
          <div className="flex flex-row">
            <ul>
              <li>Name</li>
              <li>Height</li>
              <li>Weight</li>
            </ul>
            <ul className="mx-5">
              <li>:</li>
              <li>:</li>
              <li>:</li>
            </ul>
            <ul className="text-end">
              <li>{pokemonData?.name.toUpperCase()}</li>
              <li>{pokemonData?.height}</li>
              <li>{pokemonData?.weight}</li>
            </ul>
          </div>
        </DescBox>

        <DescBox title="Abilities">
          <div className="flex flex-row h-full items-center justify-center ">
            <ul className="flex flex-col h-fit text-center w-fit ">
              {pokemonData?.abilities?.map((item) => (
                <li>{uppercaseFirstLetter(item.ability.name)}</li>
              ))}
            </ul>
          </div>
        </DescBox>
      </div>

      <DescBox title="Stats">
        <div className="flex flex-row">
          <ul>
            {pokemonData?.stats.map((item) => (
              <li>{uppercaseFirstLetter(item.stat.name)}</li>
            ))}
          </ul>
          <ul className="mx-2">
            {pokemonData?.stats.map(() => (
              <li> : </li>
            ))}
          </ul>
          <ul className="text-end">
            {pokemonData?.stats.map((item) => (
              <li>{item.base_stat}</li>
            ))}
          </ul>
        </div>
      </DescBox>

      <a href={`/catch/${newName}`} className="mx-auto my-2">
        <div className="bg-amber-300 w-36 h-14 pt-3 px-3 border-4 border-black text-blue-800 text-2xl font-bold font-fontdiner rounded-2xl hover:bg-gray-100 hover:text-red-600">
          <p className="m-auto align-middle text-center">Catch!</p>
        </div>
      </a>
    </div>
  );
};

export default Detail;
