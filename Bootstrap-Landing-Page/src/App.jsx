
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import MainSection from './Components/MainSection';
import Features from './Components/Features';
import About from './Components/About';
import Intro from './Components/Intro';
import Works from './Components/Works';
import Screenshots from './Components/Screenshots.JSX';
import SpecialFeatures from './Components/SpecialFeatures';

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
    </>
  )
}

export default App