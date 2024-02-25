import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Importa BrowserRouter desde react-router-dom
import Navbar from './components/Navbar/Navbar.jsx';
import { OpenNavbarProvider } from './context/OpenNavbarContext.jsx';
import "./App.css"
import MyApp from './components/MyApp/MyApp.jsx';
import ProyectDetail from './components/ProyectDetail/ProyectDetail.jsx';

function App() {
  return (
    <BrowserRouter>
      <OpenNavbarProvider>
        <main className='contenedorMainApp'>
          <Navbar/>
          <Routes>
            <Route path="/" element={<MyApp/>} />
            <Route path="/proyects/:id" element={<ProyectDetail/>} />
            <Route path="/*" element={<Navigate to="/" replace/>} />
          </Routes>
        </main>
      </OpenNavbarProvider>
    </BrowserRouter>
  );
}

export default App;
