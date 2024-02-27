import "./_projectsDesktop.scss"
import "./_projectsIpad.scss"
import "./_projectsMobile.scss"
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
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
import { LenguajeContext } from "../../context/LenguajeContext";
import { useContext } from "react";
import "./_projectsDesktop.scss";
import "./_projectsIpad.scss";
import "./_projectsMobile.scss";

export default function Projects() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('All');
    const [showMore, setShowMore] = useState(false);
    const [projectsToShow, setProjectsToShow] = useState(6); // Mostrar inicialmente 6 proyectos
    const [searchResultsFound, setSearchResultsFound] = useState(true); // Estado para controlar si se encontraron resultados

    const { activeEng } = useContext(LenguajeContext);

    useEffect(() => {
        // Comprobar si se encontraron resultados después de la búsqueda
        if (arrayProjectsPage.some(project => project.title.toLowerCase().includes(searchTerm.toLowerCase()))) {
            setSearchResultsFound(true);
        } else {
            setSearchResultsFound(false);
            setShowMore(true);
        }
    }, [searchTerm]);

    const handleFilterChange = (selectedFilter) => {
        setFilter(selectedFilter);
        setShowMore(true);
        setProjectsToShow(6); // Reiniciar el contador de proyectos mostrados al cambiar el filtro
    };

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

    const handleShowMore = () => {
        setShowMore(true);
        setProjectsToShow(projectsToShow + 3); // Mostrar otros 3 proyectos adicionales
    };

    return (
        <article id="projects" className="contenedorGralProjects">
            <div className="contenedorTitulo">
                <h3>{activeEng ? "Projects" : "Proyectos"}</h3>
            </div>
            <div className="contenedorTitulo">
                <h4>{activeEng ? "Featured Projects" : "Proyectos Destacados"}</h4>
            </div>
            <div className="contenedorBuscador">
                <div className="internoBuscador">
                    <div className='buscador'>
                        <FontAwesomeIcon className='iconLupa' icon={faMagnifyingGlass}></FontAwesomeIcon>
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
                        <h3>{activeEng ? "Projects" : "Proyectos"}</h3>
                    </div>
                    <div className='buscador'>
                        <FontAwesomeIcon className='iconLupa' icon={faMagnifyingGlass}></FontAwesomeIcon>
                        <input
                            type="text"
                            placeholder={activeEng ? "Search" : "Buscar"}
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
            </div>
            <div className="contenedorFiltro">
                <div className="internoFiltro">
                    <button onClick={() => handleFilterChange('All')}>{activeEng ? "All" : "Todos"}</button>
                    <button onClick={() => handleFilterChange('Frontend')}>Front End</button>
                    <button onClick={() => handleFilterChange('Fullstack')}>Full Stack</button>
                </div>
            </div>
            <div className="contenedorProyects">
                {arrayProjectsPage
                    .filter(project => {
                        // Filtra por título y por filtro seleccionado
                        if (
                            (searchTerm === '' || project.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
                            (filter === 'All' || project.stack.toLowerCase() === filter.toLowerCase())
                        ) {
                            return true;
                        }
                        return false;
                    })
                    .slice(0, showMore ? arrayProjectsPage.length : projectsToShow) // Mostrar solo los primeros 'projectsToShow' proyectos
                    .map((project, index) => (
                        <ProyectCard
                            key={index}
                            id={project.id}
                            title={project.title}
                            titleENG={project.titleENG}
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
                {!searchResultsFound && searchTerm !== '' && ( // Mostrar el mensaje de no se encontraron proyectos
                    <div className="noResultsMessage">
                        <h3> No se ha encontrado ningún proyecto. </h3>
                    </div>
                )}
            </div>
            {!showMore && (
                <div className="contenedorBtnVerMas">
                    <button className="btnVerMas" onClick={handleShowMore}>{activeEng ? "See More" : "Ver Más"}</button>
                </div>
            )}
        </article>
    );
}
