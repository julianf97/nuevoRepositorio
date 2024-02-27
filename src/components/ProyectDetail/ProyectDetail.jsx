import "./_proyectDetailDesktop.scss"
import "./_proyectDetailIpad.scss"
import "./_proyectDetailMobile.scss"

import { useContext, useEffect } from "react";
import { OpenNavbarContext } from "../../context/OpenNavbarContext";
import OpenNavbar from "../OpenNavbar/OpenNavbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { arrayProjectsPage } from "../../data/arrayProyectsPage";
import { LenguajeContext } from "../../context/LenguajeContext";

export default function ProyectDetail() {
  const { id } = useParams(); 

  const project = arrayProjectsPage.find(project => project.id === id);

  const { activeEng } = useContext(LenguajeContext);

  const { isMenuOpen, handleExitNavbar } = useContext(OpenNavbarContext);

  useEffect(() => {
    handleExitNavbar();
  }, []);


  return (
    <>
      <div className="contenedorGralProyectsDetail">
        <div className="internoProyectsDetail">
        {isMenuOpen ? <OpenNavbar /> : <span />}
        <div className="contenedorVolver">
          <Link to={"/"}>
            <FontAwesomeIcon className='flechaIzquierda' icon={faArrowLeft} />
            <span className="back">{activeEng ? "Back" : "Volver"}</span>
          </Link>
        </div>
        <div className="contenedorTituloProyect">
          <div className="interiorTituloProyect">
            <h2>{activeEng ? project.titleENG : project.title}</h2>
          </div>
        </div>
        <div className="contenedorVideoProyect">
          <iframe 
            src={project.urlYoutube} 
            title="YouTube video player"   
            sandbox="allow-same-origin allow-scripts" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        </div>
        <div className="tituloDescripcion">
          <div className="interiorTituloDescripcion">
            <h4>{activeEng ? "Description" : "Descripción"}</h4>
          </div>
        </div>
        <div className="descripcion">
          <div className="interiorDescripcion">
            <p>
              {activeEng ? project.descriptionENG : project.description}
            </p>
          </div>
        </div>
        <div className="tecnologias">
          <div className="tituloTecnologias">
            <div className="interiorTituloTecnologia">
              <h4>
                {activeEng ? "Technologies and Features" : "Tecnologías y Caracteristicas"}
              </h4>
            </div>
          </div>
          <div className="listaTecnologias">
            <div className="interiorLista">
              <ul>
                {project.tecnologiesandfeatures.map((technology, index) => (
                  <li key={index}>{technology}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="contenedorBotones">
            {project.deployLink && project.serverLink ? (
              <>
                <Link to={project.deployLink} className="btnProyect">{activeEng ? "Deploy" : "Despliegue"}</Link>
                <Link to={project.serverLink} className="btnProyect">{activeEng ? "Server" : "Servidor "}</Link>
              </>
            ) : project.deployLink && project.repositoryLink ? (
              <>
                <Link to={project.deployLink} className="btnProyect">{activeEng ? "Deploy" : "Despliegue"}</Link>
                <Link to={project.repositoryLink} className="btnProyect">{activeEng ? "Code" : "Codigo"}</Link>
              </>
            ) : project.deployLink ? (
              <Link to={project.deployLink} className="btnProyect">{activeEng ? "Deploy" : "Despliegue"}</Link>
            ) : project.repositoryLink ? (
              <Link to={project.repositoryLink} className="btnProyect">{activeEng ? "Code" : "Codigo"}</Link>
            ) : null}
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

