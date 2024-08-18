import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className='bg-blue-600 text-white py-2 font-semibold px-4 rounded hover:bg-blue-700 transition duration-300'
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
