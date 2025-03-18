import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router";

interface ModalProp {
  isOpen?: boolean;
  onClose?: () => void;
  pokemonName: string;
}

const FormModal: React.FC<ModalProp> = ({ isOpen, onClose, pokemonName }) => {
  const [name, setName] = useState("");
  const [pokemonCaught, setPokemonCaught] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Check if the pressed key is a space (key code 32)
    if (e.key === ' ') {
      e.preventDefault(); // Prevent the default action (adding a space)
    }
  };

  const handleInput = (name: string, pokemon: string) => {
    setName(name);
    setPokemonCaught(pokemon);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    localStorage.setItem("name", name);
    localStorage.setItem("pokemon", pokemonCaught);

    if (onClose) {
      onClose();
    }

    navigate("/my-pokemon");
  };

  if (!isOpen) return null;

  return (
    <div className="flex flex-col border-4 rounded-2xl w-64 h-72 text-center bg-[#D9D9D9] text-black m-auto">
      <div className="flex flex-row-reverse m-auto w-full h-full relative">
        <div
          className="flex flex-col w-fit hover:bg-red-300 border absolute m-1"
          onClick={onClose}
        >
          <button>
            <XMarkIcon className="w-6 m-auto" />
          </button>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col p-3 h-fit m-auto "
        >
          <label htmlFor="name">Name:</label>

          <input
            type="text"
            id="name"
            onChange={(e) => handleInput(e.target.value, pokemonName)}
            onKeyDown={handleKeyDown}
            className="border bg-white p-1 px-2"
          />

          <button
            type="submit"
            className="border-4 w-20 mx-auto my-3 hover:bg-gray-500"
          >
            OK
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
