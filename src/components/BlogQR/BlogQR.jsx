import "./_blogPackageJsonDesktop.scss";
import "./_blogPackageJsonIpad.scss";
import "./_blogPackageJsonMobile.scss";
import { useEffect, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { OpenNavbarContext } from "../../context/OpenNavbarContext";
import OpenNavbarPage from "../OpenNavbarPage/OpenNavbarPage";
import qrFunction1 from "../../assets/qrFunction1.png"
import qrFunction2 from "../../assets/qrFunction2.png"
import fs from 'fs';

export default function BlogQR() {
  const { handleExitNavbar } = useContext(OpenNavbarContext);

  useEffect(() => {
    handleExitNavbar();
    scrollToTop();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const generateQRAndEmbedInPDF = async () => {
    try {
      // Generar el código QR con los datos deseados
      const qrData = 'https://miweb.com';
      const qrImageBuffer = await QRCode.toBuffer(qrData, { type: 'png' });

      // Crear un nuevo documento PDF
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([400, 600]);

      // Insertar la imagen del código QR en el documento PDF
      const qrImage = await pdfDoc.embedPng(qrImageBuffer);
      const qrDims = qrImage.scale(0.5);
      page.drawImage(qrImage, {
        x: 150,
        y: 300,
        width: qrDims.width,
        height: qrDims.height,
      });

      // Guardar el documento PDF con el código QR insertado
      const pdfBytes = await pdfDoc.save();
      fs.writeFileSync('documento_con_qr.pdf', pdfBytes);

      console.log('Documento PDF con código QR generado exitosamente.');
    } catch (error) {
      console.error('Error al generar y guardar el código QR en el documento PDF:', error);
    }
  };

  //generateQRAndEmbedInPDF()

  return (
    <div className='contenedorBlogLogica'>
      <div className="internoBlogLogica">
        <OpenNavbarPage />
        <div className="contenedorVolver">
          <Link to={"/"}>
            <FontAwesomeIcon className='flechaIzquierda' icon={faArrowLeft} />
            <span className="back">Back</span>
          </Link>
        </div>
        <div className="contenedorTitulo">
          <h3>Integración de Códigos QR en Documentos PDF con Node.js</h3>
        </div>
        <div className="contenedorParrafoBlog">
          <div className="interiorParrafoBlog">
            <p>
              En el ámbito del desarrollo web con Node.js, la capacidad de generar códigos QR dinámicos y luego integrarlos de manera efectiva en documentos PDF es crucial para diversas aplicaciones. En este artículo, exploraremos cómo utilizar las librerías qrcode para la generación de códigos QR y pdf-lib para la manipulación de archivos PDF, proporcionando una solución robusta y flexible para este proceso.
              <br /><br />
              <h5>Librería qrcode para generación de códigos QR</h5>
              <br />
              qrcode es una librería versátil en Node.js que nos permite generar códigos QR fácilmente con datos personalizados, ya sea URLs, texto simple o cualquier otro tipo de información que necesitemos codificar de forma visualmente legible.
              <br /><br />
              <h5>Librería pdf-lib para manipulación de PDFs</h5>
              <br />
              pdf-lib nos proporciona las herramientas necesarias para crear y modificar archivos PDF desde Node.js. Con esta librería, podemos agregar imágenes, textos y otros elementos a documentos PDF existentes de manera programática y eficiente.
              <br /><br />
              <div className="contenedorImgPost">
                <img src={qrFunction1} alt="blogImg" />
              </div>
              <div className="contenedorImgPost">
                <img src={qrFunction2} alt="blogImg" />
              </div>
              <br /><br />
              <h5>Generación del código QR:</h5>
              <br />
              Utilizamos QRCode.toBuffer para generar un código QR en formato PNG basado en el dato proporcionado (qrData en este caso es una URL).              <br /><br />
              <h5>Integración en el documento PDF:</h5>
              <br />
              Creamos un nuevo documento PDF con PDFDocument.create() y añadimos una página con pdfDoc.addPage().
              <br />
              <br />
              Incorporamos la imagen del código QR en la página PDF usando pdfDoc.embedPng() y ajustamos su tamaño y posición con drawImage().
              <br />
              <br />
              <h5>Guardado del documento PDF:</h5>
              <br />
              Finalmente, el documento PDF con el código QR incrustado se guarda localmente en el servidor usando fs.writeFileSync(). Esto asegura que el documento generado esté listo para ser distribuido o almacenado según las necesidades del proyecto.
              <br /><br />
              <h5>Conclusión</h5>
<br />
En conclusión, hemos explorado cómo integrar códigos QR generados dinámicamente en documentos PDF utilizando Node.js. Mediante el uso de las librerías qrcode y pdf-lib, pudimos generar un código QR basado en una URL proporcionada y luego insertarlo eficazmente en un documento PDF creado desde cero. Este proceso no solo es útil para la creación de documentos en tiempo real que incorporen datos visuales codificados, sino que también demuestra el poder de Node.js y su capacidad para manejar tareas complejas como la generación de PDFs personalizados en aplicaciones web modernas.
<br /><br />
Si estás interesado en más detalles sobre cómo implementar esta funcionalidad en tus propios proyectos, te animamos a explorar más a fondo las documentaciones de qrcode y pdf-lib, donde encontrarás opciones avanzadas y ejemplos adicionales que podrían ser útiles para tus necesidades específicas.
              <br /><br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
