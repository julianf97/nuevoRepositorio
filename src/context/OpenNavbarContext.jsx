/* eslint react/prop-types: 0 */
import { createContext, useState } from "react";

export const OpenNavbarContext = createContext();

export const OpenNavbarProvider = ({ children }) => {
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
    <OpenNavbarContext.Provider
      value={{ isOpen, setOpen, handleClickOpen, handleExitNavbar, isMenuOpen, setMenuOpen }}
    >
      {children}
    </OpenNavbarContext.Provider>
  );
};