import React from "react";
import clsx from "clsx";

const Button = ({ children, onClick, variant = "primary" }) => {
  const baseStyles = "px-4 py-2 rounded-xl font-semibold focus:outline-none transition";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-300 text-gray-900 hover:bg-gray-400",
  };

  return (
    <button onClick={onClick} className={clsx(baseStyles, variants[variant])}>
      {children}
    </button>
  );
};

export default Button;
