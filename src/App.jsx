import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import SelectedShots from './components/SelectedShots.jsx';
import Strengths from './components/Strengths.jsx';
import Contact from './components/Contact.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <ErrorBoundary fallback={<div className="hero hero--fallback" aria-hidden="true" />}>
          <Hero />
        </ErrorBoundary>
        <About />
        <Projects />
        <SelectedShots />
        <Strengths />
        <Contact />
      </main>
    </>
  );
}