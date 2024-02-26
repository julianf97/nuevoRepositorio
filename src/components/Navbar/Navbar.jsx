import { useContext, useState, useEffect } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { motion, useAnimation } from "framer-motion";
import logo from "../../../public/letrasLogo.png";
import { OpenNavbarContext } from "../../context/OpenNavbarContext";
import { Link } from "react-router-dom";
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
      setNavbarHeight(8);
    } else {
      setNavbarHeight(10);
    }

    controls.start({ height: `${navbarHeight}vh`, transition: { duration: 0.2 } });
  }, [scrollPosition, navbarHeight, controls]);

  const handleScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = -5;
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

  const handleClick = (elementId) => {
    const currentPath = window.location.pathname;
    if (currentPath === "/") {
      handleScrollTo(elementId);
    } else {
      handleExitNavbar();
      setTimeout(() => {
        window.history.back();
        setTimeout(() => {
          handleScrollTo(elementId);
        }, 500); // Espera para asegurar que la navegación se complete antes de hacer scroll
      }, 300); // Espera para asegurar que la barra de navegación se cierre completamente antes de navegar
    }
  };

  return (
    <motion.nav
      className={`contenedorGralNavbar ${isOpen ? "open" : ""}`}
      style={{ height: `${navbarHeight}vh` }}
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
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                onClick={() => handleClick("home")}
              >
                <Link to="/">Home</Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                onClick={() => handleClick("projects")}
              >
                <Link to="/">Projects</Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                onClick={() => handleClick("blog")}
              >
                <Link to="/">Blog</Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                onClick={() => handleClick("about")}
              >
                <Link to="/">About</Link>
              </motion.li>
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
