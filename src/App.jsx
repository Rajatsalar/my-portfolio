
import './App.css';
import NavigationBar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Skills from '../src/components/Skills';
import Projects from '../src/components/Projects';
import ContactMe from '../src/components/Contact';
import Footer from '../src/components/Footer';

function App() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;

