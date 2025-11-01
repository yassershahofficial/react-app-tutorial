import React from "react";

interface ButtonProps {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const ButtonColors = ({ children, color="primary", onClick }: ButtonProps) => {
  return (
    <div>
      <button type="button" className={`btn btn-${color}`} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default ButtonColors;
