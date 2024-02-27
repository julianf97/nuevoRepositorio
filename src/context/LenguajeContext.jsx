/* eslint react/prop-types: 0 */
import { createContext, useState } from "react";

export const LenguajeContext = createContext();

export const LenguajeProvider = ({ children }) => {
  const [activeEng, setActiveEng] = useState(false);

  const handleChangeLenguaje = () => {
    setActiveEng((prev) => !prev)
  };


  return (
    <LenguajeContext.Provider
      value={{ activeEng, setActiveEng, handleChangeLenguaje }}
    >
      {children}
    </LenguajeContext.Provider>
  );
};