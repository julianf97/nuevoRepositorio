import { motion } from "framer-motion";
import "./_openNavbar.scss";
import { OpenNavbarContext } from "../../context/OpenNavbarContext";
import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom"

export default function OpenNavbar() {
  const { isMenuOpen } = useContext(OpenNavbarContext);

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
            <Link to="/portfolio">
              <li className="btnNav">Home</li>
            </Link>
            <Link to="/proyects">
              <li className="btnNav">Proyects</li>
            </Link>
            <Link to="/about">
              <li className="btnNav">About</li>
            </Link>
            <Link to="/">
              <li className="btnNav">Blog</li>
            </Link>
          </ul>
        </nav>
      </div>
    </motion.div>
  );
}
