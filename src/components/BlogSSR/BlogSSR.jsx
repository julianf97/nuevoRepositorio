import "./_blogWebDesktop.scss";
import "./_blogWebIpad.scss";
import "./_blogWebMobile.scss";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { OpenNavbarContext } from "../../context/OpenNavbarContext";
import OpenNavbarPage from "../OpenNavbarPage/OpenNavbarPage";
import YouTube from "react-youtube";

export default function BlogSSR() {
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
          <h3>Implementando mi propio Server Side Rendering con Node js, Express y Html</h3>
        </div>
        <div className="contenedorParrafoBlog">
          <div className="interiorParrafoBlog">
            <YouTube videoId="LUI0xGATNIY" />
          </div>
        </div>
      </div>
    </div>
  );
}
