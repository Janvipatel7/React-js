import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './all-components/Header';
import MainSection from './all-components/MainSection';
import Features from './all-components/Features';
import Intro from './all-components/Intro';
import Works from './all-components/Works';
import Screenshots from './all-components/Screenshots';
import SpecialFeatures from './all-components/SpecialFeatures';
import AccordionScreen from './all-components/AccordionScreen';
import FactsSection from './all-components/FactsSection';
import Subscribe from './all-components/Subscribe';
import Video from './all-components/Video';
import Blog from './all-components/Blog';
import Contact from './all-components/Contact';
import Footer from './all-components/Footer';
import About from './all-components/About';


const App = () => {

  return (
    <>
      <Header />
      <MainSection />
      <Features />
      <About />
      <Intro />
      <Works />
      <Screenshots />
      <SpecialFeatures />
      <AccordionScreen />
      <FactsSection />
      <Subscribe />
      <Video />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}

export default App