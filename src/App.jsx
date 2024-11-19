import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar'; // Importamos el componente Navbar

function App() {
  // Función para manejar el desplazamiento suave
  const handleLinkClick = (e, targetId) => {
    e.preventDefault(); // Evita que el navegador cambie la URL y haga un reload de la página
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Usamos el componente Navbar y pasamos la función handleLinkClick como prop */}
      <Navbar onLinkClick={handleLinkClick} />

      {/* Las secciones */}
      <div id='home'>
        <Home />
      </div>
      <div id='about'>
        <About />
      </div>
      <div id='projects'>
        <Projects />
      </div>
      <div id='contact'>
        <Contact />
      </div>
    </div>
  );
}

export default App;
