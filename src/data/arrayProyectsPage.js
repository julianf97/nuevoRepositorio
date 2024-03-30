import mercadoLibreScreen from "../../public/screensProyect/mercadoLibreScreen.png";
import screenTattoo from "../../public/screensProyect/screenTattoo.jpg";
import screenMunicipalidad from "../../public/screensProyect/screenMunicipalidad.png";
import screenPassword from "../../public/screensProyect/screenPassword.jpg";
import screenRick from "../../public/screensProyect/screenRick.jpg";
import megadethScreen from "../../public/screensProyect/screenMegadeth.jpg";
import alphaGamesScreen from "../../public/screensProyect/screenAlphaGames.png";
import spaceGamesScreen from "../../public/screensProyect/screenSpaceGames.png";
import coloCossyScreen from "../../public/screensProyect/screenColoCossy.png";

export const arrayProjectsPage = [
  {
    id: "mercadoLibre",
    title: "Buscador Mercado Libre", 
    titleENG: "Mercado Libre Search Engine",
    image: mercadoLibreScreen,
    deployLink: "https://julian-merc-libre.vercel.app/",
    serverLink: "https://server-julianstore.onrender.com/",
    technologies: ["ReactTag", "JavascriptTag", "ExpressTag", "NodeTag", "StyledComponentsTag"],
    stack: "fullstack",
    tecnologiesandfeatures: ["React", "Node js", "Express", "Javascript", "Styled Components"],
    description: "Este proyecto es la resolución de un desafío técnico de Mercado Libre que encontré en la web, éste proyecto puso a prueba mis conocimientos ya que se requieren conocimientos tanto de front end como de back end, para poder resolverlo hay que consumir la información de la API de Mercado Libre, en el caso de éste proyecto en particular los estilos se los agregué con Styled Componentes, es una librería de Javascript que permite agregar los estilos como una constante y exportarla directamente a los componentes de React.",
    descriptionENG: "This project is the solution to a technical challenge from Mercado Libre that I found online. It put my skills to the test as it required knowledge of both front-end and back-end development. To solve it, I had to consume data from the Mercado Libre API. In the case of this particular project, I added styles using Styled Components, a JavaScript library that allows styling to be added as constants and exported directly to React components.",
    urlYoutube: "https://www.youtube.com/embed/mUtDxxb85Uk?si=jTm1K8mX84N1XYMb",
    alert: true
  },
  {
    id: "finellitattoos",
    title: "Sr.Finelli Tattoos",
    titleENG: "Sr.Finelli Tattoos",
    image: screenTattoo,
    deployLink: "https://tattoo-finelli.vercel.app/",
    repositoryLink: "https://github.com/julianf97/tattooFinelli",
    technologies: ["ReactTag", "JavascriptTag", "SassTag", "FramerMotionTag"],
    stack: "frontend",
    tecnologiesandfeatures: ["React", "Javascript", "Framer Motion", "Sass"],
    description: "Este proyecto fue un trabajo que hice para mi hermano mayor que reside en Bolonia - Italia, en éste proyecto aprendí a usar Framer Motion para crear animaciones en los componentes, y también aprendí a crear un sitio web donde se puede cambiar el idioma, en éste caso se pasa de Inglés a Italiano y viceversa",
    descriptionENG: "This project was a piece of work I did for my older brother who resides in Bologna, Italy. Through this project, I learned how to use Framer Motion to create animations within the components. Additionally, I gained experience in creating a website with language switching functionality; in this case, transitioning between English and Italian seamlessly.",
    urlYoutube: "https://www.youtube.com/embed/JyawRukiByc?si=2NH6lBfLZytKXUOX",
    alert: false
  },
  {
    id: "snmunicipalidad",
    title: "Registro - Inicio de Sesión",
    titleENG: "Register - Login",
    image: screenMunicipalidad,
    repositoryLink: "https://github.com/julianf97/desafio-tecnico-municipalidadSN",
    technologies: ["ReactTag", "JavascriptTag", "SassTag", "ExpressTag", "NodeTag", "MySQLTag", "SequelizeTag"],
    stack: "fullstack", 
    tecnologiesandfeatures: ["React", "Javascript", "Sass", "Express", "Node js", "MySQL", "Sequelize"],
    description: "Este fue un proyecto clave en mi aprendizaje, ya que es mi primer proyecto FullStack, con éste proyecto he aprendido a usar Node Js - Express - MySQL y el ORM Sequelize para hacer las peticiones SQL en el lenguaje Javascript, aparte de aprender el backend en Javascript, le he dedicado un gran tiempo al diseño del sitio ya que siempre fuí muy exigente con el diseño de todos mis proyectos.",
    descriptionENG: "This was a pivotal project in my learning journey as it marks my first FullStack project. With this project, I've learned to use Node.js - Express - MySQL and the Sequelize ORM for making SQL queries in JavaScript. Apart from learning backend development in JavaScript, I've dedicated significant time to the site's design, as I've always been meticulous about the design of all my projects.",
    urlYoutube: "https://www.youtube.com/embed/yJSfDU9ceHg?si=EHspbHdUVlgnvw9d",
    alert: false
  },
  {
    id: "passwordgenerator",
    title: "Generador De Contraseñas",
    titleENG: "Password Generator",
    image: screenPassword,
    deployLink: "https://password-generator-julianf97.vercel.app/",
    repositoryLink: "https://github.com/julianf97/password-generator",
    technologies: ["ReactTag", "JavascriptTag", "SassTag"],
    stack: "frontend",
    tecnologiesandfeatures: ["React", "Javascript", "Sass"],
    description: "Este proyecto es un generador de contraseñas que he encontrado en un sitio web llamado 'Frontend Mentor', elegí hacerlo porque tiene un diseño agradable y por su rapida funcionalidad.",
    descriptionENG: "This project is a password generator that I found on a website called 'Frontend Mentor.' I chose to do it because it has a nice design and quick functionality.",
    urlYoutube: "https://www.youtube.com/embed/5Dwj6k497No?si=CX_l-dMBOhMktWWO",
    alert: false
  },
  {
    id: "rickandmorty",
    title: "Rick & Morty Wiki",
    titleENG: "Rick & Morty Wiki", 
    image: screenRick,
    deployLink: "https://therickandmortyapp.vercel.app/",
    repositoryLink: "https://github.com/julianf97/vitenMorty",
    technologies: ["ReactTag", "JavascriptTag", "SassTag"],
    stack: "frontend",
    tecnologiesandfeatures: ["React", "Javascript", "Sass"],
    description: "Este proyecto es un clásico, decidí hacer este proyecto porque aparte de ser gran fanatico de la serie, lo hice para aprender a consumir datos de una API, pero a diferencia del resto del que hace éste proyecto, intenté llevarlo más allá a nivel diseño y a nivel filtrado de personajes, traté de filtrar toda la información de todas las formas posibles",
    descriptionENG: "This project is a classic. I decided to undertake it because, apart from being a huge fan of the series, I wanted to learn how to consume data from an API. However, unlike most projects of this kind, I endeavored to take it a step further in terms of design and character filtering. I attempted to filter all the information in every possible way.",
    urlYoutube: "https://www.youtube.com/embed/7w7-n6gjCFc?si=EDduOFALR8JoErll",
    alert: false
  },
  {
    id: "megadeth",
    title: "Megadeth Fan Sitio Web",
    titleENG: "Megadeth Fan Website", 
    image: megadethScreen,
    deployLink: "https://megadeth.netlify.app/",
    repositoryLink: "https://github.com/julianf97/megadeth",
    technologies: ["JavascriptTag", "SassTag", "HtmlTag", "CssTag"],
    stack: "frontend",
    tecnologiesandfeatures: [ "Javascript", "Sass", "Html5", "Css3"],
    description: "Este proyecto es uno de mis favoritos, porque soy fanático de la banda y por el tiempo que me llevó hacer a la perfección el diseño, es uno de los proyectos que mas me gustan como quedó el diseño, en su parte interactiva se destaca el registro e inicio de sesión hecho con Javascript Vanilla y el guardado y uso de la informacion en el LocalStorage del navegador.",
    descriptionENG: "This project is one of my favorites because I'm a big fan of the band and because of the time it took me to perfect the design. It's one of the projects I'm most proud of in terms of design outcome. In its interactive part, the registration and login stand out, which were done using Vanilla JavaScript, and the saving and use of information in the browser's LocalStorage.",
    urlYoutube: "https://www.youtube.com/embed/BwjuuHBBO2s?si=KgE54JOxq0BG5PSR",
    alert: false
  },
  {
    id: "spacegames",
    title: "Space Games",
    titleENG: "Space Games", 
    image: spaceGamesScreen,
    deployLink: "https://space-games.vercel.app/",
    repositoryLink: "https://github.com/julianf97/ProyectoFinal.git",
    technologies: ["ReactTag", "JavascriptTag", "FireBaseTag",  "SassTag"],
    stack: "fullstack",
    tecnologiesandfeatures: [ "React", "Javascript", "Firebase", "Sass"],
    description: "Este fue el proyecto con el que empecé a aprender React Js, es el proyecto final de un curso de React Js que hice en Coderhouse, éste proyecto fue clave en mi aprendizaje ya que aprendí React, y comprendí el funcionamiento de los estados, componentes reutilizables, contexto, y como usar Firebase como base de datos",
    descriptionENG: "This was the project where I began learning React Js. It's the final project of a React Js course I took at Coderhouse. This project was pivotal in my learning journey as it taught me React and helped me understand the functioning of states, reusable components, context, and how to use Firebase as a database.",
    urlYoutube: "https://www.youtube.com/embed/vC4RBF7pLCg?si=MLcp3G1e_phGo5Mr",
    alert: false
  },
  {
    id: "alphagames",
    title: "Alpha Games",
    titleENG: "Alpha Games", 
    image: alphaGamesScreen,
    deployLink: "https://alpha-games-pi.vercel.app/",
    repositoryLink: "https://github.com/julianf97/alphaGames",
    technologies: ["SassTag", "HtmlTag", "CssTag"],
    stack: "frontend",
    tecnologiesandfeatures: [ "Sass", "Html5", "Css3"],
    description: "Cuando ya había aprendido a maquetar de manera correcta un sitio web, decidí ir más allá y maquetar un sitio (sin interactividad) 'mas grande' , este sitio simula ser un ecommerce de un negocio que vende videojuegos y consolas",
    descriptionENG: "After having learned to properly layout a website, I decided to go further and layout a (non-interactive) 'larger' site. This site simulates being an e-commerce platform for a business selling video games and consoles.",
    urlYoutube: "https://www.youtube.com/embed/fMdq0M7sf9M?si=YtqqUfY5HTB83mGy",
    alert: false
  },
  {
    id: "colocossy",
    title: "Colo Cossy Fotografía",
    titleENG: "Colo Cossy Photography", 
    image: coloCossyScreen,
    deployLink: "https://colocossyfotografia.netlify.app/",
    repositoryLink: "",
    technologies: ["SassTag", "HtmlTag", "CssTag"],
    stack: "frontend",
    tecnologiesandfeatures: [ "Sass", "Html5", "Css3"],
    description: "Este fue el primer proyecto que pude terminar completamente, es un proyecto hecho simplemente con Html5 - Css3 - Sass, solo de maquetación (sin interactividad), para un gran amigo mío fotografo de mi ciudad llamado Esteban 'Colo' Cossy, artista al cual admiro mucho y por eso decidí regalarle este simple sitio web. Con este proyecto aprendí a identar y ordenar de manera correcta el codigo y a aplicarle estilos de manera correcta al html",
    descriptionENG: "This was the first project I was able to complete entirely. It's a project made simply with Html5 - Css3 - Sass, focusing solely on layout (without interactivity), for a great friend of mine, a photographer in my city named Esteban 'Colo' Cossy, an artist whom I greatly admire. That's why I decided to gift him this simple website. With this project, I learned how to properly indent and organize code and apply styles correctly to HTML.",
    urlYoutube: "https://www.youtube.com/embed/H7CeVarUQOA?si=Xi_A6KDo50qPqX_4",
    alert: false
  }
];
