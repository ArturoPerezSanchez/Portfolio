import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import { useMediaQuery } from 'react-responsive';

const App = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 }); // Define the minimum width to consider the device as desktop

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        {/* <Works/> */}
        <Feedbacks/>
        <div className="relative z-0">
        <Contact/>
        {isDesktop && <StarsCanvas/>} {/* Renders <StarsCanvas/> only in desktop devices */}
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
