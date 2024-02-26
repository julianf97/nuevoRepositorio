import "./_blogMobile.scss"
import "./_blogIpad.scss"
import "./_blogDesktop.scss"
import { Link } from "react-router-dom"

export default function Blog() {
  return (
    <div id="blog" className="contenedorBlog">
      <div className="internoBlog">
        <h3>Blog</h3>
        <h4>Posts</h4>
        <div className="contenedorPosts">
          <div className="post">
            <div className="internoPost">
              <span className="cardBlog">Blog</span>
              <span className="tituloPost">Diferentes tipos de renderizado de frontend (SSG, SSR, ISR y CSR)</span>
            </div>
          </div>
          <div className="post">
            <div className="internoPost">
              <span className="cardBlog">Blog</span>
              <span className="tituloPost">Como Funciona la Web</span>
            </div>
          </div>
          <div className="post">
            <div className="internoPost">
              <span className="cardBlog">Blog</span>
              <span className="tituloPost">Ejercicios de Logica con Javascript</span>
            </div>
          </div>
          <div className="post">
            <div className="internoPost">
              <span className="cardYoutube">Youtube</span>
              <a href="https://www.youtube.com/watch?v=ZjanQ5--xnw" target="_blank">
                <span className="tituloPost">Map vs ForEach</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
