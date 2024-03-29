import "./_blogPackageJsonDesktop.scss";
import "./_blogPackageJsonIpad.scss";
import "./_blogPackageJsonMobile.scss";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { OpenNavbarContext } from "../../context/OpenNavbarContext";
import OpenNavbarPage from "../OpenNavbarPage/OpenNavbarPage";

export default function BlogPackageJson() {
  const { handleExitNavbar } = useContext(OpenNavbarContext);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    handleExitNavbar();
    scrollToTop();
  }, []);

  return (
    <div className='contenedorBlogLogica'>
      <div className="internoBlogLogica">
        <OpenNavbarPage/>
        <div className="contenedorVolver">
          <Link to={"/"}>
            <FontAwesomeIcon className='flechaIzquierda' icon={faArrowLeft} />
            <span className="back">Back</span>
          </Link>
        </div>
        <div className="contenedorTitulo">
          <h3>¿Qué es el Package.json?</h3>
        </div>
        <div className="contenedorParrafoBlog">
          <div className="interiorParrafoBlog">
            <p>
              En el desarrollo de aplicaciones modernas, especialmente en entornos basados en JavaScript y Node.js, el archivo `package.json` juega un papel crucial. Es esencial comprender su función y estructura para trabajar de manera efectiva en proyectos de desarrollo de software.
              <br/><br/>
              <h5>¿Qué es el archivo `package.json`?</h5>
              <br/>
              El archivo `package.json` es un archivo de metadatos que se utiliza en proyectos de Node.js para definir diversas propiedades, como el nombre del proyecto, la versión, las dependencias del proyecto y los scripts de inicio. Es parte fundamental de la gestión de dependencias y configuraciones en un proyecto Node.js.
              <br/><br/>
              <h5>Estructura básica del `package.json`</h5>
              <br/>
              El archivo `package.json` sigue una estructura JSON (JavaScript Object Notation) y puede contener varias secciones, como:
              <br/><br/>
              <strong>name</strong>: El nombre del proyecto.<br/><br/>
              <strong>version</strong>: La versión actual del proyecto.<br/><br/>
              <strong>description</strong>: Una breve descripción del proyecto.<br/><br/>
              <strong>main</strong>: El punto de entrada principal del proyecto.<br/><br/>
              <strong>scripts</strong>: Define scripts de utilidad, como scripts de inicio, prueba, construcción, etc.<br/><br/>
              <strong>dependencies</strong>: Las dependencias del proyecto necesarias para ejecutar la aplicación.<br/><br/>
              <strong>devDependencies</strong>: Las dependencias necesarias para el desarrollo del proyecto, como pruebas unitarias, herramientas de compilación, etc.<br/><br/>
              <br/><br/>
              <h5>Importancia del `package.json`</h5>
              <br/>
              El archivo `package.json` es fundamental para la gestión de dependencias y la configuración del proyecto en entornos Node.js. Permite a los desarrolladores especificar las dependencias del proyecto de manera clara y gestionarlas de forma eficiente utilizando herramientas como npm (Node Package Manager) o yarn. Además, facilita la colaboración entre equipos de desarrollo y garantiza la reproducibilidad del entorno de desarrollo en diferentes máquinas.
              <br/><br/>
              <h5>Conclusión</h5>
              <br/>
              En resumen, el archivo `package.json` es una parte esencial de cualquier proyecto Node.js. Proporciona información crucial sobre el proyecto, incluidas sus dependencias y scripts de utilidad, lo que facilita el desarrollo, la colaboración y la gestión de proyectos en entornos de desarrollo modernos basados en JavaScript.
              <br/><br/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
