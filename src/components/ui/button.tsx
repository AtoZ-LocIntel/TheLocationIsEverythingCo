import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className = "", ...props }: ButtonProps) => (
  <button
    className={`bg-orange-600 text-white px-4 py-2 rounded-xl hover:bg-orange-700 transition ${className}`}
    {...props}
  >
    {children}
  </button>
);
