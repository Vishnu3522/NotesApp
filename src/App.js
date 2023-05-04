import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route, Link,Routes } from 'react-router-dom';
import './App.css';
import Contact from "./Components/Contact";
import About from "./Components/About";
import Services from "./Components/Services";

function App() {
  return (

    <div className="App">
    <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="about" element={ <About/> } />
    <Route path="contact" element={ <Contact/> } />
    <Route path="services" element={ <Services/> } />
    </Routes>
    </div>
  );
}

export default App;
