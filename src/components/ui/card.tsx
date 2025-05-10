import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card = ({ children, className = "" }: CardProps) => (
  <div className={`bg-gray-50 border border-gray-200 rounded-2xl shadow-sm ${className}`}>
    {children}
  </div>
);
