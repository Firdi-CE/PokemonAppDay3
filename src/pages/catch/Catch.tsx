import React, { useState } from "react";
import { useParams } from "react-router";
import { usePokemonData } from "../../hooks/usePokemonData";
import BackDrop from "../../assets/catchBg.webp";
import MiscButton from "../../components/buttons/miscButton";
import FormModal from "../../components/formModal/FormModal";

const Catch: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { pokeName } = useParams();
  let newName: string | undefined = pokeName!;
  const { pokemonData } = usePokemonData(newName);
  return (
    <div className="flex flex-row w-full h-full">
      <title> Catch Pokemon - Poke Gotcha File</title>

      <div className="flex flex-col w-full m-2 ">
        <div className="flex flex-row mx-auto relative border  w-fit place-items-center justify-center">
          <img
            src={BackDrop}
            alt=""
            className="h-[450px] w-[300px] object-cover m-auto z-0"
          />

          <div className="flex flex-col-reverse h-full w-full absolute mx-auto">
            <img
              src={pokemonData?.sprites.front_default}
              alt=""
              className="z-10 overflow-visible w-[180px] h-[180px] mx-auto"
            />
          </div>

          <div className="flex flex-col items-center justify-center mx-auto absolute h-fit z-20">
            <FormModal isOpen={isModalOpen} onClose={closeModal} pokemonName={newName}/>
          </div>
        </div>

        <div className="flex flex-col mx-auto">
          <button onClick={openModal}>
            <MiscButton
              text="Catch"
              colorClass="text-[#ff7700] border-[#ff7700]"
              path="#"
            />
          </button>

          <MiscButton
            text="See Data"
            colorClass="text-[#0077FF] border-[#0077FF]"
            path={`/detail/${newName}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Catch;
