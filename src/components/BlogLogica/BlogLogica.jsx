import "./_blogLogicaDesktop.scss"
import "./_blogLogicaIpad.scss"
import "./_blogLogicaMobile.scss"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import OpenNavbarPage from "../OpenNavbarPage/OpenNavbarPage";

export default function BlogLogica() {
  return (
    <div className='contenedorBlogLogica'>
      <OpenNavbarPage/>
      <div className="contenedorVolver">
        <Link to={"/"}>
          <FontAwesomeIcon className='flechaIzquierda' icon={faArrowLeft} />
            <span className="back">Back</span>
        </Link>
      </div>
    </div>
  )
}
