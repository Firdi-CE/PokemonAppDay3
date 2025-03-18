import React from "react";

interface ButtonProps {
  colorClass: string;
  text: string;
  path?: string;
}

const miscButton: React.FC<ButtonProps> = ({ colorClass, text, path }) => {
  const color = `${colorClass}`;

  return (
    <div>
      <a href={path}>
        <div className={`${color} border-4 px-2 py-1 m-2 w-44 rounded-2xl hover:bg-gray-400`}>
          <p className="m-auto text-center text-3xl">{text}</p>
        </div>
      </a>
    </div>
  );
};

export default miscButton;
