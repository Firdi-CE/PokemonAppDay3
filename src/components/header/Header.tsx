import React from "react";
import AppTitle from "../../assets/app-title.png";

const Header: React.FC = () => {
  return (
    <div className="flex flex-col h-[60px] md:h-[80px] border-4 border-y-zinc-800 bg-red-600 justify-center">
      <a href="/" className="w-fit h-fit my-2 mx-auto">
        <img src={AppTitle} alt="" className="w-64 md:w-96 mx-auto" />
      </a>
    </div>
  );
};

export default Header;
