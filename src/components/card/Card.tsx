import React from "react";
import { uppercaseFirstLetter } from "../../service/utilFunctions";

interface CardProps {
  name: string;
  imgUrl: string;
  pokemon?: string;
}

const Card: React.FC<CardProps> = ({ name, imgUrl, pokemon }) => {
  return (
    <div className="mx-5 ">
      <div className="flex flex-col w-fit">
        <a href={`/detail/${pokemon}`}>
          <img
            src={imgUrl}
            alt={`pokemon-${name}`}
            className="w-44 border-4 border-black rounded-2xl"
          />
        </a>
        <h1 className="text-2xl w-full text-center">
          {uppercaseFirstLetter(name)}
        </h1>
        {name ==pokemon ? (
          <p className="hidden text-center text-lg">
          </p>
        ) : (
          <p className="text-center text-lg">
            ({uppercaseFirstLetter(pokemon!)})
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
