import "./_blogLogicaDesktop.scss";
import "./_blogLogicaIpad.scss";
import "./_blogLogicaMobile.scss";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { OpenNavbarContext } from "../../context/OpenNavbarContext";
import OpenNavbarPage from "../OpenNavbarPage/OpenNavbarPage";
import imgEj1 from "../../../public/ejercicios/ejercicio1.png";
import imgEj2 from "../../../public/ejercicios/ejercicio2.png";
import imgEj3 from "../../../public/ejercicios/ejercicio3.png";
import imgEj4 from "../../../public/ejercicios/ejercicio4.png";

export default function BlogLogica() {
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
          <h3>Ejercicios de lógica con Javascript</h3>
        </div>
        <div className="contenedorParrafoBlog">
          <div className="interiorParrafoBlogLogica">
            <p>En este blog dejo algunos enunciados y los resultados de algunos ejercicios para mejorar la lógica resueltos con Javascript</p>
          </div>
        </div>
        <div className="contenedorEnunciadosyEjercicios">
          <div className="contenedorInteriorEnunciadosyEjercicios">
            <h6>Ejercicio 1</h6>
            <p>Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].</p>
            <div className="contenedorImgResolucion">
              <img src={imgEj1}/>
            </div>
          </div>
          <div className="contenedorInteriorEnunciadosyEjercicios">
            <h6>Ejercicio 2</h6>
            <p>Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los números ordenados en forma ascendente y el segundo en forma descendiente, por ejemplo, <code>miFuncion([7, 5, 7, 8, 6])</code> devolverá {'{ asc: [5, 6, 7, 7, 8], desc: [8, 7, 7, 6, 5] }'}.</p>
            <div className="contenedorImgResolucion">
              <img src={imgEj2}/>
            </div>
          </div>
          <div className="contenedorInteriorEnunciadosyEjercicios">
            <h6>Ejercicio 3</h6>
            <p>Programa una función que dado un arreglo de elementos, elimine los duplicados, por ejemplo, <code>miFuncion([x, 10, x, 2, 10, 10, true, true])</code> devolverá <code>[x, 10, 2, 10, true]</code>.</p>
            <div className="contenedorImgResolucion">
              <img src={imgEj3}/>
            </div>
          </div>
          <div className="contenedorInteriorEnunciadosyEjercicios">
            <h6>Ejercicio 4</h6>
            <p>Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.</p>
            <div className="contenedorImgResolucion">
              <img src={imgEj4}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
