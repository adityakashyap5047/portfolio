import NavBar from '@/components/NavBar';
import Banner from '@/components/Banner';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      {/* <Skills /> */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
