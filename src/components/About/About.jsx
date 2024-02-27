import "./_aboutMobile.scss";
import "./_aboutIpad.scss";
import "./_aboutDesktop.scss";
import { useEffect, useRef, useState } from 'react';

const ANSWERS = {
  default: (
    <p>En realidad no soy Julián, soy una IA preparada para contestar solo algunas preguntas.</p>
  ), 
  intro: (
    <p>
      ¡Hola! Soy Julián Finelli, FullStack Developer
    </p>
  ),
  edad: (
    <p>Tengo 26 años</p>
  ),
  localidad: (
    <p>Soy de Buenos Aires, Argentina</p>
  ),
  tecnologias: (
    <p>Las tecnologías que uso son: React JS - Next 14 - NodeJS - Express - MySQL - Sequelize - Styled Components - Sass - Tailwind. Actualmente me mantengo actualizado aprendiendo nuevas tecnologias</p>
  ),
  contacto: (
    <p>Si deseas obtener mas información, puedes hacerlo por los siguientes medios: 
      <br/>
      <br/>
      Wsp: +54 9 336 4 024379
      <br/>
      <br/>
      Linkedin: www.linkedin.com/in/julian-finelli
      <br/>
      <br/>
      Github: https://github.com/julianf97
      <br/>
      <br/>
      Correo Electronico: julianfinelli97@gmail.com
    </p>
  ),
  trabajo:(
    <p>Actualmente trabajo como freelancer, estoy actualmente en búsqueda de nuevas oportunidades en empresas que me permitan crecer en el campo del desarrollo web en un puesto que me
    desafíe y brinde espacio para el aprendizaje continuo</p>
  ),
  comunidad: (
    <p>Empece a aprender a programar de manera autodidacta hace 3 años focalizado en el desarrollo web, éste portfolio y casi todos mis proyectos están hechos con React Js, éste chatbot lo pude hacer gracias a Gonzalo Pozzo</p>
  )
}

const EXAMPLES = [
  { "text": "Hola", "label": "intro" },
  { "text": "Como estás?", "label": "intro" },
  { "text": "Quien sos?", "label": "intro" },
  { "text": "Que edad tienes?", "label": "edad" },
  { "text": "Cuantos años tenes?", "label": "edad" },
  { "text": "Cual es tu edad?", "label": "edad" },
  { "text": "De donde sos?", "label": "localidad" },
  { "text": "De donde eres?", "label": "localidad" },
  { "text": "Cual es tu pais de residencia?", "label": "localidad" },
  { "text": "Donde vives?", "label": "localidad" },
  { "text": "Cual resides?", "label": "localidad" },
  { "text": "Cual es tu ciudad?", "label": "localidad" },
  { "text": "Donde puedo ubicarte?", "label": "contacto" },
  { "text": "Donde puedo contactarte?", "label": "contacto" },
  { "text": "Cuales son tus redes?", "label": "contacto" },
  { "text": "Cual es tu github?", "label": "contacto" },
  { "text": "Cual es tu correo electronico?", "label": "contacto" },
  { "text": "Cual es tu facebook?", "label": "contacto" },
  { "text": "Como es tu instagram", "label": "contacto" },
  { "text": "Cuales son tus redes sociales?", "label": "contacto" },
  { "text": "Que tecnologias sabes usar??", "label": "tecnologias" },
  { "text": "Cual es tu stack?", "label": "tecnologias" },
  { "text": "Cuales son tus habilidades tecnicas?", "label": "tecnologias" },
  { "text": "Que tecnologias usas?", "label": "tecnologias" },
  { "text": "Con que sabes programar?", "label": "tecnologias" },
  { "text": "Que usas para programar?", "label": "tecnologias" },
  { "text": "Cuales son tus herramientas como desarrollador", "label": "tecnologias" },
  { "text": "¿Cuáles son tus habilidades técnicas principales?", "label": "tecnologias" },
  { "text": "Donde trabajas actualmente?", "label": "trabajo" },
  { "text": "Te interesa cambiar de trabajo?", "label": "trabajo" },
  { "text": "Como aprender a programar?", "label": "comunidad" },
  { "text": "Como aprendiste a programar?", "label": "comunidad" },
  { "text": "Como hiciste este portfolio?", "label": "comunidad" },
  { "text": "Como hiciste este chatbot?", "label": "comunidad" },
];

const API_KEY = "2ubp5gck59AEQnj1n5vuP334xEf9kgIjHnZTU7ET";

export default function About() {
  const [messages, setMessages] = useState([
    { id: "1", type: "bot", text: "Quieres saber sobre mí? preguntame!, Soy un bot creado para responder solo ALGUNAS preguntas de Julián Finelli" },
    { id: "2", type: "user", text: "Hola, soy un usuario" },
  ]);

  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const container = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;

    setLoading(true);
    setMessages(messages => [...messages, { id: String(Date.now()), type: "user", text: question }]);
    setQuestion("");

    try {
      const response = await fetch("https://api.cohere.ai/classify", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "large",
          inputs: [question],
          examples: EXAMPLES
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const classifications = await response.json();

      setMessages(messages => [...messages, { 
        id: String(Date.now()), 
        type: "bot", 
        text: ANSWERS[classifications.classifications[0].prediction || ANSWERS.default]
      }]);
      setLoading(false);
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
  };

  useEffect(() => {
    if (container.current) {
      container.current.scrollTop = container.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div id="about" className="contenedorGralAbout">
      <div className="internoAbout">
        <div className="contenedorTitulo">
          <h3>About</h3>
          <h4>Chat</h4>
        </div>
        <div ref={container} className="contenedorChat">
          {messages.map((message) => (
            <div className={`message ${message.type === "bot" ? "botMessage" : "userMessage"}`} key={message.id}>
              {message.text}
            </div>
          ))}
          <form onSubmit={handleSubmit}>
            <input 
              value={question}
              onChange={event => setQuestion(event.target.value)}
              name="question" 
              placeholder="Haz tu pregunta" 
              className="" 
              type="text">
            </input>
            <button disabled={loading} className={ loading ?  `colorButtonIsLoading` : `colorButtonNotLoading`} type="submit"> Enviar </button>
          </form>
        </div>
      </div>
    </div>
  );
}
