/* eslint react/prop-types: 0 */
import { createContext, useState } from "react";

export const LenguajeContext = createContext();

export const LenguajeProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleExitNavbar = () => {
    setOpen(false);
    setMenuOpen(false);
  };

  const handleClickOpen = () => {
    setOpen((prev) => !prev);
    setMenuOpen((prev) => !prev);
  };
  
  return (
    <LenguajeContext.Provider
      value={{ isOpen, setOpen, handleClickOpen, handleExitNavbar, isMenuOpen, setMenuOpen }}
    >
      {children}
    </LenguajeContext.Provider>
  );
};