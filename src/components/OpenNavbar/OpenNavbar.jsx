import { motion } from "framer-motion";
import "./_openNavbar.scss";
import { OpenNavbarContext } from "../../context/OpenNavbarContext";
import { useEffect } from "react";
import { useContext } from "react";

export default function OpenNavbar() {
  const { isMenuOpen, handleExitNavbar } = useContext(OpenNavbarContext);

  const handleScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = -5; // Ajuste de compensación de desplazamiento
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      handleExitNavbar()
    }
  };


  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    // Habilitar scroll cuando el componente se desmonta
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  return (
    <motion.div
      className="contenedorGral"
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: isMenuOpen ? 0 : "-100vw", opacity: isMenuOpen ? 1 : 0 }}
      transition={{ type: "tween", duration: 1.5, ease: "easeInOut" }}
    >
      <div className="openNavbarContainer">
        <div className="cabeceraOpenNavbarContainer">
          <div className="contenedorLogoLetras"/>
        </div>
        <nav className="navegadorNavbarOpen">
          <ul className="contenedorBotones">
            <li onClick={ () => handleScrollTo("home")} className="btnNav">Home</li>
            <li onClick={ () => handleScrollTo("projects")} className="btnNav">Proyects</li>
            <li onClick={ () => handleScrollTo("blog")} className="btnNav">Blog</li>
            <li onClick={ () => handleScrollTo("about")} className="btnNav">About</li>
          </ul>
        </nav>
      </div>
    </motion.div>
  );
}
