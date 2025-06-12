
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import MainSection from './Components/MainSection';
import Features from './Components/Features';
import About from './Components/About';
import Intro from './Components/Intro';
import Works from './Components/Works';
import Screenshots from './Components/Screenshots.JSX';
import SpecialFeatures from './Components/SpecialFeatures';
import AccordionScreen from './Components/AccordionScreen';
import FactsSection from './Components/FactsSection';
import Subscribe from './Components/Subscribe';
import Video from './Components/Video';
import Blog from './Components/Blog';
import Contact from './Components/Contact';

const App = () => {

  return (
    <>
      <Header />
      <MainSection/>
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
    </>
  )
}

export default App