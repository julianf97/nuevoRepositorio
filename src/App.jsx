import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter desde react-router-dom
import Navbar from './components/Navbar/Navbar.jsx';
import OpenNavbar from './components/OpenNavbar/OpenNavbar.jsx';
import { OpenNavbarProvider } from './context/OpenNavbarContext.jsx';
import "./App.css"
import Presentacion from './components/Presentacion/Presentacion.jsx';
import Projects from './components/Projects/Projects.jsx';

function App() {
  return (
    <BrowserRouter>
      <OpenNavbarProvider>
        <main className='contenedorMainApp'>
          <Navbar/>
          <OpenNavbar/>
          <Presentacion />
          <Projects/>
        </main>
      </OpenNavbarProvider>
    </BrowserRouter>
  );
}

export default App;
