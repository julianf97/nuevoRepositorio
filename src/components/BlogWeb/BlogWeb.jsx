import "./_blogWebDesktop.scss";
import "./_blogWebIpad.scss";
import "./_blogWebMobile.scss";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { OpenNavbarContext } from "../../context/OpenNavbarContext";
import OpenNavbarPage from "../OpenNavbarPage/OpenNavbarPage";
import { arrayProjectsPage } from "../../data/arrayProyectsPage";
import { LenguajeContext } from "../../context/LenguajeContext";

export default function BlogWeb() {
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
          <h3>Diferentes tipos de renderizado de frontend (SSG, SSR, ISR y CSR)</h3>
        </div>
        <div className="contenedorParrafoBlog">
          <div className="interiorParrafoBlog">
            <p>
              En el desarrollo web, el proceso de renderizado de la interfaz de usuario es esencial para la experiencia del usuario final. Existen varios enfoques para lograr este renderizado, cada uno con sus propias características y casos de uso específicos. En este artículo, exploraremos los diferentes tipos de renderizado de frontend, desde el renderizado del lado del servidor hasta el renderizado del lado del cliente, destacando sus ventajas y desventajas.
              <br/>
              <br/>
              <h5>Renderizado Estático del Lado del Servidor (SSG)</h5>
              <br/>
              El renderizado estático del lado del servidor (SSG) implica pregenerar todas las páginas del sitio web durante el tiempo de compilación. Esto significa que las páginas se generan una vez y se almacenan en caché, lo que permite una carga rápida del contenido estático. El SSG es ideal para sitios web con contenido que no cambia con frecuencia, como blogs y sitios de contenido estático. Ofrece una excelente velocidad de carga y un buen rendimiento en SEO, pero puede resultar en una experiencia menos interactiva para el usuario.
              <br/>
              <br/>
              <h5>Renderizado del lado del servidor (SSR)</h5>
              <br/>
              El renderizado del lado del servidor (SSR) implica generar la interfaz de usuario en el servidor antes de enviarla al cliente. Este enfoque proporciona una carga inicial rápida y una mejor optimización para motores de búsqueda, ya que el contenido es visible para los rastreadores web desde el principio. Sin embargo, puede resultar en una latencia adicional en las solicitudes de renderizado y requiere más recursos del servidor.
              <br/>
              <br/>
              <h5>Renderizado del lado del cliente (CSR)</h5>
              <br/>
              El renderizado del lado del cliente (CSR) implica generar la interfaz de usuario en el navegador del cliente utilizando JavaScript después de que se haya cargado el HTML inicial. Esto permite una experiencia interactiva más fluida una vez que se ha cargado la página inicial. Sin embargo, puede conducir a una carga inicial más lenta y problemas de SEO, ya que el contenido puede no estar disponible para los motores de búsqueda de inmediato.
              <br/>
              <br/>
              <h5>Renderizado Incremental del Lado del Servidor (ISR)</h5>
              <br/>
              El renderizado incremental del lado del servidor (ISR) es una técnica que combina elementos del SSR y del CSR. Permite renderizar partes de una página de manera incremental en el servidor y enviarlas al cliente, lo que mejora la velocidad de carga inicial y la interactividad de la página. Esta técnica es especialmente útil en aplicaciones con contenido dinámico que se actualiza con frecuencia.
              <br/>
              <br/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
