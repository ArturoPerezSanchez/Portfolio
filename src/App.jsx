import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import { useMediaQuery } from 'react-responsive';

const App = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 }); // Define el ancho mínimo para considerar como versión de escritorio

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        {isDesktop && <Tech/>} {/* Renderiza <Tech/> solo en versión de escritorio */}
        <Works/>
        <Feedbacks/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
