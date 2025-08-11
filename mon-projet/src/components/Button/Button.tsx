import React, { useState } from "react";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", children }) => {
  const [currentVariant, setCurrentVariant] = useState<ButtonVariant>(variant);

  const handleClick = () => {
    setCurrentVariant(currentVariant === "primary" ? "secondary" : "primary");
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