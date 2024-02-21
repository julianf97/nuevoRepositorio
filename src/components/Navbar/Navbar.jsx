import { useContext, useState, useEffect } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { motion, useAnimation } from "framer-motion";
import logo from "../../../public/letrasLogo.png";
import { OpenNavbarContext } from "../../context/OpenNavbarContext";
import "./_navbarMobile.scss";
import "./_navbarIpad.scss";
import "./_navbarDesktop.scss";

export default function Navbar() {

  const [navbarHeight, setNavbarHeight] = useState(10); 
  const [scrollPosition, setScrollPosition] = useState(0);

  const { handleClickOpen, handleExitNavbar, isOpen } = useContext(
    OpenNavbarContext
  );

  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(() => {
    if (scrollPosition > 100) {
      setNavbarHeight(8); // Cambiado a 5% cuando se hace scroll
    } else {
      setNavbarHeight(10); // Vuelve al 10% cuando no se hace scroll
    }

    controls.start({ height: `${navbarHeight}vh`, transition: { duration: 0.2 } }); // Usamos vh en lugar de % para ajustarlo mejor a la ventana
  }, [scrollPosition, navbarHeight, controls]);


  return (
    <motion.nav
      className={`contenedorGralNavbar ${isOpen ? "open" : ""}`}
      style={{ height: `${navbarHeight}vh` }} // Usamos vh en lugar de % para ajustarlo mejor a la ventana
      animate={controls}
    >
      <div className="internoNavbarMobile">
        <div className="contenedorLogo">
          <img src={logo} alt="logo" />
        </div>
        <div className="contenedorLenguajeMobile">ES</div>
        <div className="contenedorLogo">
          <Hamburger
            onToggle={(toggled) => {
              if (toggled) {
                handleClickOpen();
              } else {
                handleExitNavbar();
              }
            }}
            size={25}
            color="#fff"
            rounded
            toggled={isOpen}
          />
        </div>
      </div>
      <div className="internoNavbarDesktop">
        <div className="contenedorLogo">
          <img src={logo} alt="logo" />
        </div>
        <div className="contenedorNavDesktop">
          <div className="internoNavDesktop">
            <ul>
              <li>Home</li>
              <li>Blog</li>
              <li>Proyects</li>
              <li>About</li>
            </ul>
          </div>
        </div>
        <div className="contenedorLenguaje">
          <span>ES</span>
        </div>
      </div>
    </motion.nav>
  );
}
