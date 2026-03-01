import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

import Home from "./pages/Homepage";
import About from "./pages/Aboutpage";
import Project from "./pages/Project";
import Contact from "./pages/Contactpage";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    <Footer/>

     
    </>
  );
}

export default App;