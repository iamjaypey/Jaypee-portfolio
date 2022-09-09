import Navbar from "./components/Navbar/Navbar";
import { Intro } from "./components/Intro/Intro";
import './App.css';
import Services from "./components/Services/Services";
import Works from "./components/Works/Works";
import Folio from "./components/Folio/Folio";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Works/>
      <Folio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
