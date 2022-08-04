import Navbar from "./components/Navbar/Navbar";
import { Intro } from "./components/Intro/Intro";
import './App.css';
import Services from "./components/Services/Services";
import Works from "./components/Works/Works";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Works/>
    </div>
  );
}

export default App;
