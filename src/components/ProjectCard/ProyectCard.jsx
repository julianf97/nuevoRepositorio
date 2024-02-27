/* eslint react/prop-types: 0 */
import { Link } from 'react-router-dom';
import "./_proyectCardMobile.scss";
import "./_proyectCardIpad.scss";
import "./_proyectCardDesktop.scss"
import { LenguajeContext } from "../../context/LenguajeContext";
import { useContext } from "react";


export default function ProyectCard({ title, titleENG, image, id, deployLink, serverLink, repositoryLink, technologies }) {


  const { activeEng } = useContext(LenguajeContext);


  return (
    <section className="proyectCard">
      <Link className='etiquetaLink' to={`/proyects/${id}`}>
        <div className="imgProyect">
          <img src={image} alt={title} />
        </div>
        <div className="titleProyectContainer">
          <h3>
            {activeEng ? titleENG : title}
          </h3>
        </div>
      </Link>
      <div className="links">
        {deployLink && (
          <Link to={deployLink} target="_blank" rel="noopener noreferrer" className="btnResumen">
            <div>{activeEng ? "Deploy" : "Despliegue"}</div>
          </Link>
        )}
        {serverLink && (
          <Link to={serverLink} target="_blank" rel="noopener noreferrer" className="btnResumen">
            <div>{activeEng ? "Server" : "Servidor "}</div>
          </Link>
        )}
        {!serverLink && deployLink && repositoryLink && (
          <Link to={repositoryLink} target="_blank" rel="noopener noreferrer" className="btnResumen">
            <div>{activeEng ? "Code" : "Codigo"}</div>
          </Link>
        )}
        {!deployLink && !serverLink && repositoryLink && (
          <Link to={repositoryLink} target="_blank" rel="noopener noreferrer" className="btnResumen">
            <div>{activeEng ? "Code" : "Codigo"}</div>
          </Link>
        )}
      </div>
      <div className='contenedorVerDetalle'>
        <Link to={`/proyects/${id}`} rel="noopener noreferrer" className="btnResumen">
          <span>{activeEng ? "See Details" : "Ver Detalles"}</span>
        </Link>
      </div>
      <div className="contenedorTecnologias">
        {technologies.map((tech, index) => (
          <div key={index} className="techTag">{tech}</div>
        ))}
      </div>
    </section>
  );
}
