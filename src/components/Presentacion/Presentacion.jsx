import "./_presentacionMobile.scss";
import "./_presentacionIpad.scss";
import "./_presentacionDesktop.scss";
import { motion } from "framer-motion";
import CV from "../../../public/CV-Julian-Finelli-2024.pdf";
import foto from "../../../public/fotoSinFondo.png";
import video from "../../../public/portfolioBackgroundVideo.webm"
import { useState } from "react";
import { LenguajeContext } from "../../context/LenguajeContext";
import { useContext } from "react";

export default function Presentacion() {
  const [imgAnimationComplete, setImgAnimationComplete] = useState(false);
  const [buttonsAnimationComplete, setButtonsAnimationComplete] = useState(false);
  const [cardAnimationComplete, setCardAnimationComplete] = useState(false);

  const { activeEng } = useContext(LenguajeContext);

  const handleImgAnimationComplete = () => {
    setImgAnimationComplete(true);
  };

  const handleButtonsAnimationComplete = () => {
    setButtonsAnimationComplete(true);
  };

  const handleCardAnimationComplete = () => {
    setCardAnimationComplete(true);
  };

  return (
    <>
    <div className="backgroundContainer"></div>
    <div id="home" className="contenedorGralPresentacion">
      <div className="contenedorAbsolutoVideo">
        <video
          src={video}
          preload="false"
          playsInline
          loop
          muted
          autoPlay
        ></video>
      </div>
      <div className="contenedorInterior">
        <div className="divisor">
          <div className={`contenedorCardFullStack ${buttonsAnimationComplete ? 'show' : ''}`}>
            <motion.div
              initial={{ y: "-2vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
              onAnimationComplete={handleCardAnimationComplete}
              className="cardFullStack"
            >
              <span className="text">FullStack Developer</span>
            </motion.div>
          </div>
          <motion.div
            className="contenedorTituloPresentacion"
            initial={{ x: "-10vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 1.5, ease: "easeInOut" }}
          >
            <h1>
              {activeEng ? "Hello 👋! I'm " : "Hola 👋! Soy "}
              <span className="theBest">Julián Finelli </span>{" "}
              <br />
              {activeEng ? "Web Developer " : "Desarrollador Web "}
            </h1>
          </motion.div>
          <motion.div
            className="contenedorParrafo"
            initial={{ x: "-10vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 1.5, ease: "easeInOut" }}
          >
            <p>
              {activeEng ? "With over 3 years of experience, my professional focus is on excellence and quality in every phase of development. I have the comprehensive ability to manage projects from database design to backend and frontend implementation. " : "Con más de 3 años de experiencia, mi enfoque profesional se centra en la excelencia y la calidad en cada fase del desarrollo. Tengo la capacidad integral para manejar proyectos desde el diseño de bases de datos hasta la implementación del backend y frontend."}
            </p>
            <div className={`contenedorBotones ${buttonsAnimationComplete ? 'show' : ''}`}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                onAnimationComplete={handleButtonsAnimationComplete}
              >
                <a
                  href="https://api.whatsapp.com/send?phone=5493364024379"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="btnResumen">
                    {activeEng ? "Contact me" : "Contactame "}
                  </div>
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                onAnimationComplete={handleButtonsAnimationComplete}
              >
                <a href={CV} target="_blank">
                  <div className="btnResumen">{activeEng ? "My Resume" : "Mi CV "}</div>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="contenedorImgPresentacion">
          <motion.div
            className="cardImgPresentacion"
            initial={{ x: "10vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 1.5, ease: "easeInOut" }}
            onAnimationComplete={handleImgAnimationComplete}
          >
            <img src={foto} alt="Foto de perfil" />
          </motion.div>
        </div>
      </div>
    </div>
    </>
  );
}
