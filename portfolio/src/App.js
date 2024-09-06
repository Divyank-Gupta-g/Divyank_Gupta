import Layout from "./Components/Layouts/Layout";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Education from "./Pages/Education/Education";
import Experience from "./Pages/Experience/Experience";
import Projects from "./Pages/Projects/Projects";
import TechStack from "./Pages/TechStack/TechStack";
import Certificates from './Pages/Certificates/Certificates'

import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./Context/ThemeContext";
import RubberBand from 'react-reveal/RubberBand';
import Mobilenav from "./Components/MobileNav/Mobilenav";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <Mobilenav />
        <Layout />
        <div className="container" style={{ backgroundColor: "#264653" }}>
          <About />
          <TechStack />
          <Education />
          <Experience />
          <Projects />
          <Certificates />
          
        </div>
        <div className="container" style={{ backgroundColor: "#006d77" }}>
          <Contact />
        </div>
        <div className="footer pb-3 pt-3" style={{ backgroundColor: "#e9c46a" }}>
          <RubberBand>
          <h4 className="text-center">Made with ❤ By Divyank Gupta</h4>
          </RubberBand>
        </div>
      </div>
      <ScrollToTop smooth color="#edf6f9" style={{ backgroundColor: "#ffb703", borderRadius: "80px" }} />
    </>
  );
}

export default App;
