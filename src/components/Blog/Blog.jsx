import "./_blogMobile.scss"
import "./_blogIpad.scss"
import "./_blogDesktop.scss"
import { useContext } from 'react';
import { LenguajeContext } from "../../context/LenguajeContext";
import "./_sweetAlert.scss"
import Swal from 'sweetalert2'
import letrasLogo from "../../../public/letrasLogo.png"
import { Link } from "react-router-dom";

export default function Blog() {

  const { activeEng } = useContext(LenguajeContext);

  const showAlertBlog = () => {

    let timerInterval

    Swal.fire({
      html: `<div class="contenedor-logo-alert"><img src=${letrasLogo}></div>` + 
      `<div class="contenedor-titulo-alert"><h2 class="titulo-alert">${activeEng ? "This post is not available" : "Este post no está disponible"} </h2></div> ` +
      `<div class="contenedor-titulo-alert"><h3 class="titulo">${activeEng ? "This post has not been published yet." : "Este post todavía no fue publicado"} </h3></div>` ,
      background: '#101010',
      timerProgressBar: true,
      showCloseButton: true, 
      timer: 4000,
      didOpen: () => {
        timerInterval = setInterval(() => {
        }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    })

  }

  return (
    <div id="blog" className="contenedorBlog">
      <div className="internoBlog">
        <h3>Blog</h3>
        <h4>Posts</h4>
        <div className="contenedorPosts">
          <div className="post">
            <div className="internoPost">
              <span className="cardYoutube">Youtube</span>
                <a href="https://www.youtube.com/watch?v=LUI0xGATNIY" target="blank">
                  <span className="tituloPost">{activeEng ? "Implementing my own Server-Side Rendering with Node.js" : "Implementando mi propio Server Side Rendering con NodeJs"}</span>
                </a>
            </div>
          </div>
          <div className="post">
            <div className="internoPost">
              <span className="cardBlog">Blog</span>
                <Link to={"/distintostiposderenderizado"}>
                  <span className="tituloPost">{activeEng ? "Different Types of Frontend Rendering (SSG, SSR, ISR, and CSR)" : "Diferentes tipos de renderizado de frontend (SSG, SSR, ISR y CSR)"}</span>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
