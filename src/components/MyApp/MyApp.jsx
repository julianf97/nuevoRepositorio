import Presentacion from "../Presentacion/Presentacion"
import OpenNavbar from "../OpenNavbar/OpenNavbar"
import Projects from "../Projects/Projects"
import Blog from "../Blog/Blog"
import { useContext, useEffect } from "react"
import { OpenNavbarContext } from "../../context/OpenNavbarContext"
import About from "../About/About"

export default function MyApp() {

  const { handleExitNavbar } = useContext(OpenNavbarContext);

  useEffect(() => {
    handleExitNavbar();
  }, []); 

  return (
    <>
      <Presentacion/>
      <OpenNavbar/>
      <Projects/>
      <About/>
      <Blog/>
    </>
  )
}
