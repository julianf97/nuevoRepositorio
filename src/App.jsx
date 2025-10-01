import { HashRouter as BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Importa BrowserRouter desde react-router-dom
import Navbar from './components/Navbar/Navbar.jsx';
import { OpenNavbarProvider } from './context/OpenNavbarContext.jsx';
import { LenguajeProvider } from './context/LenguajeContext.jsx';
import "./App.css"
import MyApp from './components/MyApp/MyApp.jsx';
import ProyectDetail from './components/ProyectDetail/ProyectDetail.jsx';
import BlogWeb from './components/BlogWeb/BlogWeb.jsx';
import BlogSSR from './components/BlogSSR/BlogSSR.jsx';
import BlogPackageJson from './components/BlogPackageJson/BlogPackageJson.jsx';
import BlogMiddlewere from './components/BlogMiddlewere/BlogMiddlewere.jsx';
import BlogQR from './components/BlogQR/BlogQR.jsx';
import fotoRobot from "../public/foto_robot.jpg"

function App() {
  return (
    <BrowserRouter>
      <div className='construccion'>
        <h1>En construcción</h1>
        <div className='fotoRobot'>
          <img src={fotoRobot} alt='fotoRobot'></img>
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
