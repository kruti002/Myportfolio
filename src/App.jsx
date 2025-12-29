import Navbar from './components/Navbar';
import Home from './sections/Home';
import Background from './components/Background';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <Background />
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;
