import React from "react";
import { HomeIcon, HeartIcon } from "@heroicons/react/24/solid";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-row bg-red-600 text-white w-full h-[60px] md:h-[80px] fixed bottom-0">
      <a
        href="/"
        className="bg-white hover:bg-blue-300 border-3 border-zinc-900 text-black w-10 h-10 rounded-full m-auto"
      >
        <HomeIcon className="m-1" />
      </a>
      <a
        href="/my-pokemon"
        className="bg-white hover:bg-red-800 border-3 border-zinc-900 text-black w-10 h-10 rounded-full m-auto"
      >
        <HeartIcon className="m-1 " />
      </a>
    </div>
  );
};

export default Footer;
