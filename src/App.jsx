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

function App() {
  return (
    <BrowserRouter>
      <LenguajeProvider>
        <OpenNavbarProvider>
          <main className='contenedorMainApp'>
            <Navbar/>
            <Routes>
              <Route path="/" element={<MyApp/>} />
              <Route path="/proyects/:id" element={<ProyectDetail/>} />
              <Route path="/distintostiposderenderizado" element={<BlogWeb/>} />
              <Route path="/implementandomipropiossr" element={<BlogSSR/>} />
              <Route path="/queeselpackagejson" element={<BlogPackageJson/>} />
              <Route path="/quesonlosmiddlewere" element={<BlogMiddlewere/>} />
              <Route path="/qrpdf" element={<BlogQR />} />
              <Route path="/*" element={<Navigate to="/" replace/>} />
            </Routes>
          </main>
        </OpenNavbarProvider>
      </LenguajeProvider>
    </BrowserRouter>
  );
}

export default App;
