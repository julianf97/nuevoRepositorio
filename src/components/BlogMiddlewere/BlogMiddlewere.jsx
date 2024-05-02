import "./_blogPackageJsonDesktop.scss";
import "./_blogPackageJsonIpad.scss";
import "./_blogPackageJsonMobile.scss";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { OpenNavbarContext } from "../../context/OpenNavbarContext";
import OpenNavbarPage from "../OpenNavbarPage/OpenNavbarPage";
import blogImg from "../../assets/2555.png"

export default function BlogMiddlewere() {
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
      <h3>¿Qué son los Middlewares en Node.js y Express?</h3>
    </div>
    <div className="contenedorParrafoBlog">
      <div className="interiorParrafoBlog">
        <p>
          En el mundo del desarrollo web con Node.js y Express, los middlewares son piezas fundamentales que nos permiten manejar las solicitudes HTTP de manera eficiente y modular. Comprender su función y cómo se utilizan es esencial para construir aplicaciones web robustas y escalables.
          <br/><br/>
          <h5>¿Qué es un Middleware?</h5>
          <br/>
          Un middleware es una función que tiene acceso tanto al objeto de solicitud (request) como al objeto de respuesta (response) en una aplicación Express. Estas funciones pueden realizar tareas como modificar la solicitud o respuesta, ejecutar código adicional, o pasar el control a la siguiente función en la pila de middlewares.
          <br/><br/>
          <h5>¿Cómo se usan los Middlewares en Express?</h5>
          <br/>
          En Express, los middlewares se pueden utilizar para una variedad de tareas, como autenticación, registro de solicitudes, manejo de errores, compresión de respuestas, entre otros. Se pueden aplicar a nivel de aplicación, a rutas específicas o a grupos de rutas.
          <br/><br/>
          Por ejemplo, un middleware de registro de solicitudes podría verse así:
          <br/><br/>
          <div className="contenedorImgPost">
            <img src={blogImg} alt="blogImg"/>
          </div>
          <br/><br/>
          Este middleware registra cada solicitud recibida por la aplicación junto con la fecha y la ruta solicitada.
          <br/><br/>
          <h5>Importancia de los Middlewares</h5>
          <br/>
          Los middlewares son cruciales para la construcción de aplicaciones Express debido a su capacidad para modularizar la lógica de manejo de solicitudes y respuestas. Esto facilita la reutilización del código, mejora la legibilidad y permite un mejor manejo de errores y excepciones.
          <br/><br/>
          Además, los middlewares permiten la implementación de características avanzadas, como la autenticación de usuarios, la autorización, la compresión de respuestas, la validación de datos, entre otros, de una manera limpia y organizada.
          <br/><br/>
          <h5>Conclusión</h5>
          <br/>
          En resumen, los middlewares son una parte integral del ecosistema de Express en Node.js. Nos permiten extender y personalizar el comportamiento de nuestra aplicación de manera modular y eficiente. Comprender cómo funcionan los middlewares y cómo utilizarlos adecuadamente es esencial para construir aplicaciones web robustas y escalables en Node.js.
          <br/><br/>
        </p>
      </div>
    </div>
  </div>
</div>
  );
}
