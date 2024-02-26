import "./_blogWebDesktop.scss";
import "./_blogWebIpad.scss";
import "./_blogWebMobile.scss";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { OpenNavbarContext } from "../../context/OpenNavbarContext";
import OpenNavbarPage from "../OpenNavbarPage/OpenNavbarPage";

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
          <h3>Cómo funciona la web</h3>
        </div>
        <div className="contenedorParrafoBlog">
          <div className="interiorParrafoBlog">
            <p>
              Recientemente, he estado inmerso en la exploración más detallada del funcionamiento de la web. A menudo, discutimos sobre bibliotecas, lenguajes de programación, pruebas, documentación, entre otros aspectos, pero rara vez nos detenemos a considerar cómo llega un documento HTML a nuestras pantallas. Nos encontramos con dominios formados por Protocolos de Transferencia, conjuntos de caracteres y dominios de nivel superior, pero, ¿qué significan realmente estas cosas? ¿Y cómo se relacionan con un sitio web en sí? En este artículo, me propongo responder a estas preguntas y explorar otros aspectos relacionados.

              <br/>
              <br/>

              Para entender el proceso de comunicación en la red, es esencial comprender tanto el navegador web como los servidores web, ya que ambos desempeñan roles fundamentales en el establecimiento de la conexión. El navegador web (por ejemplo, Firefox o Google Chrome) envía un mensaje al servidor web, conocido como una solicitud HTTP (Protocolo de Transferencia de Hipertexto). Cuando el servidor web recibe esta solicitud, realiza una búsqueda para localizar y mostrar la página correspondiente. Si la página se encuentra, el servidor envía de vuelta un documento HTML que contiene la información solicitada. Estos documentos se transmiten al navegador utilizando HTTP a través de la red. En el caso de que el servidor no pueda encontrar la página solicitada, devuelve una página de error, comúnmente conocida como el "error 404: página no encontrada".

              <br/>
              <br/>

              El navegador web, o navegador, es una aplicación diseñada para acceder a documentos en servidores web a través de internet. Por otro lado, el servidor web es la computadora que proporciona servicios a otros programas, conocidos como clientes. La interacción entre el navegador y los servidores es fundamental para la navegación web; si se establece la conexión y se otorgan los permisos necesarios, se intercambian datos y se generan respuestas.

              <br/>
              <br/>
              Concepto de World Wide Web
              <br/>
              <br/>
              Ahora que tenemos una idea general de cómo aparece un sitio web frente a nosotros, profundicemos en el proceso de solicitud al servidor web.
              <br/>
              <br/>
              En cuanto al hardware del servidor web, es importante comprender que, en términos generales, el hardware se refiere a la parte física de una computadora. Este hardware se encuentra conectado a internet y facilita el intercambio de datos con otros dispositivos conectados. Por otro lado, el software del servidor web controla el acceso a los archivos alojados en la computadora. Es decir, todas las computadoras que alojan sitios web deben tener instalado un software de servidor web.
              <br/>
              <br/>
              El intercambio de datos entre el navegador y el servidor se realiza a través del protocolo de transferencia HTTP, que sigue un modelo cliente-servidor. Los documentos se reconstruyen a partir de subdocumentos obtenidos, como texto, diseños, imágenes, videos, scripts, entre otros.
              <br/>
              <br/>
              Un componente clave para comprender este proceso es el concepto de dirección IP. Una dirección IP es un identificador único que identifica un dispositivo o red en internet. Cada dispositivo conectado a internet tiene su propia dirección IP única. Estas direcciones IP facilitan la comunicación entre dispositivos al proporcionar una forma de direccionamiento único. Normalmente, interactuamos con nombres de dominio como "youtube.com", y el Sistema de Nombres de Dominio (DNS) se encarga de traducir estos nombres de dominio en direcciones IP.
              <br/>
              <br/>
              TCP (Protocolo de Control de Transmisión) es otro aspecto crucial en la comunicación en internet. TCP define cómo se establecen y mantienen las conversaciones de red, permitiendo que las aplicaciones intercambien datos de manera efectiva. Funciona junto con el Protocolo de Internet (IP), que define cómo se envían los paquetes de datos entre computadoras.
              <br/>
              <br/>
              El modelo TCP/IP consta de cuatro capas, cada una con funciones específicas para facilitar la comunicación de datos en la red. La capa de aplicación envía mensajes o datos a los protocolos de la capa de transporte de internet, como TCP. Estos protocolos dividen la información en paquetes, agregan direcciones de destino y los pasan a la capa de red, que se encarga de la entrega de los paquetes mirando las direcciones IP en los encabezados.
              <br/>
              <br/>
              Proxies
              <br/>
              <br/>
              Es importante tener en cuenta la presencia de proxies en la comunicación entre cliente y servidor. Los proxies actúan como intermediarios, realizando diversas operaciones y actuando como pasarelas o cachés. Estos servidores intermedios pueden mejorar el rendimiento de la red, aumentar la seguridad de los datos, actuar como cortafuegos o filtros, y almacenar en caché datos para acelerar las solicitudes repetidas.
              <br/>
              <br/>
              HTTPS (Protocolo de Transferencia de Hipertexto Seguro) es una versión más segura de HTTP que utiliza una capa de sockets de seguridad (SSL) para cifrar los datos transmitidos entre el cliente y el servidor. Al establecer conexiones SSL con un proxy, el tráfico se enruta a través del proxy, que se conecta al servidor remoto y establece una conexión cifrada. Esto garantiza que los datos transmitidos estén protegidos contra terceros no autorizados.
              <br/>
              <br/>
              Criptografía de Clave Pública
              <br/>
              <br/>
              Para comprender completamente cómo funciona este sistema de seguridad, es fundamental comprender la criptografía de clave pública. Este sistema utiliza dos claves, una pública y una privada, para cifrar y descifrar mensajes. Por ejemplo, cuando un cliente solicita una conexión segura con un servidor, el servidor envía un certificado que contiene una clave pública. El navegador del cliente verifica este certificado y establece una conexión cifrada utilizando la clave pública del servidor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
