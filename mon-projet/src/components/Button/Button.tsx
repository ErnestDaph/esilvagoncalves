import React, { useState } from "react";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", children, onClick }) => {
  const [currentVariant, setCurrentVariant] = useState<ButtonVariant>(variant);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentVariant(currentVariant === "primary" ? "secondary" : "primary");
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${styles.base} ${
        currentVariant === "primary" ? styles.primary : styles.secondary
      }`}
    >
      {children}
    </button>
  );
};

export default Button;