import React, { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode; // Define the type for children
  title: string;
}

const DescBox: React.FC<WrapperProps> = ({ children, title }) => {
  return (
    <div
      className={`wrapper flex flex-col rounded-2xl border-4 border-black w-full min-h-36 md:w-[400px] mx-auto my-2 md:justify-start text-xl p-3`}
    >
      <h1 className="text-2xl font-medium w-full mx-auto underline text-left md:text-center mb-0 md:mb-3">{title}</h1>
      <div className=" h-full w-full my-auto">{children}</div>
    </div>
  );
};

export default DescBox;
