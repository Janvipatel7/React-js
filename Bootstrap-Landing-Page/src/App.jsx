
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Features from './components/Features';
import Intro from './components/Intro';
import Works from './components/Works';
import Screenshots from './components/Screenshots.JSX';
import SpecialFeatures from './components/SpecialFeatures';
import AccordionScreen from './components/AccordionScreen';
import FactsSection from './components/FactsSection';
import Subscribe from './components/Subscribe';
import Video from './components/Video';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';




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