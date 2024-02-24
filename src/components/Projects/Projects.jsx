import "./_projectsMobile.scss";
import "./_projectsIpad.scss";
import "./_projectsDesktop.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import ProyectCard from "../ProjectCard/ProyectCard";
import { arrayProjectsPage } from "../../data/arrayProyectsPage";
import ReactTag from "../Tags/ReactTag/ReactTag";
import ExpressTag from "../Tags/ExpressTag/ExpressTag";
import NodeTag from "../Tags/NodeTag/NodeTag";
import SassTag from "../Tags/SassTag/SassTag";
import FramerMotionTag from '../Tags/FramerMotionTag/FramerMotionTag';
import SQLTag from '../Tags/SQLTag/SQLTag';
import SequelizeTag from '../Tags/SequelizeTag/SequelizeTag';
import StyledComponentsTag from '../Tags/StyledComponentsTag/StyledComponentsTag';
import JavascriptTag from "../Tags/JavascriptTag/JavascriptTag"
import HtmlTag from "../Tags/HtmlTag/HtmlTag"
import CssTag from "../Tags/CssTag/CssTag"
import FireBaseTag from "../Tags/FirebaseTag/FireBaseTag"

export default function Projects() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('All');

    // Función para manejar el cambio de filtro
    const handleFilterChange = (selectedFilter) => {
        setFilter(selectedFilter);
    };

    // Función para manejar el cambio en el valor del input de búsqueda
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const tagComponents = {
        ReactTag,
        ExpressTag,
        NodeTag,
        SassTag,
        FramerMotionTag,
        SQLTag,
        SequelizeTag,
        StyledComponentsTag,
        JavascriptTag,
        FireBaseTag,
        HtmlTag,
        CssTag
    };

    return (
        <article id="projects" className="contenedorGralProjects">
            <div className="contenedorTitulo">
                <h3>Proyectos</h3>
            </div>
            <div className="contenedorTitulo">
                <h4>Proyectos Destacados</h4>
            </div>
            <div className="contenedorBuscador">
              <div className="internoBuscador">
                <div className='buscador'>
                  <FontAwesomeIcon className='iconLupa' icon={ faMagnifyingGlass }></FontAwesomeIcon>
                  <input 
                    type="text" 
                    placeholder='Search' 
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </div>
              </div>
            </div>
            <div className="contenedorBuscadorDesktop">
              <div className="internoBuscador">
                <div className="contenedorTituloDesktop">
                  <h3>Proyectos</h3>
                </div>
                <div className='buscador'>
                  <FontAwesomeIcon className='iconLupa' icon={ faMagnifyingGlass }></FontAwesomeIcon>
                  <input 
                    type="text" 
                    placeholder='Search' 
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </div>
              </div>
            </div>
            <div className="contenedorFiltro">
              <div className="internoFiltro">
              <button onClick={() => handleFilterChange('All')}>All</button>
                <button onClick={() => handleFilterChange('Frontend')}>Front End</button>
                <button onClick={() => handleFilterChange('Fullstack')}>Full Stack</button>
              </div>
            </div>
            <div className="contenedorProyects">
            {arrayProjectsPage.filter(project => {
              // Filtra por título y por filtro seleccionado
              if (
                (searchTerm === '' || project.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
                (filter === 'All' || project.stack.toLowerCase() === filter.toLowerCase())
              ) {
                return true;
              }
              return false;
            }).map((project, index) => (
              <ProyectCard
                key={index}
                id={project.id} 
                title={project.title}
                image={project.image}
                deployLink={project.deployLink}
                serverLink={project.serverLink}
                repositoryLink={project.repositoryLink}
                urlYoutube={project.urlYoutube}
                technologies={project.technologies.map((tag, index) => {
                  const TagComponent = tagComponents[tag];
                  return TagComponent ? <TagComponent key={index} /> : null;
                })}
              />
            ))}
          </div>
        </article>
    );
}
