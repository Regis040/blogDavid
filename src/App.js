// import logo from './logo.svg';
import './App.scss';
import Home from './pages/Home.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from "./pages/Contact.jsx";
import Profil from "./pages/Profil.jsx";
import Articles from "./pages/Articles.jsx";


function App() {
  return (
    <BrowserRouter>
        <Routes>    
             <Route path="/" element={<Home />} />
             <Route path="/contact" element={<Contact />} />      
             <Route path="/profil" element={<Profil />} />
             <Route path="/articles" element={<Articles />} /> 
        </Routes>
    </BrowserRouter>
  );
}
export default App;
