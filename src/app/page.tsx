import Banner from '@/components/Banner';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';

function App() {
  return (
    <div className="App">
      <Banner />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;