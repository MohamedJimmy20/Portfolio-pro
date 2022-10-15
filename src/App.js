
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Qualification from './components/qualifications/Qualifications';
import ScrollUp from './components/scrollup/Scrollup';
import Skills from './components/skills/Skills';
import './index.css';

function App() {
  return (
    <>
    
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Contact />

    </main>

    <ScrollUp />
    <Footer />
    

    </>
  );
}

export default App;
