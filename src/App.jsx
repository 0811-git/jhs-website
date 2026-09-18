import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import FeaturedShot from './components/FeaturedShot.jsx';
import SelectedShots from './components/SelectedShots.jsx';
import Strengths from './components/Strengths.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <FeaturedShot />
        <SelectedShots />
        <Strengths />
        <Contact />
      </main>
    </>
  );
}